import { IsString, IsNotEmpty, IsBoolean, IsOptional } from "class-validator";

export class CreateListenerSenderDto {
    @IsString()
    @IsNotEmpty()
    Name: string;
    @IsString()
    @IsNotEmpty()
    Slug: string;
    
    @IsBoolean()
    @IsNotEmpty()
    IsActive: boolean;

    @IsOptional()
    @IsString()
    DiscordChannelWebhookId?: string;
}