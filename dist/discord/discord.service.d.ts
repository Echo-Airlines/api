import { Prisma } from 'prisma/generated/prisma';
import { PrismaService } from '@prisma/prisma.service';
import { SendDiscordMessageDto } from './dto/SendDiscordMessageDto';
export declare class DiscordService {
    private prisma;
    constructor(prisma: PrismaService);
    ChannelWebhook_findMany(query?: Prisma.DiscordChannelWebhookFindManyArgs): Promise<{
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
    ChannelWebhook_findById(Id: string): Promise<{
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
    ChannelWebhook_create(data: Prisma.DiscordChannelWebhookCreateInput): Promise<{
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
    ChannelWebhook_update(Id: string, data: Prisma.DiscordChannelWebhookUpdateInput): Promise<{
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
    ChannelWebhook_delete(Id: string): Promise<{
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
    ChannelWebhook_sendMessage(Id: string, data: SendDiscordMessageDto): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        DiscordChannelWebhookId: string | null;
        ChannelId: string;
        Content: string;
        DiscordMessageSentAt: Date | null;
        DiscordMessageTemplateId: number | null;
    }>;
    MessageTemplate_findMany(query?: Prisma.DiscordMessageTemplateFindManyArgs): Promise<{
        Id: number;
        CreatedAt: Date;
        UpdatedAt: Date;
        Name: string;
        Description: string | null;
        Slug: string;
        Content: string;
    }[]>;
    MessageTemplate_findOneBySlug(Slug: string): Promise<{
        Id: number;
        CreatedAt: Date;
        UpdatedAt: Date;
        Name: string;
        Description: string | null;
        Slug: string;
        Content: string;
    } | null>;
}
