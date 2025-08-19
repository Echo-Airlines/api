import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.service';
import { AuthUser, User } from '@user/dto/PublicUser.dto';
import { UserProfileDto } from '@user/dto/UserProfile.dto';
import { InviteCode, Prisma, User as PrismaUser, Role, UserPrivacySettings } from 'prisma/generated/prisma';
import { HashService } from 'src/hash/hash.service';
import { JwtService } from '@nestjs/jwt';
import { ChangePasswordDto, } from './dto/ChangePasswordDto';
import { RegisterUserDto } from './dto/RegisterUserDto';

interface DiscordUserData {
  discordId: string;
  discordUsername: string;
  discordEmail?: string;
  discordAvatar?: string;
}

@Injectable()
export class AuthService {
    public async markInviteCodeAsUsed(Id: string): Promise<InviteCode> {
        const result = await this.prisma.inviteCode.update({
            where: { Id },
            data: { IsUsed: true, UsedAt: new Date() },
        });

        return result;
    }

    constructor(
        private prisma: PrismaService,
        private hashService: HashService,
        private jwtService: JwtService
    ) {}

    private async _findUserByIdentity(identity: string, password: string) {
        let where: Prisma.UserWhereInput = {
            IsBanned: false,
        }
        
        if (identity.includes('@')) {
            where.Email = identity;
            // where.Password = hashedPassword;
        } else {
            where.Username = identity;
            // where.Password = hashedPassword;
        }

        const user: AuthUser | null = await this.prisma.user.findFirst({
            where,
            select: {
                Id: true,
                Username: true,
                FirstName: true,
                LastName: true,
                FirstLoginCompleted: true,
                IsOnline: true,
                IsVerified: true,
                CreatedAt: true,
                UpdatedAt: true,
                Roles: true,
                PrivacySettings: true,
                Email: true,
                IsBanned: true,
                BanReason: true,
                BanExpiresAt: true,
                Password: true,
                LastLogin: true,
            }          
        });

        return user;
    }

    private async _updateUserLastLogin(userId: string) {
        await this.prisma.user.update({
            where: { Id: userId },
            data: { LastLogin: new Date() },
        });
    }

    private async _validateUser(identity: string, password: string): Promise<AuthUser|null> {
        const user: AuthUser|null = await this._findUserByIdentity(identity, password);

        if (!user) {
            return null;
        }

        if (!user.Password) {
            return null;
        }

        const isPasswordValid = await this.hashService.compare(password, user.Password);

        if (!isPasswordValid) {
            return null;
        }

        return user;
    }

    async me(userId: string) {
        const user = await this.prisma.user.findUnique({
            where: { Id: userId },
            select: {
                Id: true,
                Username: true,
                FirstName: true,
                LastName: true,
                FirstLoginCompleted: true,
                IsOnline: true,
                IsVerified: true,
                CreatedAt: true,
                UpdatedAt: true,
                Roles: true,
                PrivacySettings: true,
                Email: true,
                IsBanned: true,
                BanReason: true,
                BanExpiresAt: true,
                LastLogin: true,
                Members: true,
            }
        });

        if (!user) {
            return null;
        }
        
        const result: UserProfileDto = new UserProfileDto(user as unknown as User);

        return result;
    }

    async validateUser(identity: string, password: string) {
        const user: AuthUser|null = await this._validateUser(identity, password);

        if (!user) {
            return null;
        }

        const result: UserProfileDto = new UserProfileDto(user as unknown as AuthUser);

        return result;
    }

    async login(user: UserProfileDto) {
        const payload = { username: user.Username, sub: user.Id, roles: user.Roles };
        
        // update the user's last login
        await this._updateUserLastLogin(user.Id);

        return {
            access_token: this.jwtService.sign(payload),
            user,
        };
    }

    async changePassword(body: ChangePasswordDto) {
        const user: AuthUser|null = await this._findUserByIdentity(body.Username, body.CurrentPassword);

        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }

        if (body.NewPassword !== body.ConfirmNewPassword) {
            throw new BadRequestException('Passwords do not match');
        }

        const hashedPassword = await this.hashService.hash(body.NewPassword);

        const updatedUser = await this.prisma.user.update({
            where: { Id: user.Id },
            data: { Password: hashedPassword },
        });

