// admin-listener.controller.ts
import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { AdminListenerService } from './admin-listener.service';
import { IsAdminGuard } from '@auth/is-admin.guard';
import { JwtAuthGuard } from '@auth/jwt-auth.guard';
import { ListenerEventSender, Prisma } from 'prisma/generated/prisma';
import { CreateListenerSenderDto } from './dto/CreateListenerSender.dto';
import * as crypto from 'crypto';

@Controller('admin/listener')
export class AdminListenerController {
    constructor(private readonly listenerService: AdminListenerService) {}

    // Sender routes
    @Post('sender/create')
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async createSender(@Body() body: CreateListenerSenderDto) {
        const dto: Prisma.ListenerEventSenderCreateInput = {
            Name: body.Name,
            Slug: body.Slug,
            IsActive: body.IsActive,
            Token: crypto.randomBytes(32).toString('hex'),
            DiscordChannelWebhook: body.DiscordChannelWebhookId ? {
                connect: {
                    Id: body.DiscordChannelWebhookId,
                },
            } : undefined,
        };

        const sender: ListenerEventSender|null = await this.listenerService.Sender_create(dto);

        if (!sender) {
            throw new BadRequestException({
                message: 'Failed to create sender',
                error: 'Failed to create sender',
                statusCode: 400,
                timestamp: new Date().toISOString(),
                path: '/admin/listener/sender/create',
                method: 'POST',
                body: body,
                dto: dto,
            });
        }

        return sender;
    }

    @Get(['senders', 'sender'])
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async getSenders() {
        const senders = await this.listenerService.Sender_getMany({
            include: {
                ListenerEvents: true,
            }
        });

        return senders;
    }

    @Get('sender/:id')
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async getSender(@Param('id') Id: string) {
        const sender = await this.listenerService.Sender_getOneById(Id, {
            include: {
                ListenerEvents: true,
            }
        });

        if (!sender) {
            throw new NotFoundException('Sender not found');
        }

        return sender;
    }

    @Put('sender/:id')
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async updateSender(@Param('id') Id: string, @Body() body: CreateListenerSenderDto) {
        const sender = await this.listenerService.Sender_update(Id, body);

        return sender;
    }

    @Put('sender/:id/toggle')
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async toggleSender(@Param('id') Id: string) {
        const sender = await this.listenerService.Sender_toggle(Id);

        return sender;
    }

    @Delete('sender/:id')
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async deleteSender(@Param('id') Id: string) {
        const sender = await this.listenerService.Sender_delete(Id);

        return sender;
    }

    @Get(':senderSlug/events')
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async getEvents(@Param('senderSlug') senderSlug: string, @Query('variant') variant?: string, @Query('type') type?: string) {
        let query: Prisma.ListenerEventFindManyArgs = {
            where: {
                Sender: {
                    Slug: senderSlug
                }
            }
        };

        if (variant && type) {
            query = {
                where: {
                    ...query.where,
                    Variant: variant,
                    Type: type
                }
            };
        } else if (variant) {
            query = {
                where: {
                    ...query.where,
                    Variant: variant,
                }
            };
        } else if (type) {
            query = {
                where: {
                    ...query.where,
                    Type: type,
                }
            };
        }

        const events = await this.listenerService.getMany(query);

        return events;
    }

    @Delete(':senderSlug/events/:id')
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async deleteEvent(@Param('id') Id: number) {
        const event = await this.listenerService.deleteOneById(Id);

        if (!event) {
            throw new NotFoundException('FSHub event not found');
        }

        return event;
    }
}