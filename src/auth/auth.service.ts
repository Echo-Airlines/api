import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.service';
import { AuthUser, User } from '@user/dto/PublicUser.dto';
import { UserProfileDto } from '@user/dto/UserProfile.dto';
import { Prisma, User as PrismaUser, Role, UserPrivacySettings } from 'prisma/generated/prisma';
import { HashService } from 'src/hash/hash.service';
import { JwtService } from '@nestjs/jwt';
import { ChangePasswordDto, } from './dto/ChangePasswordDto';

@Injectable()
export class AuthService {
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
            }
        });

        const result: UserProfileDto = new UserProfileDto(user as unknown as User);

        return result;
    }

    private async _validateUser(identity: string, password: string): Promise<AuthUser|null> {
        const user: AuthUser|null = await this._findUserByIdentity(identity, password);

        if (!user) {
            return null;
        }

        const isPasswordValid = await this.hashService.compare(password, user.Password);

        if (!isPasswordValid) {
            return null;
        }

        return user;
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
}
