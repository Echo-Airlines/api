import { DiscordChannelWebhook, ListenerEvent } from "prisma/generated/prisma";

export class ListenerEventSenderWithRelationsDto {
    Id: string;
    Name: string;
    Description: string;
    IsActive: boolean;
    DiscordChannelWebhookId: string;
    DiscordChannelWebhook?: DiscordChannelWebhook;
    ListenerEvents?: ListenerEvent[];
}