import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateLiveryDto {
    @IsNotEmpty()
    @IsString()
    Name: string;

    @IsString()
    @IsOptional()
    AircraftId?: string;

    @IsNotEmpty()
    @IsBoolean()
    IsActive: boolean;

    @IsOptional()
    @IsString()
    Image?: string;

    @IsOptional()
    @IsString()
    Url?: string;

    @IsOptional()
    @IsString()
    CoverPhoto?: string;

    @IsOptional()
    @IsString()
    DownloadUrl?: string;
}