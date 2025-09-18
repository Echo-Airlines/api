import { Prisma } from 'prisma/generated/prisma';
import { DatabaseService } from '@database/database.service';
import { SendDiscordMessageDto } from './dto/SendDiscordMessageDto';
export declare class DiscordService {
    private prisma;
    constructor(prisma: DatabaseService);
    ChannelWebhook_findMany(query?: Prisma.DiscordChannelWebhookFindManyArgs): Promise<{
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
    ChannelWebhook_findById(Id: string): Promise<{
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
    ChannelWebhook_create(data: Prisma.DiscordChannelWebhookCreateInput): Promise<{
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
    ChannelWebhook_update(Id: string, data: Prisma.DiscordChannelWebhookUpdateInput): Promise<{
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
    ChannelWebhook_delete(Id: string): Promise<{
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
    ChannelWebhook_sendMessage(Id: string, data: SendDiscordMessageDto): Promise<{
        Id: string;
        ChannelId: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Content: string;
        DiscordMessageSentAt: Date | null;
        DiscordMessageTemplateId: number | null;
        DiscordChannelWebhookId: string | null;
    }>;
    MessageTemplate_findMany(query?: Prisma.DiscordMessageTemplateFindManyArgs): Promise<{
        Id: number;
        Name: string;
        Description: string | null;
        CreatedAt: Date;
        UpdatedAt: Date;
        Content: string;
        Slug: string;
    }[]>;
    MessageTemplate_findOneBySlug(Slug: string): Promise<{
        Id: number;
        Name: string;
        Description: string | null;
        CreatedAt: Date;
        UpdatedAt: Date;
        Content: string;
        Slug: string;
    } | null>;
}