        const result = new UserProfileDto(updatedUser as unknown as AuthUser);
        return result;
    }

    async createUser(body: RegisterUserDto) {
        const user = await this.prisma.user.create({
            data: {
                Username: body.Username,
                Email: body.Email,
                FirstName: body.FirstName,
                LastName: body.LastName,
                Password: await this.hashService.hash(body.Password),
                Roles: {
                    connect: {
                        Slug: 'user'
                    }
                },
                InviteCode: (body.Code) ?{
                    connect: {
                        Code: body.Code,
                    }
                } : undefined,
                PrivacySettings: {
                    create: {
                        ShowOnlineStatus: true,
                        ShowFirstName: true,
                        ShowLastName: false,
                        ShowLastNameInitial: false,
                        ShowLastLogin: false
                    }
                }
            },
        });

        const result = new UserProfileDto(user as unknown as AuthUser);

        return result;
    }

    // Discord OAuth2 methods
    async findUserByDiscordId(discordId: string): Promise<AuthUser | null> {
        const user = await this.prisma.user.findUnique({
            where: { DiscordId: discordId },
            select: {
                Id: true,
                Username: true,
                FirstName: true,
                LastName: true,
                FirstLoginCompleted: true,
                IsOnline: true,
                IsVerified: true,
                CreatedAt: true,
                UpdatedAt: true,
                Roles: true,
                PrivacySettings: true,
                Email: true,
                IsBanned: true,
                BanReason: true,
                BanExpiresAt: true,
                Password: true,
                LastLogin: true,
                DiscordId: true,
                DiscordUsername: true,
                DiscordAvatar: true,
                DiscordEmail: true,
            }
        });

        return user as AuthUser | null;
    }

    async createUserFromDiscord(discordData: DiscordUserData): Promise<AuthUser> {
        const user = await this.prisma.user.create({
            data: {
                Username: discordData.discordUsername,
                DiscordId: discordData.discordId,
                DiscordUsername: discordData.discordUsername,
                DiscordEmail: discordData.discordEmail,
                DiscordAvatar: discordData.discordAvatar,
                Email: discordData.discordEmail,
                IsVerified: true,
                Roles: {
                    connect: {
                        Slug: 'user'
                    }
                },
                PrivacySettings: {
                    create: {
                        ShowOnlineStatus: true,
                        ShowFirstName: true,
                        ShowLastName: false,
                        ShowLastNameInitial: false,
                        ShowLastLogin: false
                    }
                }
            },
            select: {
                Id: true,
                Username: true,
                FirstName: true,
                LastName: true,
                FirstLoginCompleted: true,
                IsOnline: true,
                IsVerified: true,
                CreatedAt: true,
                UpdatedAt: true,
                Roles: true,
                PrivacySettings: true,
                Email: true,
                IsBanned: true,
                BanReason: true,
                BanExpiresAt: true,
                Password: true,
                LastLogin: true,
                DiscordId: true,
                DiscordUsername: true,
                DiscordAvatar: true,
                DiscordEmail: true,
            }
        });

        return user as AuthUser;
    }

    async updateUserDiscordInfo(userId: string, discordData: Omit<DiscordUserData, 'discordId'>): Promise<AuthUser> {
        const user = await this.prisma.user.update({
            where: { Id: userId },
            data: {
                DiscordUsername: discordData.discordUsername,
                DiscordEmail: discordData.discordEmail,
                DiscordAvatar: discordData.discordAvatar,
                Email: discordData.discordEmail,
                LastLogin: new Date()
            },
            select: {
                Id: true,
                Username: true,
                FirstName: true,
                LastName: true,
                FirstLoginCompleted: true,
                IsOnline: true,
                IsVerified: true,
                CreatedAt: true,
                UpdatedAt: true,
                Roles: true,
                PrivacySettings: true,
                Email: true,
                IsBanned: true,
                BanReason: true,
                BanExpiresAt: true,
                Password: true,
                LastLogin: true,
                DiscordId: true,
                DiscordUsername: true,
                DiscordAvatar: true,
                DiscordEmail: true,
            }
        });

        return user as AuthUser;
    }

    async getInviteCode(code: string) {
        if (!code) {
            throw new BadRequestException('Code is required');
        }

        const query: Prisma.InviteCodeFindUniqueArgs = {
            where: { Code: code },
        }

        const inviteCode = await this.prisma.inviteCode.findUnique(query);

        return inviteCode;
    }

    async getUserByUsername(username: string) {
        if (!username) {
            throw new BadRequestException('Username is required');
        }

        const user = await this.prisma.user.findUnique({
            where: { Username: username },
        });

        return user;
    }

    async getUserByEmail(email: string) {
        if (!email) {
            throw new BadRequestException('Email is required');
        }

        const user = await this.prisma.user.findUnique({
            where: { Email: email },
        });

        return user;
    }
}
