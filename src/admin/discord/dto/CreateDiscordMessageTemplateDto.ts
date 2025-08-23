import { IsString, IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class CreateDiscordMessageTemplateDto {
    @IsString()
    @IsNotEmpty()
    Name: string;

    @IsString()
    @IsNotEmpty()
    Content: string;

    @IsString()
    @IsNotEmpty()
    Slug: string;

    @IsString()
    @IsOptional()
    Description?: string;
}