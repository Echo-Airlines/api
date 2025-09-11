import { PrismaService } from '@prisma/prisma.service';
import { Prisma } from 'prisma/generated/prisma';
import { ListenerService } from 'src/listener/listener.service';
export declare class AdminListenerService {
    private prisma;
    private readonly listenerService;
    constructor(prisma: PrismaService, listenerService: ListenerService);
    createListenerEvent(event: Prisma.ListenerEventCreateInput): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Type: string;
        Status: import("prisma/generated/prisma").$Enums.ListenerEventStatus;
        Variant: string;
        SentAt: Date;
        SenderId: string;
        Error: string | null;
        Data: Prisma.JsonValue | null;
        DiscordMessageId: string | null;
        DeliveredAt: Date | null;
    }>;
    getMany(query?: Prisma.ListenerEventFindManyArgs): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Type: string;
        Status: import("prisma/generated/prisma").$Enums.ListenerEventStatus;
        Variant: string;
        SentAt: Date;
        SenderId: string;
        Error: string | null;
        Data: Prisma.JsonValue | null;
        DiscordMessageId: string | null;
        DeliveredAt: Date | null;
    }[]>;
    deleteOneById(Id: string): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Type: string;
        Status: import("prisma/generated/prisma").$Enums.ListenerEventStatus;
        Variant: string;
        SentAt: Date;
        SenderId: string;
        Error: string | null;
        Data: Prisma.JsonValue | null;
        DiscordMessageId: string | null;
        DeliveredAt: Date | null;
    }>;
    getSenderBySlug(Slug: string): Promise<({
        DiscordChannelWebhook: {
            Id: string;
            CreatedAt: Date;
            UpdatedAt: Date;
            Name: string;
            Description: string | null;
            IsActive: boolean;
            WebhookUrl: string;
            ChannelId: string;
            Token: string;
        } | null;
    } & {
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Name: string;
        Description: string | null;
        Slug: string;
        IsActive: boolean;
        Token: string;
        DiscordChannelWebhookId: string | null;
    }) | null>;
    Sender_getMany(query?: Prisma.ListenerEventSenderFindManyArgs): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Name: string;
        Description: string | null;
        Slug: string;
        IsActive: boolean;
        Token: string;
        DiscordChannelWebhookId: string | null;
    }[]>;
    Sender_getOneById(Id: string, queryOpts?: {
        select?: Prisma.ListenerEventSenderSelect | null;
        omit?: Prisma.ListenerEventSenderOmit | null;
        include?: Prisma.ListenerEventSenderInclude | null;
    }): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Name: string;
        Description: string | null;
        Slug: string;
        IsActive: boolean;
        Token: string;
        DiscordChannelWebhookId: string | null;
    } | null>;
    Sender_getOneBySlug(Slug: string, query?: Prisma.ListenerEventSenderFindUniqueArgs): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Name: string;
        Description: string | null;
        Slug: string;
        IsActive: boolean;
        Token: string;
        DiscordChannelWebhookId: string | null;
    } | null>;
    Sender_create(data: Prisma.ListenerEventSenderCreateInput): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Name: string;
        Description: string | null;
        Slug: string;
        IsActive: boolean;
        Token: string;
        DiscordChannelWebhookId: string | null;
    }>;
    Sender_update(Id: string, data: Prisma.ListenerEventSenderUpdateInput): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Name: string;
        Description: string | null;
        Slug: string;
        IsActive: boolean;
        Token: string;
        DiscordChannelWebhookId: string | null;
    }>;
    Sender_regenerateToken(Id: string): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Name: string;
        Description: string | null;
        Slug: string;
        IsActive: boolean;
        Token: string;
        DiscordChannelWebhookId: string | null;
    }>;
    Sender_toggle(Id: string): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Name: string;
        Description: string | null;
        Slug: string;
        IsActive: boolean;
        Token: string;
        DiscordChannelWebhookId: string | null;
    }>;
    Sender_delete(Id: string): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Name: string;
        Description: string | null;
        Slug: string;
        IsActive: boolean;
        Token: string;
        DiscordChannelWebhookId: string | null;
    }>;
    Event_resend(Id: string): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Type: string;
        Status: import("prisma/generated/prisma").$Enums.ListenerEventStatus;
        Variant: string;
        SentAt: Date;
        SenderId: string;
        Error: string | null;
        Data: Prisma.JsonValue | null;
        DiscordMessageId: string | null;
        DeliveredAt: Date | null;
    }>;
}
