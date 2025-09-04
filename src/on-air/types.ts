import { Company, VirtualAirline, Member, VARole, Aircraft, AircraftClass, AircraftType, Airport, Flight } from 'onair-api';
export type OnAirVirtualAirline = VirtualAirline;
export type OnAirVirtualAirlineRole = VARole;

export type OnAirCompany = Company;

export type OnAirMember = Member;
export type OnAirAircraft = Aircraft & {
    AircraftMaintenance: OnAirAircraftMaintenance;
};
export type OnAirAircraftClass = AircraftClass;
export type OnAirAircraftType = AircraftType;

export type OnAirAirport = Airport & {
    Description?: string;
    HomeWebSiteUrl?: string;
    WikiUrl?: string;
};

export type OnAirAircraftMaintenance = {
    Id: string;
    AnnualCheckup: boolean;
    Inspection100Hours: boolean;
    FailuresRepair: boolean;
    AirframeRepair: boolean;
    AirframeReplace: boolean;
    EcoSeats: number;
    BusSeats: number;
    FirstClassSeats: number;
    AirframeRepairCondition: number;
    MaintenanceFBOId: string;
    CompanyId: string;
    Company: OnAirCompany;
    RemainingMaintenanceWorkHours: number;
    Amount: number;
}
export type OnAirFlight = Flight & {
    LastRefresh: Date;
    LandedRealTime: string;
    AirborneRealTime: string;
    EngineOnRealTime: string;
    EngineOffRealTime: string;
};