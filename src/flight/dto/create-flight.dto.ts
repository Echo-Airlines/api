import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from "class-validator";

export class CreateFlightDto {
    @IsString()
    @IsNotEmpty()
    @IsUUID()
    Id: string;

    @IsString()
    @IsNotEmpty()
    @IsUUID()
    CompanyId: string;

    @IsBoolean()
    Registered: boolean;

    @IsNumber()
    Category: number;

    @IsString()
    ResultComments: string;

    @IsBoolean()
    HasStalled: boolean;

    @IsBoolean()
    HasOverspeeded: boolean;

    @IsBoolean()
    WrongFuelDetected: boolean;

    @IsBoolean()
    WrongWeightDetected: boolean;

    @IsBoolean()
    UseFreelanceRouteSchedule: boolean;

    @IsBoolean()
    CanResumeOrAbort: boolean;

    @IsString()
    @IsOptional()
    AircraftId: string;

    @IsString()
    @IsOptional()
    DepartureAirportId: string;

    @IsString()
    @IsOptional()
    ArrivalIntendedAirportId: string;

    @IsString()
    @IsOptional()
    ArrivalAlternateAirportId: string;
}