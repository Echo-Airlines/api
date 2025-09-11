export declare class SendDiscordMessageDto {
    content: string;
    username?: string;
    avatar_url?: string;
    tts?: boolean;
    embeds?: DiscordMessageEmbedDto[];
    footer?: DiscordMessageFooterDto;
}
export declare class DiscordMessageFooterDto {
    text?: string;
    icon_url?: string;
}
export declare class DiscordMessageEmbedDto {
    title?: string;
    type?: string;
    description?: string;
    url?: string;
    timestamp?: string;
    color?: string;
    footer?: DiscordMessageFooterDto;
    image?: string;
    thumbnail?: string;
    author?: DiscordMessageEmbedAuthorDto;
    fields?: DiscordMessageEmbedFieldDto[];
}
export declare class DiscordMessageEmbedAuthorDto {
    name?: string;
    icon_url?: string;
}
export declare class DiscordMessageEmbedFieldDto {
    name?: string;
    value?: string;
    inline?: boolean;
}
