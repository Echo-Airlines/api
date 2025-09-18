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
        DisplayName: string;
        AircraftStatusId: number;
        AircraftClassId: string;
        VirtualAirlineId: string;
        CurrentAirportId: string | null;
        LastRefresh: Date | null;
    }[]>;
    getAircraftById(id: string): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Identifier: string;
        DisplayName: string;
        AircraftStatusId: number;
        AircraftClassId: string;
        VirtualAirlineId: string;
        CurrentAirportId: string | null;
        LastRefresh: Date | null;
    } | null>;
    getFleetByVirtualAirlineIdentifier(virtualAirlineIdentifier: string): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Identifier: string;
        DisplayName: string;
        AircraftStatusId: number;
        AircraftClassId: string;
        VirtualAirlineId: string;
        CurrentAirportId: string | null;
        LastRefresh: Date | null;
    }[]>;
    assignLiveryToAircraft(id: string, data: {
        liveryId: string;
    }): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Identifier: string;
        DisplayName: string;
        AircraftStatusId: number;
        AircraftClassId: string;
        VirtualAirlineId: string;
        CurrentAirportId: string | null;
        LastRefresh: Date | null;
    }>;
}
