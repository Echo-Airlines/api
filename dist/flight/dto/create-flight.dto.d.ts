export declare class CreateFlightDto {
    Id: string;
    CompanyId: string;
    Registered: boolean;
    Category: number;
    ResultComments: string;
    HasStalled: boolean;
    HasOverspeeded: boolean;
    WrongFuelDetected: boolean;
    WrongWeightDetected: boolean;
    UseFreelanceRouteSchedule: boolean;
    CanResumeOrAbort: boolean;
    AircraftId: string;
    DepartureAirportId: string;
    ArrivalIntendedAirportId: string;
    ArrivalAlternateAirportId: string;
}
