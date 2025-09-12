import { IsNotEmpty, IsBoolean, IsOptional, IsString, IsNumber } from "class-validator";

export class SendDiscordMessageDto {
    @IsNotEmpty()
    @IsString()
    content: string;

    @IsOptional()
    @IsString()
    username?: string;

    @IsOptional()
    @IsString()
    avatar_url?: string;

    @IsOptional()
    @IsBoolean()
    tts?: boolean;

    @IsOptional()
    embeds?: DiscordMessageEmbedDto[];

    @IsOptional()
    @IsString()
    footer?: DiscordMessageFooterDto;
}

export class DiscordMessageFooterDto {
    @IsOptional()
    @IsString()
    text?: string;

    @IsOptional()
    @IsString()
    icon_url?: string;
}

export class DiscordMessageEmbedDto {
    @IsOptional()
    @IsString()
    title?: string;

    @IsOptional()
    @IsString()
    type?: string;
    
    @IsOptional()
    @IsString()
    description?: string;
    
    @IsOptional()
    @IsString()
    url?: string;
    
    @IsOptional()
    @IsString()
    timestamp?: string;

    @IsOptional()
    @IsNumber()
    color?: number;

    @IsOptional()
    @IsString()
    footer?: DiscordMessageFooterDto;

    @IsOptional()
    @IsString()
    image?: string;

    @IsOptional()
    @IsString()
    thumbnail?: string;

    @IsOptional()
    author?: DiscordMessageEmbedAuthorDto;

    @IsOptional()
    @IsString()
    fields?: DiscordMessageEmbedFieldDto[];
}

export class DiscordMessageEmbedAuthorDto {
    @IsOptional()
    @IsString()
    name?: string;
    
    @IsOptional()
    @IsString()
    icon_url?: string;
}

export class DiscordMessageEmbedFieldDto {
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    value?: string;

    @IsOptional()
    @IsBoolean()
    inline?: boolean;
}