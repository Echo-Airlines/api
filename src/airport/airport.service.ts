import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.service';
import { Airport, Prisma } from 'prisma/generated/prisma';

@Injectable()
export class AirportService {
    constructor(private prisma: PrismaService) {}

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
}
