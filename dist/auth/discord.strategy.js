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
exports.DiscordStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_discord_1 = require("passport-discord");
const auth_service_1 = require("./auth.service");
const app_config_service_1 = require("../app-config/app-config.service");
let DiscordStrategy = class DiscordStrategy extends (0, passport_1.PassportStrategy)(passport_discord_1.Strategy, 'discord') {
    authService;
    appConfigService;
    constructor(authService, appConfigService) {
        super({
            clientID: process.env.DISCORD_CLIENT_ID || '',
            clientSecret: process.env.DISCORD_CLIENT_SECRET || '',
            callbackURL: process.env.DISCORD_CALLBACK_URL || '',
            scope: ['identify', 'email'],
        });
        this.authService = authService;
        this.appConfigService = appConfigService;
    }
    async validate(accessToken, refreshToken, profile, done) {
        try {
            const appConfig = await this.appConfigService.getLatest();
            if (!appConfig?.DiscordAuthEnabled) {
                return done(new Error('Discord authentication is not enabled'), false);
            }
            const { id, username, email, avatar } = profile;
            let user = await this.authService.findUserByDiscordId(id);
            if (!user) {
                if (!appConfig.DiscordAuthCreateUser) {
                    throw new Error('User not found and Discord auth create user is disabled');
                }
                user = await this.authService.createUserFromDiscord({
                    discordId: id,
                    discordUsername: username,
                    discordEmail: email,
                    discordAvatar: avatar,
                });
            }
            else {
                user = await this.authService.updateUserDiscordInfo(user.Id, {
                    discordUsername: username,
                    discordEmail: email,
                    discordAvatar: avatar,
                });
            }
            return done(null, user);
        }
        catch (error) {
            return done(error, false);
        }
    }
};
exports.DiscordStrategy = DiscordStrategy;
exports.DiscordStrategy = DiscordStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        app_config_service_1.AppConfigService])
], DiscordStrategy);
//# sourceMappingURL=discord.strategy.js.map