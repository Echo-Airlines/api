import { ListenerService } from './listener.service';
export declare class ListenerController {
    private readonly listenerService;
    constructor(listenerService: ListenerService);
    sendEvent(body: any, token: string, senderSlug: string): Promise<{
        success: boolean;
        message: string;
        listenerEvent: {
            Id: number;
            CreatedAt: Date;
            UpdatedAt: Date;
            Type: string;
            Status: import("prisma/generated/prisma").$Enums.ListenerEventStatus;
            Variant: string;
            SentAt: Date;
            SenderId: string;
            Error: string | null;
            Data: import("prisma/generated/prisma/runtime/library").JsonValue | null;
            DiscordMessageId: string | null;
            DeliveredAt: Date | null;
        };
    }>;
}
