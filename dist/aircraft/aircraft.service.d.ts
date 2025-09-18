import { DatabaseService } from '@database/database.service';
import { Aircraft, Livery, Prisma } from 'prisma/generated/prisma';
export declare class AircraftService {
    private prisma;
    constructor(prisma: DatabaseService);
    findAllByVirtualAirlineIdentifier(virtualAirlineIdentifier: string): Promise<{
        Id: string;
        Identifier: string;
        DisplayName: string;
        AircraftStatusId: number;
        AircraftClassId: string;
        VirtualAirlineId: string;
        CurrentAirportId: string | null;
        LastRefresh: Date | null;
        CreatedAt: Date;
        UpdatedAt: Date;
    }[]>;
    findAll(query?: Prisma.AircraftFindManyArgs): Promise<{
        Id: string;
        Identifier: string;
        DisplayName: string;
        AircraftStatusId: number;
        AircraftClassId: string;
        VirtualAirlineId: string;
        CurrentAirportId: string | null;
        LastRefresh: Date | null;
        CreatedAt: Date;
        UpdatedAt: Date;
    }[]>;
    findById(Id: string): Promise<{
        Id: string;
        Identifier: string;
        DisplayName: string;
        AircraftStatusId: number;
        AircraftClassId: string;
        VirtualAirlineId: string;
        CurrentAirportId: string | null;
        LastRefresh: Date | null;
        CreatedAt: Date;
        UpdatedAt: Date;
    } | null>;
    findPrimaryVirtualAirlineFleet(): Promise<{
        Id: string;
        Identifier: string;
        DisplayName: string;
        AircraftStatusId: number;
        AircraftClassId: string;
        VirtualAirlineId: string;
        CurrentAirportId: string | null;
        LastRefresh: Date | null;
        CreatedAt: Date;
        UpdatedAt: Date;
    }[]>;
    upsert(dto: Prisma.AircraftCreateInput): Promise<{
        Id: string;
        Identifier: string;
        DisplayName: string;
        AircraftStatusId: number;
        AircraftClassId: string;
        VirtualAirlineId: string;
        CurrentAirportId: string | null;
        LastRefresh: Date | null;
        CreatedAt: Date;
        UpdatedAt: Date;
    }>;
    assignLiveryToAircraft(aircraft: Aircraft, livery: Livery): Promise<{
        Liveries: {
            Id: string;
            CreatedAt: Date;
            UpdatedAt: Date;
            Name: string;
            Description: string | null;
            AircraftId: string | null;
            IsActive: boolean;
            DownloadCount: number;
            Image: string;
            ImageFileName: string | null;
            CoverPhoto: string | null;
            Metadata: Prisma.JsonValue | null;
            Url: string | null;
            DownloadUrl: string | null;
        }[];
    } & {
        Id: string;
        Identifier: string;
        DisplayName: string;
        AircraftStatusId: number;
        AircraftClassId: string;
        VirtualAirlineId: string;
        CurrentAirportId: string | null;
        LastRefresh: Date | null;
        CreatedAt: Date;
        UpdatedAt: Date;
    }>;
}
