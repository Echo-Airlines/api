import { AdminListenerService } from './admin-listener.service';
import { Prisma } from 'prisma/generated/prisma';
import { CreateListenerSenderDto } from './dto/CreateListenerSender.dto';
import { ListenerEventSenderWithRelationsDto } from './dto/ListenerEventSenderWithRelationsDto.dto';
export declare class AdminListenerController {
    private readonly listenerService;
    constructor(listenerService: AdminListenerService);
    createSender(body: CreateListenerSenderDto): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Name: string;
        Description: string | null;
        Slug: string;
        Token: string;
        IsActive: boolean;
        DiscordChannelWebhookId: string | null;
    }>;
    getSenders(): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Name: string;
        Description: string | null;
        Slug: string;
        Token: string;
        IsActive: boolean;
        DiscordChannelWebhookId: string | null;
    }[]>;
    getSender(Id: string): Promise<ListenerEventSenderWithRelationsDto>;
    updateSender(Id: string, body: CreateListenerSenderDto): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Name: string;
        Description: string | null;
        Slug: string;
        Token: string;
        IsActive: boolean;
        DiscordChannelWebhookId: string | null;
    }>;
    toggleSender(Id: string): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Name: string;
        Description: string | null;
        Slug: string;
        Token: string;
        IsActive: boolean;
        DiscordChannelWebhookId: string | null;
    }>;
    regenerateToken(Id: string): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Name: string;
        Description: string | null;
        Slug: string;
        Token: string;
        IsActive: boolean;
        DiscordChannelWebhookId: string | null;
    }>;
    deleteSender(Id: string): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Name: string;
        Description: string | null;
        Slug: string;
        Token: string;
        IsActive: boolean;
        DiscordChannelWebhookId: string | null;
    }>;
    resendEvent(Id: string): Promise<{
        Id: string;
        Variant: string;
        Type: string;
        SentAt: Date;
        Status: import("prisma/generated/prisma").$Enums.ListenerEventStatus;
        SenderId: string;
        Error: string | null;
        Data: Prisma.JsonValue | null;
        DiscordMessageId: string | null;
        DeliveredAt: Date | null;
        CreatedAt: Date;
        UpdatedAt: Date;
    } | undefined>;
    getEvents(senderSlug: string, variant?: string, type?: string): Promise<{
        Id: string;
        Variant: string;
        Type: string;
        SentAt: Date;
        Status: import("prisma/generated/prisma").$Enums.ListenerEventStatus;
        SenderId: string;
        Error: string | null;
        Data: Prisma.JsonValue | null;
        DiscordMessageId: string | null;
        DeliveredAt: Date | null;
        CreatedAt: Date;
        UpdatedAt: Date;
    }[]>;
    deleteEvent(Id: string): Promise<{
        Id: string;
        Variant: string;
        Type: string;
        SentAt: Date;
        Status: import("prisma/generated/prisma").$Enums.ListenerEventStatus;
        SenderId: string;
        Error: string | null;
        Data: Prisma.JsonValue | null;
        DiscordMessageId: string | null;
        DeliveredAt: Date | null;
        CreatedAt: Date;
        UpdatedAt: Date;
    }>;
}
