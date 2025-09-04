import { UseGuards, Controller, Get, Param, Post, Delete, Body, Put, Query, BadRequestException } from '@nestjs/common';
import { JwtAuthGuard } from '@auth/jwt-auth.guard';
import { IsAdminGuard } from '@auth/is-admin.guard';
import { DiscordChannelWebhook, Prisma } from 'prisma/generated/prisma';
import { AdminDiscordService } from './admin-discord.service';
import { CreateDiscordChannelWebhookDto } from './dto/CreateDiscordChannelWebhookDto';
import { SendDiscordMessageDto } from '@discord/dto/SendDiscordMessageDto';
import { DiscordService } from '@discord/discord.service';
import { CreateDiscordMessageTemplateDto, UpdateDiscordMessageTemplateDto } from './dto/CreateDiscordMessageTemplateDto';

@Controller('admin/discord')
export class AdminDiscordController {
    constructor(private readonly adminDiscordService: AdminDiscordService, private readonly discordService: DiscordService) {}

    @Get(['webhook', 'webhooks'])
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async getWebhooks(@Query('include') include?: string, @Query('active') active?: boolean) {
        const includeObject: Prisma.DiscordChannelWebhookInclude = {};

        if (include) {
            const includeArray = include.split(',');
            includeArray.forEach(item => {
                includeObject[item] = true;
            });
        }

        const results: DiscordChannelWebhook[] = await this.adminDiscordService.ChannelWebhook_findMany({
            where: (active) ? { IsActive: true } : undefined,
            include: includeObject,
        });

        return results;
    }

    @Get('webhook/:id')
    async getWebhook(@Param('id') id: string) {
        return await this.adminDiscordService.ChannelWebhook_findById(id);
    }

    @Post('webhook')
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async createWebhook(@Body() body: CreateDiscordChannelWebhookDto) {
        return await this.adminDiscordService.ChannelWebhook_create(body as Prisma.DiscordChannelWebhookCreateInput);
    }

    @Put('webhook/:id')
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async updateWebhook(@Param('id') id: string, @Body() body: CreateDiscordChannelWebhookDto) {
        return await this.adminDiscordService.ChannelWebhook_update(id, body);
    }

    @Post('webhook/:id/message')
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async sendMessage(@Param('id') id: string, @Body() body: { content: string, username: string }) {
        const discordMessage: SendDiscordMessageDto = {
            content: `${body.content}\nSent by: ${body.username}`,
        };

        return await this.discordService.ChannelWebhook_sendMessage(id, discordMessage);
    }

    @Put('webhook/:id/toggle')
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async toggleWebhook(@Param('id') id: string) {
        return await this.adminDiscordService.ChannelWebhook_toggle(id);
    }

    @Get('message-templates')
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async getMessageTemplates() {
        return await this.adminDiscordService.DiscordMessageTemplate_findMany();
        
    }

    @Post(['message-templates', 'message-template'])
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async createMessageTemplate(@Body() body: CreateDiscordMessageTemplateDto) {
        const _body: Prisma.DiscordMessageTemplateCreateInput = {
            Name: body.Name,
            Content: body.Content,
            Description: body.Description,
            Slug: body.Slug,
        };

        return await this.adminDiscordService.DiscordMessageTemplate_create(_body);
    }

    @Put(['message-templates/:id', 'message-template/:id'])
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async updateMessageTemplate(@Param('id') id: number, @Body() body: UpdateDiscordMessageTemplateDto) {
        try {
            if (typeof id === 'string') {
                id = parseInt(id);
            }

            const result = await this.adminDiscordService.DiscordMessageTemplate_update(id, body);
            return result;
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    @Delete('webhook/:id')
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async deleteWebhook(@Param('id') id: string) {
        return await this.adminDiscordService.ChannelWebhook_delete(id);
    }
}
