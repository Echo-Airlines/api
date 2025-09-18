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
exports.DiscordService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
const axios_1 = require("axios");
let DiscordService = class DiscordService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async ChannelWebhook_findMany(query) {
        const entities = await this.prisma.discordChannelWebhook.findMany(query ?? {});
        return entities;
    }
    async ChannelWebhook_findById(Id) {
        const entity = await this.prisma.discordChannelWebhook.findUnique({
            where: {
                Id
            }
        });
        return entity;
    }
    async ChannelWebhook_create(data) {
        const webhookUrl = new URL(data.WebhookUrl);
        const paths = webhookUrl.pathname.split('/');
        const ChannelId = paths[2];
        const Token = paths[3];
        const _data = {
            ...data,
            ChannelId,
            Token
        };
        const entity = await this.prisma.discordChannelWebhook.create({
            data: _data
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
    async ChannelWebhook_sendMessage(Id, data) {
        const channelWebhook = await this.ChannelWebhook_findById(Id);
        if (!channelWebhook) {
            throw new Error('Channel webhook not found');
        }
        if (!channelWebhook.IsActive) {
            throw new Error('Channel webhook is not active');
        }
        try {
            let message = await this.prisma.discordMessage.create({
                data: {
                    ChannelId: channelWebhook.ChannelId,
                    Content: JSON.stringify(data),
                    DiscordChannelWebhook: {
                        connect: {
                            Id: channelWebhook.Id,
                        }
                    }
                }
            });
            const webhookUrl = channelWebhook.WebhookUrl;
            const response = await axios_1.default.post(webhookUrl, data, {
                headers: {
                    'Content-Type': 'application/json',
                    'User-Agent': 'Echo Airlines Discord Bot'
                }
            })
                .then(async (response) => {
                message = await this.prisma.discordMessage.update({
                    where: {
                        Id: message.Id
                    },
                    data: {
                        DiscordMessageSentAt: new Date()
                    }
                });
            })
                .catch(err => {
                console.error(err);
                throw new Error(`Failed to send message to discord: ${err.message}`);
            });
            return message;
        }
        catch (error) {
            console.error(error);
            throw new Error(`Failed to send message to discord: ${error.message}`);
        }
    }
    async MessageTemplate_findMany(query) {
        const entities = await this.prisma.discordMessageTemplate.findMany(query ?? {});
        return entities;
    }
    async MessageTemplate_findOneBySlug(Slug) {
        const entity = await this.prisma.discordMessageTemplate.findUnique({
            where: {
                Slug
            }
        });
        return entity;
    }
};
exports.DiscordService = DiscordService;
exports.DiscordService = DiscordService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], DiscordService);
//# sourceMappingURL=discord.service.js.map