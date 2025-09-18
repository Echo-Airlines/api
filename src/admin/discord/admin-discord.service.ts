import { Injectable } from '@nestjs/common';
import { Prisma } from 'prisma/generated/prisma';
import { DatabaseService } from '@database/database.service';
import { SendDiscordMessageDto } from '@discord/dto/SendDiscordMessageDto';
import axios from 'axios';

@Injectable()
export class AdminDiscordService {
    constructor(private prisma: DatabaseService) {} 

    async ChannelWebhook_findMany(query?: Prisma.DiscordChannelWebhookFindManyArgs) {
        const entities = await this.prisma.discordChannelWebhook.findMany(query ?? {});

        return entities;
    }

    async ChannelWebhook_findById(Id: string, query?: Partial<Prisma.DiscordChannelWebhookFindUniqueArgs>) {
        const entity = await this.prisma.discordChannelWebhook.findUnique({
            where: {
                Id
            },
            ...query
        });

        return entity;
    }

    async ChannelWebhook_create(data: Prisma.DiscordChannelWebhookCreateInput) {
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

    async ChannelWebhook_update(Id: string, data: Prisma.DiscordChannelWebhookUpdateInput) {
        const entity = await this.prisma.discordChannelWebhook.update({
            where: {
                Id
            },
            data
        });

        return entity;
    }

    async ChannelWebhook_delete(Id: string) {
        const entity = await this.prisma.discordChannelWebhook.delete({
            where: {
                Id
            }
        });

        return entity;
    }

    async ChannelWebhook_toggle(Id: string) {
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
    
    async DiscordMessageTemplate_findMany(query?: Prisma.DiscordMessageTemplateFindManyArgs) {
        const entities = await this.prisma.discordMessageTemplate.findMany(query ?? {});

        return entities;
    }

    async DiscordMessageTemplate_findById(Id: number, query?: Partial<Prisma.DiscordMessageTemplateFindUniqueArgs>) {
        const entity = await this.prisma.discordMessageTemplate.findUnique({
            where: {
                Id
            },
            ...query
        });

        return entity;
    }

    async DiscordMessageTemplate_create(data: Prisma.DiscordMessageTemplateCreateInput) {
        const entity = await this.prisma.discordMessageTemplate.create({
            data
        });

        return entity;
    }

    async DiscordMessageTemplate_update(Id: number, data: Prisma.DiscordMessageTemplateUpdateInput) {
        const entity = await this.prisma.discordMessageTemplate.update({
            where: {
                Id
            },
            data
        });

        return entity;
    }

    async DiscordMessageTemplate_delete(Id: number) {
        const entity = await this.prisma.discordMessageTemplate.delete({
            where: {
                Id
            }
        });

        return entity;
    }
}
