import { AdminDiscordService } from './admin-discord.service';
import { CreateDiscordChannelWebhookDto } from './dto/CreateDiscordChannelWebhookDto';
import { DiscordService } from '@discord/discord.service';
import { CreateDiscordMessageTemplateDto, UpdateDiscordMessageTemplateDto } from './dto/CreateDiscordMessageTemplateDto';
export declare class AdminDiscordController {
    private readonly adminDiscordService;
    private readonly discordService;
    constructor(adminDiscordService: AdminDiscordService, discordService: DiscordService);
    getWebhooks(include?: string, active?: boolean): Promise<{
        Id: string;
        Name: string;
        Description: string | null;
        WebhookUrl: string;
        ChannelId: string;
        Token: string;
        IsActive: boolean;
        CreatedAt: Date;
        UpdatedAt: Date;
    }[]>;
    getWebhook(id: string): Promise<{
        Id: string;
        Name: string;
        Description: string | null;
        WebhookUrl: string;
        ChannelId: string;
        Token: string;
        IsActive: boolean;
        CreatedAt: Date;
        UpdatedAt: Date;
    } | null>;
    createWebhook(body: CreateDiscordChannelWebhookDto): Promise<{
        Id: string;
        Name: string;
        Description: string | null;
        WebhookUrl: string;
        ChannelId: string;
        Token: string;
        IsActive: boolean;
        CreatedAt: Date;
        UpdatedAt: Date;
    }>;
    updateWebhook(id: string, body: CreateDiscordChannelWebhookDto): Promise<{
        Id: string;
        Name: string;
        Description: string | null;
        WebhookUrl: string;
        ChannelId: string;
        Token: string;
        IsActive: boolean;
        CreatedAt: Date;
        UpdatedAt: Date;
    }>;
    sendMessage(id: string, body: {
        content: string;
        username: string;
    }): Promise<{
        Id: string;
        ChannelId: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Content: string;
        DiscordMessageSentAt: Date | null;
        DiscordMessageTemplateId: number | null;
        DiscordChannelWebhookId: string | null;
    }>;
    toggleWebhook(id: string): Promise<{
        Id: string;
        Name: string;
        Description: string | null;
        WebhookUrl: string;
        ChannelId: string;
        Token: string;
        IsActive: boolean;
        CreatedAt: Date;
        UpdatedAt: Date;
    }>;
    getMessageTemplates(): Promise<{
        Id: number;
        Name: string;
        Description: string | null;
        CreatedAt: Date;
        UpdatedAt: Date;
        Content: string;
        Slug: string;
    }[]>;
    getMessageTemplate(id: string): Promise<{
        Id: number;
        Name: string;
        Description: string | null;
        CreatedAt: Date;
        UpdatedAt: Date;
        Content: string;
        Slug: string;
    } | null>;
    createMessageTemplate(body: CreateDiscordMessageTemplateDto): Promise<{
        Id: number;
        Name: string;
        Description: string | null;
        CreatedAt: Date;
        UpdatedAt: Date;
        Content: string;
        Slug: string;
    }>;
    updateMessageTemplate(id: number, body: UpdateDiscordMessageTemplateDto): Promise<{
        Id: number;
        Name: string;
        Description: string | null;
        CreatedAt: Date;
        UpdatedAt: Date;
        Content: string;
        Slug: string;
    }>;
    deleteMessageTemplate(id: string): Promise<{
        Id: number;
        Name: string;
        Description: string | null;
        CreatedAt: Date;
        UpdatedAt: Date;
        Content: string;
        Slug: string;
    }>;
    deleteWebhook(id: string): Promise<{
        Id: string;
        Name: string;
        Description: string | null;
        WebhookUrl: string;
        ChannelId: string;
        Token: string;
        IsActive: boolean;
        CreatedAt: Date;
        UpdatedAt: Date;
    }>;
}
