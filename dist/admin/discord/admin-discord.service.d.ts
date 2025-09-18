import { Prisma } from 'prisma/generated/prisma';
import { DatabaseService } from '@database/database.service';
export declare class AdminDiscordService {
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
    ChannelWebhook_findById(Id: string, query?: Partial<Prisma.DiscordChannelWebhookFindUniqueArgs>): Promise<{
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
    ChannelWebhook_toggle(Id: string): Promise<{
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
    DiscordMessageTemplate_findMany(query?: Prisma.DiscordMessageTemplateFindManyArgs): Promise<{
        Id: number;
        Name: string;
        Description: string | null;
        CreatedAt: Date;
        UpdatedAt: Date;
        Content: string;
        Slug: string;
    }[]>;
    DiscordMessageTemplate_findById(Id: number, query?: Partial<Prisma.DiscordMessageTemplateFindUniqueArgs>): Promise<{
        Id: number;
        Name: string;
        Description: string | null;
        CreatedAt: Date;
        UpdatedAt: Date;
        Content: string;
        Slug: string;
    } | null>;
    DiscordMessageTemplate_create(data: Prisma.DiscordMessageTemplateCreateInput): Promise<{
        Id: number;
        Name: string;
        Description: string | null;
        CreatedAt: Date;
        UpdatedAt: Date;
        Content: string;
        Slug: string;
    }>;
    DiscordMessageTemplate_update(Id: number, data: Prisma.DiscordMessageTemplateUpdateInput): Promise<{
        Id: number;
        Name: string;
        Description: string | null;
        CreatedAt: Date;
        UpdatedAt: Date;
        Content: string;
        Slug: string;
    }>;
    DiscordMessageTemplate_delete(Id: number): Promise<{
        Id: number;
        Name: string;
        Description: string | null;
        CreatedAt: Date;
        UpdatedAt: Date;
        Content: string;
        Slug: string;
    }>;
}
