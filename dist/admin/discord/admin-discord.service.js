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
exports.AdminDiscordService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../../database/database.service");
let AdminDiscordService = class AdminDiscordService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async ChannelWebhook_findMany(query) {
        const entities = await this.prisma.discordChannelWebhook.findMany(query ?? {});
        return entities;
    }
    async ChannelWebhook_findById(Id, query) {
        const entity = await this.prisma.discordChannelWebhook.findUnique({
            where: {
                Id
            },
            ...query
        });
        return entity;
    }
    async ChannelWebhook_create(data) {
        const webhookUrl = new URL(data.WebhookUrl);
        const channelId = webhookUrl.pathname.split('/')[3];
        const token = webhookUrl.pathname.split('/')[4];
        if (!channelId || !token) {
            throw new Error('Invalid webhook URL');
        }
        const entity = await this.prisma.discordChannelWebhook.create({
            data: {
                ...data,
                ChannelId: channelId,
                Token: token
            }
        });
        return entity;
    }
    async ChannelWebhook_update(Id, data) {
        const entity = await this.prisma.discordChannelWebhook.update({
            where: {
                Id
            },
            data
        });
        return entity;
    }
    async ChannelWebhook_delete(Id) {
        const entity = await this.prisma.discordChannelWebhook.delete({
            where: {
                Id
            }
        });
        return entity;
    }
    async ChannelWebhook_toggle(Id) {
        const entity = await this.prisma.discordChannelWebhook.findUnique({
            where: {
                Id
            },
        });
        if (!entity) {
            throw new Error('Channel webhook not found');
        }
        return await this.prisma.discordChannelWebhook.update({
            where: {
                Id
            },
            data: {
                IsActive: !entity.IsActive
            }
        });
    }
    async DiscordMessageTemplate_findMany(query) {
        const entities = await this.prisma.discordMessageTemplate.findMany(query ?? {});
        return entities;
    }
    async DiscordMessageTemplate_findById(Id, query) {
        const entity = await this.prisma.discordMessageTemplate.findUnique({
            where: {
                Id
            },
            ...query
        });
        return entity;
    }
    async DiscordMessageTemplate_create(data) {
        const entity = await this.prisma.discordMessageTemplate.create({
            data
        });
        return entity;
    }
    async DiscordMessageTemplate_update(Id, data) {
        const entity = await this.prisma.discordMessageTemplate.update({
            where: {
                Id
            },
            data
        });
        return entity;
    }
    async DiscordMessageTemplate_delete(Id) {
        const entity = await this.prisma.discordMessageTemplate.delete({
            where: {
                Id
            }
        });
        return entity;
    }
};
exports.AdminDiscordService = AdminDiscordService;
exports.AdminDiscordService = AdminDiscordService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], AdminDiscordService);
//# sourceMappingURL=admin-discord.service.js.map