export declare class SendDiscordMessageDto {
    content: string;
    username?: string;
    avatar_url?: string;
    tts?: boolean;
    embeds?: DiscordMessageEmbedDto[];
}
export declare class DiscordMessageEmbedDto {
    title?: string;
    type?: string;
    description?: string;
    url?: string;
    timestamp?: string;
    color?: string;
    footer?: string;
    image?: string;
    thumbnail?: string;
    author?: string;
    fields?: string[];
}
