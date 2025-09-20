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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const local_auth_guard_1 = require("./guards/local-auth.guard");
const auth_service_1 = require("./auth.service");
const jwt_auth_guard_1 = require("./guards/jwt-auth.guard");
const ChangePasswordDto_1 = require("./dto/ChangePasswordDto");
const discord_auth_guard_1 = require("./guards/discord-auth.guard");
const RegisterUserDto_1 = require("./dto/RegisterUserDto");
const app_config_service_1 = require("../app-config/app-config.service");
const ForgotPasswordDto_1 = require("./dto/ForgotPasswordDto");
const ResetPasswordDto_1 = require("./dto/ResetPasswordDto");
let AuthController = class AuthController {
    authService;
    appConfigService;
    constructor(authService, appConfigService) {
        this.authService = authService;
        this.appConfigService = appConfigService;
    }
    async login(req) {
        const result = await this.authService.login(req.user);
        return result;
    }
    async logout(req) {
        return req.logout();
    }
    async changePassword(req, body) {
        if (req.user.username !== body.Username) {
            throw new common_1.UnauthorizedException('Invalid identity');
        }
        return this.authService.changePassword(body);
    }
    async session(req) {
        const user = await this.authService.me(req.user.userId);
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid session');
        }
        return user;
    }
    async forgotPassword(body) {
        const result = await this.authService.forgotPassword(body);
        return result;
    }
    async resetPassword(body) {
        const data = await this.authService.resetPassword(body);
        return data;
    }
    async discordAuth(req, res) {
        const user = req.user;
        if (!user) {
            const redirectUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
            return res.redirect(`${redirectUrl}/auth/login?error=discord_auth_failed`);
        }
    }
    async register(body) {
        const appConfig = await this.appConfigService.getLatest();
        let inviteCode = await this.authService.getInviteCode(body.Code);
        if (!inviteCode) {
            throw new common_1.NotFoundException('Invite code not found');
        }
        if (inviteCode.IsUsed) {
            throw new common_1.BadRequestException('Invite code already used');
        }
        if (!appConfig?.AcceptingNewMembers && (!inviteCode.IsUsed || !inviteCode)) {
            throw new common_1.BadRequestException('New members are not allowed to register');
        }
        const user = await this.authService.getUserByUsername(body.Username);
        if (user) {
            throw new common_1.BadRequestException('Username already taken');
        }
        if (body.Email) {
            const emailUser = await this.authService.getUserByEmail(body.Email);
            if (emailUser) {
                throw new common_1.BadRequestException('Email already taken');
            }
        }
        const newUser = await this.authService.createUser(body);
        inviteCode = await this.authService.markInviteCodeAsUsed(inviteCode.Id);
        const result = await this.authService.login(newUser);
        return {
            user: newUser,
            token: result.access_token
        };
    }
    async discordAuthCallback(req, res) {
        const user = req.user;
        if (!user) {
            const redirectUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
            return res.redirect(`${redirectUrl}/auth/login?error=discord_auth_failed`);
        }
        const result = await this.authService.login(user);
        const redirectUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
        return res.redirect(`${redirectUrl}/auth/discord/callback?token=${result.access_token}`);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, common_1.Post)('logout'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('change-password'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, ChangePasswordDto_1.ChangePasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "changePassword", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('session'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "session", null);
__decorate([
    (0, common_1.Post)('forgot-password'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ForgotPasswordDto_1.ForgotPasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "forgotPassword", null);
__decorate([
    (0, common_1.Post)('reset-password'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ResetPasswordDto_1.ResetPasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resetPassword", null);
__decorate([
    (0, common_1.Get)('discord'),
    (0, common_1.UseGuards)(discord_auth_guard_1.DiscordAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "discordAuth", null);
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RegisterUserDto_1.RegisterUserDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Get)('discord/callback'),
    (0, common_1.UseGuards)(discord_auth_guard_1.DiscordAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "discordAuthCallback", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService, app_config_service_1.AppConfigService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map