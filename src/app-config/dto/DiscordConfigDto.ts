import { IsBoolean, IsOptional, IsString, IsUrl } from 'class-validator';

export class DiscordConfigDto {
  @IsOptional()
  @IsString()
  DiscordClientId?: string;

  @IsOptional()
  @IsString()
  DiscordClientSecret?: string;

  @IsOptional()
  @IsUrl()
  DiscordCallbackUrl?: string;

  @IsOptional()
  @IsBoolean()
  DiscordAuthEnabled?: boolean;
} 