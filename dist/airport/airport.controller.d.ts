import { AirportService } from './airport.service';
import { OnAirApiService } from '@on-air/on-air-api.service';
import { Prisma } from 'prisma/generated/prisma';
export declare class AirportController {
    private readonly airportService;
    private readonly onAirApiService;
    constructor(airportService: AirportService, onAirApiService: OnAirApiService);
    getAllRegisteredAirports(): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Name: string;
        Description: string | null;
        ICAO: string;
        IATA: string | null;
        Size: number;
        City: string | null;
        State: string | null;
        CountryCode: string | null;
        CountryName: string | null;
        CountryEmoji: string | null;
        Latitude: Prisma.Decimal;
        Longitude: Prisma.Decimal;
        HomeWebSiteUrl: string | null;
        WikiUrl: string | null;
    }[]>;
    getAirportByICAO(icao: string): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Name: string;
        Description: string | null;
        ICAO: string;
        IATA: string | null;
        Size: number;
        City: string | null;
        State: string | null;
        CountryCode: string | null;
        CountryName: string | null;
        CountryEmoji: string | null;
        Latitude: Prisma.Decimal;
        Longitude: Prisma.Decimal;
        HomeWebSiteUrl: string | null;
        WikiUrl: string | null;
    }>;
}
