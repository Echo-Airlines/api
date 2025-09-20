import { IsBoolean, IsOptional, IsString } from "class-validator";

export class UpdateVirtualAirlineDto {
    @IsOptional()
    @IsBoolean()
    NotifyNewMembersViaDiscord: boolean;

    @IsOptional()
    @IsString()
    ApiKey: string;

    @IsOptional()
    @IsBoolean()
    IsPrimary: boolean;

    @IsOptional()
    @IsString()
    VAManagerDiscordWebhookId?: string;
}