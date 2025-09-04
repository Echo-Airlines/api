import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.service';
import { Aircraft, Livery, Prisma } from 'prisma/generated/prisma';

@Injectable()
export class AircraftService {
    constructor(private prisma: PrismaService) {}

    async findAllByVirtualAirlineIdentifier(virtualAirlineIdentifier: string) {
        const entities: Aircraft[] = await this.prisma.aircraft.findMany({
            where: {
                VirtualAirline: {
                    Identifier: virtualAirlineIdentifier,
                },
            },
            include: {
                AircraftClass: true,
                AircraftStatus: true,
                VirtualAirline: true,
                CurrentAirport: true,
            },
        });

        return entities;
    }

    async findAll(query?: Prisma.AircraftFindManyArgs) {
        const entities: Aircraft[] = await this.prisma.aircraft.findMany({
            ...query,
            include: {
                AircraftClass: true,
                AircraftStatus: true,
                VirtualAirline: true,
                CurrentAirport: true,
            },
            orderBy: {
                UpdatedAt: 'desc'
            }
        });

        return entities;
    }

    async findById(Id: string) {
        const entity: Aircraft | null = await this.prisma.aircraft.findUnique({
            where: {
                Id: Id,
            },
            include: {
                AircraftClass: true,
                AircraftStatus: true,
                VirtualAirline: true,
                CurrentAirport: true,
                Liveries: true,
            },
        });

        return entity;
    }

    async findPrimaryVirtualAirlineFleet() {
        const entities: Aircraft[] = await this.prisma.aircraft.findMany({
            where: {
                VirtualAirline: {
                    IsPrimary: true
                }
            },
            include: {
                AircraftClass: true,
                AircraftStatus: true,
                CurrentAirport: true,
                Liveries: true,
            },
            orderBy: {
                UpdatedAt: 'desc'
            }
        });

        return entities;
    }

    async upsert(dto: Prisma.AircraftCreateInput) {
        const entity = await this.prisma.aircraft.upsert({
            where: {
                Id: dto.Id,
            },
            update: {
                ...dto,
            },
            create: {
                ...dto,
            },
        });

        return entity;
    }

    async assignLiveryToAircraft(aircraft: Aircraft, livery: Livery) {
        const entity = await this.prisma.aircraft.update({
            where: { Id: aircraft.Id },
            data: { Liveries: { connect: { Id: livery.Id } } },
            include: {
                Liveries: true,
            },
        });

        return entity;
    }
}
