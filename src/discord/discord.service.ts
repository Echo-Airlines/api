import { Injectable } from '@nestjs/common';
import { DiscordMessage, Prisma } from 'prisma/generated/prisma';
import { PrismaService } from '@prisma/prisma.service';
import { SendDiscordMessageDto } from './dto/SendDiscordMessageDto';
import axios from 'axios';

@Injectable()
export class DiscordService {
    constructor(private prisma: PrismaService) {} 

    async ChannelWebhook_findMany(query?: Prisma.DiscordChannelWebhookFindManyArgs) {
        const entities = await this.prisma.discordChannelWebhook.findMany(query ?? {});

        return entities;
    }

    async ChannelWebhook_findById(Id: string) {
        const entity = await this.prisma.discordChannelWebhook.findUnique({
            where: {
                Id
            }
        });

        return entity;
    }

    async ChannelWebhook_create(data: Prisma.DiscordChannelWebhookCreateInput) {
        const webhookUrl = new URL(data.WebhookUrl);
        const paths = webhookUrl.pathname.split('/');
        const ChannelId = paths[2];
        const Token = paths[3];

        const _data = {
            ...data,
            ChannelId,
            Token
        }

        const entity = await this.prisma.discordChannelWebhook.create({
            data: _data
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

    async ChannelWebhook_sendMessage(Id: string, data: SendDiscordMessageDto) {
        const channelWebhook = await this.ChannelWebhook_findById(Id);
        
        if (!channelWebhook) {
            throw new Error('Channel webhook not found');
        }

        if (!channelWebhook.IsActive) {
            throw new Error('Channel webhook is not active');
        }

        try {
            let message: DiscordMessage = await this.prisma.discordMessage.create({
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

            const response = await axios.post(webhookUrl, data, {
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
                })
            })
            .catch(err => {
                console.error(err);
                throw new Error(`Failed to send message to discord: ${err.message}`);
            });

            return message;
        } catch (error) {
            console.error(error);
            throw new Error(`Failed to send message to discord: ${error.message}`);
        }
    }

    async MessageTemplate_findMany(query?: Prisma.DiscordMessageTemplateFindManyArgs) {
        const entities = await this.prisma.discordMessageTemplate.findMany(query ?? {});

        return entities;
    }

    async MessageTemplate_findOneBySlug(Slug: string) {
        const entity = await this.prisma.discordMessageTemplate.findUnique({
            where: {
                Slug
            }
        });

        return entity;
    }
}
