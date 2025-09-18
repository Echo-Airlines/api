import { Injectable } from '@nestjs/common';
import { OnAirApiService } from '@on-air/on-air-api.service';
import { OnAirAirport } from '@on-air/types';
import { DatabaseService } from '@database/database.service';
import { Airport, Prisma } from 'prisma/generated/prisma';
import countries from './countries';

@Injectable()
export class AirportService {
    constructor(private prisma: DatabaseService, private onAirApiService: OnAirApiService) {}

    async findAll(include?: Prisma.AirportInclude) {
        const entities: Airport[] = await this.prisma.airport.findMany({
            include: include,
        });

        return entities;
    }

    async findById(id: string, include?: Prisma.AirportInclude) {
        const entity: Airport | null = await this.prisma.airport.findUnique({
            where: {
                Id: id,
            },
            include: include,
        });

        return entity;
    }

    async findByICAO(ICAO: string, include?: Prisma.AirportInclude) {
        const entity: Airport | null = await this.prisma.airport.findUnique({
            where: {
                ICAO: ICAO,
            },
            include: include,
        });

        return entity;
    }

    async findByIATA(IATA: string, include?: Prisma.AirportInclude) {
        const entity: Airport | null = await this.prisma.airport.findUnique({
            where: {
                IATA: IATA,
            },
            include: include,
        });

        return entity;
    }

    async create(dto: Prisma.AirportCreateInput, include?: Prisma.AirportInclude) {
        const entity: Airport = await this.prisma.airport.create({
            data: dto,
            include: include,
        });

        return entity;
    }

    async upsert(dto: Prisma.AirportCreateInput, include?: Prisma.AirportInclude) {
        const entity: Airport = await this.prisma.airport.upsert({
            where: {
                ICAO: dto.ICAO,
            },
            create: dto,
            update: dto,
            include: include,
        });

        return entity;
    }

    async lookupByICAO(ICAO: string, include?: Prisma.AirportInclude) {
        let entity: Airport | null = await this.prisma.airport.findUnique({
            where: {
                ICAO: ICAO,
            },
            include: include,
        });

        if (!entity) {
            const onAirAirport: OnAirAirport | null = await this.onAirApiService.getAirportByICAO(ICAO);

            if (!onAirAirport) {
                return null;
            }

            entity = await this.create({
                Id: onAirAirport.Id,
                ICAO: onAirAirport.ICAO,
                IATA: onAirAirport.IATA,
                Name: onAirAirport.Name,
                Size: onAirAirport.Size,
                City: onAirAirport.City,
                State: onAirAirport.State,
                CountryCode: onAirAirport.CountryCode,
                CountryName: onAirAirport.CountryName,
                Latitude: onAirAirport.Latitude,
                Longitude: onAirAirport.Longitude,
                HomeWebSiteUrl: onAirAirport.HomeWebSiteUrl,
                WikiUrl: onAirAirport.WikiUrl,
                Description: onAirAirport.Description,
            }, include);
        }

        return entity;
    }

    determineCountryEmoji(countryCode: string) {
        const countryEmoji = countries[countryCode]?.emoji;

        return countryEmoji;
    }
}
