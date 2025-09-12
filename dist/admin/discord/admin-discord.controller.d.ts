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
        Token: string;
        IsActive: boolean;
        WebhookUrl: string;
        ChannelId: string;
    }[]>;
    getWebhook(id: string): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Name: string;
        Description: string | null;
        Token: string;
        IsActive: boolean;
        WebhookUrl: string;
        ChannelId: string;
    } | null>;
    createWebhook(body: CreateDiscordChannelWebhookDto): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Name: string;
        Description: string | null;
        Token: string;
        IsActive: boolean;
        WebhookUrl: string;
        ChannelId: string;
    }>;
    updateWebhook(id: string, body: CreateDiscordChannelWebhookDto): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Name: string;
        Description: string | null;
        Token: string;
        IsActive: boolean;
        WebhookUrl: string;
        ChannelId: string;
    }>;
    sendMessage(id: string, body: {
        content: string;
        username: string;
    }): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        DiscordChannelWebhookId: string | null;
        ChannelId: string;
        Content: string;
        DiscordMessageSentAt: Date | null;
        DiscordMessageTemplateId: number | null;
    }>;
    toggleWebhook(id: string): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Name: string;
        Description: string | null;
        Token: string;
        IsActive: boolean;
        WebhookUrl: string;
        ChannelId: string;
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
        Token: string;
        IsActive: boolean;
        WebhookUrl: string;
        ChannelId: string;
    }>;
}
