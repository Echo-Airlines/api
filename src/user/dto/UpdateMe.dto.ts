import { IsOptional, IsString, IsEmail, } from "class-validator";

export class UpdateMeDto {
    @IsOptional()
    @IsString()
    FirstName?: string;

    @IsOptional()
    @IsString()
    LastName?: string;

    @IsOptional()
    @IsString()
    @IsEmail()
    Email?: string;

    @IsOptional()
    @IsString()
    FSHubPilotId?: string;
}