"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const UserProfile_dto_1 = require("../user/dto/UserProfile.dto");
const hash_service_1 = require("../hash/hash.service");
const jwt_1 = require("@nestjs/jwt");
const email_service_1 = require("../email/email.service");
let AuthService = class AuthService {
    prisma;
    hashService;
    jwtService;
    emailService;
    async markInviteCodeAsUsed(Id) {
        const result = await this.prisma.inviteCode.update({
            where: { Id },
            data: { IsUsed: true, UsedAt: new Date() },
        });
        return result;
    }
    constructor(prisma, hashService, jwtService, emailService) {
        this.prisma = prisma;
        this.hashService = hashService;
        this.jwtService = jwtService;
        this.emailService = emailService;
    }
    async _findUserByIdentity(identity, password) {
        let where = {
            IsBanned: false,
        };
        if (identity.includes('@')) {
            where.Email = identity.toLowerCase();
        }
        else {
            where.Username = identity.toLowerCase();
        }
        const user = await this.prisma.user.findFirst({
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
    async _updateUserLastLogin(userId) {
        await this.prisma.user.update({
            where: { Id: userId },
            data: { LastLogin: new Date() },
        });
    }
    async _validateUser(identity, password) {
        const user = await this._findUserByIdentity(identity, password);
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
    async me(userId) {
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
                Members: {
                    include: {
                        Company: true,
                    }
                },
            }
        });
        if (!user) {
            return null;
        }
        const result = new UserProfile_dto_1.UserProfileDto(user);
        return result;
    }
    async validateUser(identity, password) {
        const user = await this._validateUser(identity, password);
        if (!user) {
            return null;
        }
        const result = new UserProfile_dto_1.UserProfileDto(user);
        return result;
    }
    async login(user) {
        const payload = { username: user.Username, sub: user.Id, roles: user.Roles };
        await this._updateUserLastLogin(user.Id);
        return {
            access_token: this.jwtService.sign(payload),
            user,
        };
    }
    async changePassword(body) {
        const user = await this._findUserByIdentity(body.Username, body.CurrentPassword);
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        if (body.NewPassword !== body.ConfirmNewPassword) {
            throw new common_1.BadRequestException('Passwords do not match');
        }
        const hashedPassword = await this.hashService.hash(body.NewPassword);
        const updatedUser = await this.prisma.user.update({
            where: { Id: user.Id },
            data: { Password: hashedPassword },
        });
        const result = new UserProfile_dto_1.UserProfileDto(updatedUser);
        return result;
    }
    async forgotPassword(body) {
        let user = await this.prisma.user.findUnique({
            where: { Email: body.Email },
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
                Members: {
                    include: {
                        Company: true,
                    }
                },
            }
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        if (!user.Email) {
            throw new common_1.BadRequestException('User email not found');
        }
        const ResetPasswordToken = this.jwtService.sign({ userId: user.Id }, { expiresIn: '2h' });
        user = await this.prisma.user.update({
            where: { Id: user.Id },
            data: { ResetPasswordToken: ResetPasswordToken },
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
                Members: {
                    include: {
                        Company: true,
                    }
                },
            }
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        if (!user.Email) {
            throw new common_1.BadRequestException('User email not found');
        }
        const verifyLink = `${process.env.FRONTEND_URL}/auth/reset-password?token=${ResetPasswordToken}`;
        console.log(verifyLink);
        await this.emailService.sendForgotPasswordEmail({
            to: user.Email,
            subject: 'Forgot Password',
            template: 'forgot-password',
            context: {
                username: user.Username,
                firstName: user.FirstName,
                verifyLink,
            },
        });
        return user;
    }
    async createUser(body) {
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
                InviteCode: (body.Code) ? {
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
        const result = new UserProfile_dto_1.UserProfileDto(user);
        return result;
    }
    async findUserByDiscordId(discordId) {
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
        return user;
    }
    async createUserFromDiscord(discordData) {
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
        return user;
    }
    async updateUserDiscordInfo(userId, discordData) {
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
        return user;
    }
    async getInviteCode(code) {
        if (!code) {
            throw new common_1.BadRequestException('Code is required');
        }
        const query = {
            where: { Code: code },
        };
        const inviteCode = await this.prisma.inviteCode.findUnique(query);
        return inviteCode;
    }
    async getUserByUsername(username) {
        if (!username) {
            throw new common_1.BadRequestException('Username is required');
        }
        const user = await this.prisma.user.findUnique({
            where: { Username: username },
        });
        return user;
    }
    async getUserByEmail(email) {
        if (!email) {
            throw new common_1.BadRequestException('Email is required');
        }
        const user = await this.prisma.user.findUnique({
            where: { Email: email },
        });
        return user;
    }
    async resetPassword(body) {
        const user = await this.prisma.user.findUnique({
            where: { ResetPasswordToken: body.token },
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        if (body.password !== body.confirmPassword) {
            throw new common_1.BadRequestException('Passwords do not match');
        }
        const hashedPassword = await this.hashService.hash(body.password);
        await this.prisma.user.update({
            where: { Id: user.Id },
            data: { Password: hashedPassword },
        });
        return user;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        hash_service_1.HashService,
        jwt_1.JwtService,
        email_service_1.EmailService])
], AuthService);
//# sourceMappingURL=auth.service.js.map