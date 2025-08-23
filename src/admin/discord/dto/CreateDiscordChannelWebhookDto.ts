import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateDiscordChannelWebhookDto {
    @IsNotEmpty()
    @IsString()
    WebhookUrl: string;

    @IsNotEmpty()
    @IsString()
    Name: string;

    @IsOptional()
    @IsString()
    Description?: string;

    @IsOptional()
    @IsBoolean()
    IsActive?: boolean;
}



