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
        CreatedAt: Date;
        UpdatedAt: Date;
        DiscordMessageId: string | null;
        Type: string;
        Status: import("prisma/generated/prisma").$Enums.ListenerEventStatus;
        Variant: string;
        SentAt: Date;
        SenderId: string;
        Error: string | null;
        Data: Prisma.JsonValue | null;
        DeliveredAt: Date | null;
    }>;
    updateListenerEvent(Id: string, event: Prisma.ListenerEventUpdateInput): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        DiscordMessageId: string | null;
        Type: string;
        Status: import("prisma/generated/prisma").$Enums.ListenerEventStatus;
        Variant: string;
        SentAt: Date;
        SenderId: string;
        Error: string | null;
        Data: Prisma.JsonValue | null;
        DeliveredAt: Date | null;
    }>;
    updateListenerEventStatus(Id: string, { Status, Error }: {
        Status: ListenerEventStatus;
        Error?: string;
    }): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        DiscordMessageId: string | null;
        Type: string;
        Status: import("prisma/generated/prisma").$Enums.ListenerEventStatus;
        Variant: string;
        SentAt: Date;
        SenderId: string;
        Error: string | null;
        Data: Prisma.JsonValue | null;
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
        IsActive: boolean;
        Slug: string;
        Token: string;
        DiscordChannelWebhookId: string | null;
    }) | null>;
    processListenerEvent(sender: ListenerEventSender, body: any): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        DiscordMessageId: string | null;
        Type: string;
        Status: import("prisma/generated/prisma").$Enums.ListenerEventStatus;
        Variant: string;
        SentAt: Date;
        SenderId: string;
        Error: string | null;
        Data: Prisma.JsonValue | null;
        DeliveredAt: Date | null;
    } | undefined>;
    private _compileMessageTemplate;
    private _processFSHubListenerEvent;
    private _processFSHubFlightDeparted;
    private _scheduleColorCode;
    private _processFSHubFlightCompleted;
}
