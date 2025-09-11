import { PrismaService } from '@prisma/prisma.service';
import { ListenerEventSender, ListenerEventStatus, Prisma } from 'prisma/generated/prisma';
import { DiscordService } from '@discord/discord.service';
import { WebsocketGateway } from '@websocket/websocket.gateway';
export declare class ListenerService {
    private prisma;
    private readonly discordService;
    private readonly websocketGateway;
    private readonly logger;
    constructor(prisma: PrismaService, discordService: DiscordService, websocketGateway: WebsocketGateway);
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
    updateListenerEvent(Id: string, event: Prisma.ListenerEventUpdateInput): Promise<{
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
    updateListenerEventStatus(Id: string, Status: ListenerEventStatus): Promise<{
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
    processListenerEvent(sender: ListenerEventSender, body: any): Promise<{
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
    } | undefined>;
    private _compileMessageTemplate;
    private _processFSHubListenerEvent;
    private _processFSHubFlightDeparted;
    private _processFSHubFlightCompleted;
}
