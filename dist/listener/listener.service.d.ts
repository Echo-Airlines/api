import { DatabaseService } from '@database/database.service';
import { ListenerEventSender, ListenerEventStatus, Prisma } from 'prisma/generated/prisma';
import { DiscordService } from '@discord/discord.service';
import { WebsocketGateway } from '@websocket/websocket.gateway';
import { FSHubService } from '@fshub/fshub.service';
export declare class ListenerService {
    private prisma;
    private readonly discordService;
    private readonly websocketGateway;
    private readonly fshubService;
    private readonly logger;
    constructor(prisma: DatabaseService, discordService: DiscordService, websocketGateway: WebsocketGateway, fshubService: FSHubService);
    createListenerEvent(event: Prisma.ListenerEventCreateInput): Promise<{
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
    updateListenerEvent(Id: string, event: Prisma.ListenerEventUpdateInput): Promise<{
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
    updateListenerEventStatus(Id: string, Status: ListenerEventStatus): Promise<{
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
    getSenderBySlug(Slug: string): Promise<({
        DiscordChannelWebhook: {
            Id: string;
            CreatedAt: Date;
            UpdatedAt: Date;
            Name: string;
            Description: string | null;
            Token: string;
            IsActive: boolean;
            WebhookUrl: string;
            ChannelId: string;
        } | null;
    } & {
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Name: string;
        Description: string | null;
        Slug: string;
        Token: string;
        IsActive: boolean;
        DiscordChannelWebhookId: string | null;
    }) | null>;
    processListenerEvent(sender: ListenerEventSender, body: any): Promise<{
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
    private _compileMessageTemplate;
    private _processFSHubListenerEvent;
    private _processFSHubFlightDeparted;
    private _scheduleColorCode;
    private _processFSHubFlightCompleted;
}
