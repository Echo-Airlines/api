import { AircraftService } from './aircraft.service';
import { LiveryService } from '@livery/livery.service';
export declare class AircraftController {
    private readonly aircraftService;
    private readonly liveryService;
    constructor(aircraftService: AircraftService, liveryService: LiveryService);
    getPrimaryVirtualAirlineFleet(): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Identifier: string;
        LastRefresh: Date | null;
        DisplayName: string;
        AircraftStatusId: number;
        AircraftClassId: string;
        CurrentAirportId: string | null;
        VirtualAirlineId: string;
    }[]>;
    getAircraftById(id: string): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Identifier: string;
        LastRefresh: Date | null;
        DisplayName: string;
        AircraftStatusId: number;
        AircraftClassId: string;
        CurrentAirportId: string | null;
        VirtualAirlineId: string;
    } | null>;
    getFleetByVirtualAirlineIdentifier(virtualAirlineIdentifier: string): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Identifier: string;
        LastRefresh: Date | null;
        DisplayName: string;
        AircraftStatusId: number;
        AircraftClassId: string;
        CurrentAirportId: string | null;
        VirtualAirlineId: string;
    }[]>;
    assignLiveryToAircraft(id: string, data: {
        liveryId: string;
    }): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Identifier: string;
        LastRefresh: Date | null;
        DisplayName: string;
        AircraftStatusId: number;
        AircraftClassId: string;
        CurrentAirportId: string | null;
        VirtualAirlineId: string;
    }>;
}
