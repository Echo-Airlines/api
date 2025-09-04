import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateLiveryDto {
    @IsNotEmpty()
    @IsString()
    Name: string;

    @IsNotEmpty()
    @IsString()
    AircraftId: string;

    @IsNotEmpty()
    @IsBoolean()
    IsActive: boolean;

    @IsNotEmpty()
    @IsString()
    Image: string;
}