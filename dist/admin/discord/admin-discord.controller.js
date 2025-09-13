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
exports.AdminDiscordController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
const is_admin_guard_1 = require("../../auth/is-admin.guard");
const admin_discord_service_1 = require("./admin-discord.service");
const CreateDiscordChannelWebhookDto_1 = require("./dto/CreateDiscordChannelWebhookDto");
const discord_service_1 = require("../../discord/discord.service");
const CreateDiscordMessageTemplateDto_1 = require("./dto/CreateDiscordMessageTemplateDto");
let AdminDiscordController = class AdminDiscordController {
    adminDiscordService;
    discordService;
    constructor(adminDiscordService, discordService) {
        this.adminDiscordService = adminDiscordService;
        this.discordService = discordService;
    }
    async getWebhooks(include, active) {
        const includeObject = {};
        if (include) {
            const includeArray = include.split(',');
            includeArray.forEach(item => {
                includeObject[item] = true;
            });
        }
        const results = await this.adminDiscordService.ChannelWebhook_findMany({
            where: (active) ? { IsActive: true } : undefined,
            include: includeObject,
        });
        return results;
    }
    async getWebhook(id) {
        return await this.adminDiscordService.ChannelWebhook_findById(id, {
            include: {
                DiscordMessages: true,
            }
        });
    }
    async createWebhook(body) {
        return await this.adminDiscordService.ChannelWebhook_create(body);
    }
    async updateWebhook(id, body) {
        return await this.adminDiscordService.ChannelWebhook_update(id, body);
    }
    async sendMessage(id, body) {
        const discordMessage = {
            content: `${body.content}\nSent by: ${body.username}`,
        };
        return await this.discordService.ChannelWebhook_sendMessage(id, discordMessage);
    }
    async toggleWebhook(id) {
        return await this.adminDiscordService.ChannelWebhook_toggle(id);
    }
    async getMessageTemplates() {
        return await this.adminDiscordService.DiscordMessageTemplate_findMany();
    }
    async getMessageTemplate(id) {
        return await this.adminDiscordService.DiscordMessageTemplate_findById(parseInt(id), {
            include: {
                DiscordMessages: true,
            }
        });
    }
    async createMessageTemplate(body) {
        const _body = {
            Name: body.Name,
            Content: body.Content,
            Description: body.Description,
            Slug: body.Slug,
        };
        return await this.adminDiscordService.DiscordMessageTemplate_create(_body);
    }
    async updateMessageTemplate(id, body) {
        try {
            if (typeof id === 'string') {
                id = parseInt(id);
            }
            const result = await this.adminDiscordService.DiscordMessageTemplate_update(id, body);
            return result;
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async deleteMessageTemplate(id) {
        return await this.adminDiscordService.DiscordMessageTemplate_delete(parseInt(id));
    }
    async deleteWebhook(id) {
        return await this.adminDiscordService.ChannelWebhook_delete(id);
    }
};
exports.AdminDiscordController = AdminDiscordController;
__decorate([
    (0, common_1.Get)(['webhook', 'webhooks']),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    __param(0, (0, common_1.Query)('include')),
    __param(1, (0, common_1.Query)('active')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Boolean]),
    __metadata("design:returntype", Promise)
], AdminDiscordController.prototype, "getWebhooks", null);
__decorate([
    (0, common_1.Get)('webhook/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminDiscordController.prototype, "getWebhook", null);
__decorate([
    (0, common_1.Post)('webhook'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateDiscordChannelWebhookDto_1.CreateDiscordChannelWebhookDto]),
    __metadata("design:returntype", Promise)
], AdminDiscordController.prototype, "createWebhook", null);
__decorate([
    (0, common_1.Put)('webhook/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, CreateDiscordChannelWebhookDto_1.CreateDiscordChannelWebhookDto]),
    __metadata("design:returntype", Promise)
], AdminDiscordController.prototype, "updateWebhook", null);
__decorate([
    (0, common_1.Post)('webhook/:id/message'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AdminDiscordController.prototype, "sendMessage", null);
__decorate([
    (0, common_1.Put)('webhook/:id/toggle'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminDiscordController.prototype, "toggleWebhook", null);
__decorate([
    (0, common_1.Get)('message-templates'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminDiscordController.prototype, "getMessageTemplates", null);
__decorate([
    (0, common_1.Get)(['message-templates/:id', 'message-template/:id']),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminDiscordController.prototype, "getMessageTemplate", null);
__decorate([
    (0, common_1.Post)(['message-templates', 'message-template']),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateDiscordMessageTemplateDto_1.CreateDiscordMessageTemplateDto]),
    __metadata("design:returntype", Promise)
], AdminDiscordController.prototype, "createMessageTemplate", null);
__decorate([
    (0, common_1.Put)(['message-templates/:id', 'message-template/:id']),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, CreateDiscordMessageTemplateDto_1.UpdateDiscordMessageTemplateDto]),
    __metadata("design:returntype", Promise)
], AdminDiscordController.prototype, "updateMessageTemplate", null);
__decorate([
    (0, common_1.Delete)(['message-templates/:id', 'message-template/:id']),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminDiscordController.prototype, "deleteMessageTemplate", null);
__decorate([
    (0, common_1.Delete)('webhook/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminDiscordController.prototype, "deleteWebhook", null);
exports.AdminDiscordController = AdminDiscordController = __decorate([
    (0, common_1.Controller)('admin/discord'),
    __metadata("design:paramtypes", [admin_discord_service_1.AdminDiscordService, discord_service_1.DiscordService])
], AdminDiscordController);
//# sourceMappingURL=admin-discord.controller.js.map