import { IsNotEmpty, IsBoolean, IsOptional, IsString } from "class-validator";

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
    @IsString()
    color?: string;

    @IsOptional()
    @IsString()
    footer?: string;

    @IsOptional()
    @IsString()
    image?: string;

    @IsOptional()
    @IsString()
    thumbnail?: string;

    @IsOptional()
    @IsString()
    author?: string;

    @IsOptional()
    @IsString()
    fields?: string[];
}