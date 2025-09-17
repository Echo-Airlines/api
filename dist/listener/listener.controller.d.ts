import { ListenerService } from './listener.service';
export declare class ListenerController {
    private readonly listenerService;
    constructor(listenerService: ListenerService);
    sendEvent(body: any, token: string, senderSlug: string): Promise<{
        success: boolean;
        message: string;
        listenerEvent: {
            Id: string;
            Variant: string;
            Type: string;
            SentAt: Date;
            Status: import("prisma/generated/prisma").$Enums.ListenerEventStatus;
            SenderId: string;
            Error: string | null;
            Data: import("prisma/generated/prisma/runtime/library").JsonValue | null;
            DiscordMessageId: string | null;
            DeliveredAt: Date | null;
            CreatedAt: Date;
            UpdatedAt: Date;
        } | null;
    }>;
}
