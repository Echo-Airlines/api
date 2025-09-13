import { Prisma } from 'prisma/generated/prisma';
import { PrismaService } from '@prisma/prisma.service';
export declare class AdminDiscordService {
    private prisma;
    constructor(prisma: PrismaService);
    ChannelWebhook_findMany(query?: Prisma.DiscordChannelWebhookFindManyArgs): Promise<{
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
    ChannelWebhook_findById(Id: string, query?: Partial<Prisma.DiscordChannelWebhookFindUniqueArgs>): Promise<{
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
    ChannelWebhook_create(data: Prisma.DiscordChannelWebhookCreateInput): Promise<{
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
    ChannelWebhook_update(Id: string, data: Prisma.DiscordChannelWebhookUpdateInput): Promise<{
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
    ChannelWebhook_delete(Id: string): Promise<{
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
    ChannelWebhook_toggle(Id: string): Promise<{
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
    DiscordMessageTemplate_findMany(query?: Prisma.DiscordMessageTemplateFindManyArgs): Promise<{
        Id: number;
        CreatedAt: Date;
        UpdatedAt: Date;
        Name: string;
        Description: string | null;
        Slug: string;
        Content: string;
    }[]>;
    DiscordMessageTemplate_findById(Id: number, query?: Partial<Prisma.DiscordMessageTemplateFindUniqueArgs>): Promise<{
        Id: number;
        CreatedAt: Date;
        UpdatedAt: Date;
        Name: string;
        Description: string | null;
        Slug: string;
        Content: string;
    } | null>;
    DiscordMessageTemplate_create(data: Prisma.DiscordMessageTemplateCreateInput): Promise<{
        Id: number;
        CreatedAt: Date;
        UpdatedAt: Date;
        Name: string;
        Description: string | null;
        Slug: string;
        Content: string;
    }>;
    DiscordMessageTemplate_update(Id: number, data: Prisma.DiscordMessageTemplateUpdateInput): Promise<{
        Id: number;
        CreatedAt: Date;
        UpdatedAt: Date;
        Name: string;
        Description: string | null;
        Slug: string;
        Content: string;
    }>;
    DiscordMessageTemplate_delete(Id: number): Promise<{
        Id: number;
        CreatedAt: Date;
        UpdatedAt: Date;
        Name: string;
        Description: string | null;
        Slug: string;
        Content: string;
    }>;
}
