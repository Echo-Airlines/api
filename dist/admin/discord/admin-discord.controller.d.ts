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
        CreatedAt: Date;
        UpdatedAt: Date;
        Name: string;
        Description: string | null;
        IsActive: boolean;
        WebhookUrl: string;
        ChannelId: string;
        Token: string;
    }[]>;
    getWebhook(id: string): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Name: string;
        Description: string | null;
        IsActive: boolean;
        WebhookUrl: string;
        ChannelId: string;
        Token: string;
    } | null>;
    createWebhook(body: CreateDiscordChannelWebhookDto): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Name: string;
        Description: string | null;
        IsActive: boolean;
        WebhookUrl: string;
        ChannelId: string;
        Token: string;
    }>;
    updateWebhook(id: string, body: CreateDiscordChannelWebhookDto): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Name: string;
        Description: string | null;
        IsActive: boolean;
        WebhookUrl: string;
        ChannelId: string;
        Token: string;
    }>;
    sendMessage(id: string, body: {
        content: string;
        username: string;
    }): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        ChannelId: string;
        DiscordMessageSentAt: Date | null;
        Content: string;
        DiscordMessageTemplateId: number | null;
        DiscordChannelWebhookId: string | null;
    }>;
    toggleWebhook(id: string): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Name: string;
        Description: string | null;
        IsActive: boolean;
        WebhookUrl: string;
        ChannelId: string;
        Token: string;
    }>;
    getMessageTemplates(): Promise<{
        Id: number;
        CreatedAt: Date;
        UpdatedAt: Date;
        Name: string;
        Description: string | null;
        Slug: string;
        Content: string;
    }[]>;
    getMessageTemplate(id: string): Promise<{
        Id: number;
        CreatedAt: Date;
        UpdatedAt: Date;
        Name: string;
        Description: string | null;
        Slug: string;
        Content: string;
    } | null>;
    createMessageTemplate(body: CreateDiscordMessageTemplateDto): Promise<{
        Id: number;
        CreatedAt: Date;
        UpdatedAt: Date;
        Name: string;
        Description: string | null;
        Slug: string;
        Content: string;
    }>;
    updateMessageTemplate(id: number, body: UpdateDiscordMessageTemplateDto): Promise<{
        Id: number;
        CreatedAt: Date;
        UpdatedAt: Date;
        Name: string;
        Description: string | null;
        Slug: string;
        Content: string;
    }>;
    deleteMessageTemplate(id: string): Promise<{
        Id: number;
        CreatedAt: Date;
        UpdatedAt: Date;
        Name: string;
        Description: string | null;
        Slug: string;
        Content: string;
    }>;
    deleteWebhook(id: string): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Name: string;
        Description: string | null;
        IsActive: boolean;
        WebhookUrl: string;
        ChannelId: string;
        Token: string;
    }>;
}
