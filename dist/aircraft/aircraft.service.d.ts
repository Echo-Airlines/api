import { PrismaService } from '@prisma/prisma.service';
import { Aircraft, Livery, Prisma } from 'prisma/generated/prisma';
export declare class AircraftService {
    private prisma;
    constructor(prisma: PrismaService);
    findAllByVirtualAirlineIdentifier(virtualAirlineIdentifier: string): Promise<{
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
    findAll(query?: Prisma.AircraftFindManyArgs): Promise<{
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
    findById(Id: string): Promise<{
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
    findPrimaryVirtualAirlineFleet(): Promise<{
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
    upsert(dto: Prisma.AircraftCreateInput): Promise<{
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
    assignLiveryToAircraft(aircraft: Aircraft, livery: Livery): Promise<{
        Liveries: {
            Id: string;
            CreatedAt: Date;
            UpdatedAt: Date;
            Name: string;
            Description: string | null;
            IsActive: boolean;
            AircraftId: string | null;
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
