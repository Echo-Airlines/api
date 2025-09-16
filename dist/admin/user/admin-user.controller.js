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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUserController = void 0;
const common_1 = require("@nestjs/common");
const admin_user_service_1 = require("./admin-user.service");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
const is_admin_guard_1 = require("../../auth/is-admin.guard");
const AdminAddUserDto_1 = require("./dto/AdminAddUserDto");
const hash_service_1 = require("../../hash/hash.service");
const config_1 = require("@nestjs/config");
const email_service_1 = require("../../email/email.service");
const crypto = require("crypto");
const AdminUpdateUserDto_1 = require("./dto/AdminUpdateUserDto");
let AdminUserController = class AdminUserController {
    userService;
    hashService;
    configService;
    emailService;
    constructor(userService, hashService, configService, emailService) {
        this.userService = userService;
        this.hashService = hashService;
        this.configService = configService;
        this.emailService = emailService;
    }
    async getAll() {
        const data = await this.userService.findAll({
            select: {
                Id: true,
                Username: true,
                Email: true,
                FirstName: true,
                LastName: true,
                FirstLoginCompleted: true,
                IsOnline: true,
                IsBanned: true,
                BanReason: true,
                BanExpiresAt: true,
                IsVerified: true,
                LastLogin: true,
                CreatedAt: true,
                UpdatedAt: true,
                DiscordId: true,
                DiscordUsername: true,
                Roles: true,
            }
        });
        return data;
    }
    async getOneByUsername(username) {
        const data = await this.userService.findOne({
            where: {
                Username: username,
            },
            select: {
                Id: true,
                Username: true,
                Email: true,
                FirstName: true,
                LastName: true,
                FirstLoginCompleted: true,
                IsOnline: true,
                IsBanned: true,
                BanReason: true,
                BanExpiresAt: true,
                IsVerified: true,
                EmailVerifiedAt: true,
                LastLogin: true,
                CreatedAt: true,
                UpdatedAt: true,
                Roles: true,
                WelcomeEmailSentAt: true,
                Members: {
                    select: {
                        Id: true,
                        VARole: true,
                        TotalCargosTransportedLbs: true,
                        TotalPAXsTransported: true,
                        TotalEarnedCredits: true,
                        TotalSpentCredits: true,
                        NumberOfFlights: true,
                        FlightHours: true,
                        Color: true,
                        ReputationImpact: true,
                        LastVAFlightDate: true,
                        LastRefresh: true,
                        VirtualAirline: {
                            select: {
                                Id: true,
                                IsPrimary: true,
                                Identifier: true,
                                Name: true,
                                Description: true,
                                LastDividendsDistribution: true,
                                LastComputationDate: true,
                                ComputedMemberCount: true,
                                ComputedAircraftsCount: true,
                                ComputedNumberOfFlights30Days: true,
                                ComputedNumberOfFlightHours30Days: true,
                                ComputedMostUsedAirports: true,
                                LastConnection: true,
                                LastReportDate: true,
                                Reputation: true,
                                CreationDate: true,
                                DifficultyLevel: true,
                                Level: true,
                                LevelXP: true,
                                TotalContractsCompleted: true,
                                TotalContractsEarnedCredits: true,
                                LastRefresh: true,
                                World: true,
                            }
                        },
                        Company: true,
                    },
                },
            }
        });
        if (!data) {
            throw new common_1.NotFoundException('User not found');
        }
        return data;
    }
    async deleteUserById(id) {
        const data = await this.userService.deleteOneById(id);
        return data;
    }
    async createUser(body) {
        let user = null;
        let createData = {
            Username: body.Username.toLowerCase(),
            Email: body.Email,
            FirstName: body.FirstName,
            LastName: body.LastName,
            Roles: {
                connect: body.Roles.map((role) => ({ Slug: role })),
            },
            PrivacySettings: {
                create: {
                    ShowOnlineStatus: body.PrivacySettings.ShowOnlineStatus,
                    ShowFirstName: body.PrivacySettings.ShowFirstName,
                    ShowLastName: body.PrivacySettings.ShowLastName,
                    ShowLastNameInitial: body.PrivacySettings.ShowLastNameInitial,
                    ShowLastLogin: body.PrivacySettings.ShowLastLogin,
                },
            },
            Password: this.hashService.hashSync(body.Password),
        };
        if (body.SendEmail) {
            createData.ConfirmEmailToken = crypto.randomUUID();
        }
        user = await this.userService.create(createData, {
            select: {
                Id: true,
                Username: true,
                Email: true,
                FirstName: true,
                LastName: true,
                FirstLoginCompleted: true,
                IsOnline: true,
                IsBanned: true,
                BanReason: true,
                BanExpiresAt: true,
                IsVerified: true,
                LastLogin: true,
                DiscordId: true,
                DiscordUsername: true,
                DiscordAvatar: true,
                DiscordEmail: true,
                Roles: true,
                PrivacySettings: true,
                Members: true,
                InviteCode: true,
                ConfirmEmailToken: true,
            },
        });
        if (!user || user === null) {
            throw new common_1.NotFoundException('User not found');
        }
        if (user.Email && body.SendEmail) {
            const urlBase = this.configService.get('FRONTEND_URL') || 'http://localhost:3001';
            const welcomeEmail = {
                to: user.Email,
                template: 'welcome',
                subject: 'Welcome to our Virtual Airline!',
                context: {
                    firstName: user.FirstName,
                    username: user.Username,
                    password: body.Password,
                    email: user.Email,
                    confirmLink: `${urlBase}/api/user/confirm-email?token=${user.ConfirmEmailToken}`,
                },
            };
            await this.emailService.sendWelcomeEmail(welcomeEmail);
            user.WelcomeEmailSentAt = new Date();
            user = await this.userService.update(user.Id, { WelcomeEmailSentAt: user.WelcomeEmailSentAt });
        }
        return user;
    }
    async updateUser(username, body) {
        let data = {
            Username: body.Username?.toLowerCase(),
            Email: body.Email,
            FirstName: body.FirstName,
            LastName: body.LastName,
            Roles: {
                connect: body.Roles?.map((role) => ({ Slug: role })),
            },
        };
        if (body.Password && body.ConfirmPassword === body.Password) {
            data.Password = this.hashService.hashSync(body.Password);
        }
        const user = await this.userService.updateByUsername(username, data, { select: { Username: true, Email: true, FirstName: true, LastName: true, Roles: true } });
        return user;
    }
    async sendResetPasswordEmail(username) {
        if (!username) {
            throw new common_1.BadRequestException('Username is required');
        }
        let user = await this.userService.findOne({ where: { Username: username }, select: {
                Id: true,
                Password: true,
                Email: true,
                ResetPasswordEmailSentAt: true,
                ResetPasswordToken: true,
            } });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const urlBase = this.configService.get('FRONTEND_URL') || 'http://localhost:3001';
        if (!user.Email || user.Email === null) {
            throw new common_1.BadRequestException('User email not found');
        }
        user = await this.userService.update(user.Id, { ResetPasswordToken: crypto.randomUUID(), ResetPasswordEmailSentAt: new Date() }, {
            select: {
                Id: true,
                Username: true,
                Email: true,
                FirstName: true,
                LastName: true,
                FirstLoginCompleted: true,
                IsOnline: true,
                IsBanned: true,
                BanReason: true,
                BanExpiresAt: true,
                IsVerified: true,
                LastLogin: true,
                DiscordId: true,
                DiscordUsername: true,
                DiscordAvatar: true,
                DiscordEmail: true,
                Roles: true,
                PrivacySettings: true,
                Members: true,
                InviteCode: true,
                ConfirmEmailToken: true,
                EmailVerifiedAt: true,
                WelcomeEmailSentAt: true,
            }
        });
        if (!user || user === null) {
            throw new common_1.NotFoundException('User not found');
        }
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        await this.emailService.sendResetPasswordEmail({
            to: user.Email,
            template: 'reset-password',
            subject: 'Reset your password',
            context: {
                resetPasswordLink: `${urlBase}/auth/reset-password?token=${user.ResetPasswordToken}`,
            },
        });
        if (!user || user === null) {
            throw new common_1.NotFoundException('User not found');
        }
        user = await this.userService.update(user.Id, { ResetPasswordEmailSentAt: new Date() }, {
            select: {
                Id: true,
                Username: true,
                Email: true,
                FirstName: true,
                LastName: true,
                FirstLoginCompleted: true,
                IsOnline: true,
                IsBanned: true,
                BanReason: true,
                BanExpiresAt: true,
                IsVerified: true,
                LastLogin: true,
                DiscordId: true,
                DiscordUsername: true,
                DiscordAvatar: true,
                DiscordEmail: true,
                Roles: true,
                PrivacySettings: true,
                Members: true,
                InviteCode: true,
                ConfirmEmailToken: true,
                EmailVerifiedAt: true,
                WelcomeEmailSentAt: true,
            }
        });
        return user;
    }
    async sendWelcomeEmail(username) {
        let user = await this.userService.findOne({ where: { Username: username }, select: {
                Id: true,
                Username: true,
                Email: true,
                FirstName: true,
                LastName: true,
                FirstLoginCompleted: true,
                IsOnline: true,
                IsBanned: true,
                BanReason: true,
                BanExpiresAt: true,
                IsVerified: true,
                LastLogin: true,
                DiscordId: true,
                DiscordUsername: true,
                DiscordAvatar: true,
                DiscordEmail: true,
                Roles: true,
                PrivacySettings: true,
                Members: true,
                InviteCode: true,
                ConfirmEmailToken: true,
                EmailVerifiedAt: true,
                WelcomeEmailSentAt: true,
            }, });
        const urlBase = this.configService.get('FRONTEND_URL') || 'http://localhost:3001';
        if (!user || user === null) {
            throw new common_1.NotFoundException('User not found');
        }
        if (!user.Email) {
            throw new common_1.BadRequestException('User email not found');
        }
        if (!user.ConfirmEmailToken) {
            user = await this.userService.update(user.Id, { ConfirmEmailToken: crypto.randomUUID() }, {
                select: {
                    Id: true,
                    Username: true,
                    Email: true,
                    FirstName: true,
                    LastName: true,
                    FirstLoginCompleted: true,
                    IsOnline: true,
                    IsBanned: true,
                    BanReason: true,
                    BanExpiresAt: true,
                    IsVerified: true,
                    LastLogin: true,
                    DiscordId: true,
                    DiscordUsername: true,
                    DiscordAvatar: true,
                    DiscordEmail: true,
                    Roles: true,
                    PrivacySettings: true,
                    Members: true,
                    InviteCode: true,
                    ConfirmEmailToken: true,
                    WelcomeEmailSentAt: true,
                },
            });
        }
        if (!user || user === null) {
            throw new common_1.NotFoundException('User not found');
        }
        await this.emailService.sendWelcomeEmail({
            to: user.Email,
            template: 'welcome',
            subject: 'Welcome to our Virtual Airline!',
            context: {
                firstName: user.FirstName,
                username: user.Username,
                email: user.Email,
                confirmLink: `${urlBase}/api/user/confirm-email?token=${user.ConfirmEmailToken}`,
            },
        });
        user = await this.userService.update(user.Id, { WelcomeEmailSentAt: new Date() }, {
            select: {
                Id: true,
                Username: true,
                Email: true,
                FirstName: true,
                LastName: true,
                FirstLoginCompleted: true,
                IsOnline: true,
                IsBanned: true,
                BanReason: true,
                BanExpiresAt: true,
                IsVerified: true,
                LastLogin: true,
                DiscordId: true,
                DiscordUsername: true,
                DiscordAvatar: true,
                DiscordEmail: true,
                Roles: true,
                PrivacySettings: true,
                Members: true,
                InviteCode: true,
                ConfirmEmailToken: true,
                EmailVerifiedAt: true,
                WelcomeEmailSentAt: true,
            }
        });
        return user;
    }
    async unassignRoleToUser(id, body) {
        const data = await this.userService.unassignRoleFromUser(id, body.roleSlug);
        return data;
    }
    async assignRoleToUser(id, body) {
        const data = await this.userService.assignRoleToUser(id, body.roleSlug);
        return data;
    }
    async getInviteCodes() {
        const data = await this.userService.findManyInviteCodes();
        return data;
    }
    async generateInviteCode() {
        const data = await this.userService.createInviteCode();
        return data;
    }
};
exports.AdminUserController = AdminUserController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminUserController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':username'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminUserController.prototype, "getOneByUsername", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminUserController.prototype, "deleteUserById", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AdminAddUserDto_1.AdminAddUserDto]),
    __metadata("design:returntype", Promise)
], AdminUserController.prototype, "createUser", null);
__decorate([
    (0, common_1.Put)(':username'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    __param(0, (0, common_1.Param)('username')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, AdminUpdateUserDto_1.AdminUpdateUserDto]),
    __metadata("design:returntype", Promise)
], AdminUserController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Put)(':username/send-reset-password-email'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminUserController.prototype, "sendResetPasswordEmail", null);
__decorate([
    (0, common_1.Put)(':username/send-welcome-email'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminUserController.prototype, "sendWelcomeEmail", null);
__decorate([
    (0, common_1.Post)(':id/unassign-role'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AdminUserController.prototype, "unassignRoleToUser", null);
__decorate([
    (0, common_1.Post)(':id/assign-role'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AdminUserController.prototype, "assignRoleToUser", null);
__decorate([
    (0, common_1.Get)('invite-codes'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminUserController.prototype, "getInviteCodes", null);
__decorate([
    (0, common_1.Post)('invite-codes'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminUserController.prototype, "generateInviteCode", null);
exports.AdminUserController = AdminUserController = __decorate([
    (0, common_1.Controller)(['admin/user', 'admin/users', 'admin/u']),
    __metadata("design:paramtypes", [admin_user_service_1.AdminUserService, hash_service_1.HashService, config_1.ConfigService, email_service_1.EmailService])
], AdminUserController);
//# sourceMappingURL=admin-user.controller.js.map