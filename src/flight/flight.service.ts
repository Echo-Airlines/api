import { Injectable } from '@nestjs/common';
import { DatabaseService } from '@database/database.service';
import { Flight, FlightRoute, FlightStatus, Prisma } from 'prisma/generated/prisma';
import { CreateFlightRouteDto } from './dto/create-flight-route.dto';
import { updateFlightRouteDto } from './dto/update-flight-route.dto';

@Injectable()
export class FlightService {
    constructor(private prisma: DatabaseService) {}

    async findAll(query?: Prisma.FlightFindManyArgs) {
        const entities: Flight[] = await this.prisma.flight.findMany({
            ...query
        });

        return entities;
    }

    async findAllByAircraftIdentifier(aircraftIdentifier: string) {
        const entities: Flight[] = await this.prisma.flight.findMany({
            where: {
                Aircraft: {
                    Identifier: aircraftIdentifier,
                },
            },
        });

        return entities;
    }

    async findAllByVirtualAirlineIdentifier(virtualAirlineIdentifier: string) {
        const entities: Flight[] = await this.prisma.flight.findMany({
            where: {
                Aircraft: {
                    VirtualAirline: {
                        Identifier: virtualAirlineIdentifier,
                    },
                },
            },
        });

        return entities;
    }

    async findById(Id: string, include?: Prisma.FlightInclude) {
        const entity: Flight | null = await this.prisma.flight.findUnique({
            where: {
                Id: Id,
            },
            include: include,
        });

        return entity;
    }

    async upsert(dto: Prisma.FlightCreateInput) {
        const entity = await this.prisma.flight.upsert({
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

    async create(dto: Prisma.FlightCreateInput) {
        const entity = await this.prisma.flight.create({
            data: dto,
        });

        return entity;
    }

    async findAllFlightsByCompanyId(CompanyId: string, completed?: boolean, include?: Prisma.FlightInclude) {

        let flightStatus: FlightStatus[] = [FlightStatus.PENDING, FlightStatus.FLIGHT];

        if (completed) {
            flightStatus = [
                FlightStatus.PENDING,
                FlightStatus.FLIGHT,
                FlightStatus.COMPLETED,
                FlightStatus.CANCELLED,
                FlightStatus.WARP,
            ];
        }

        const entities: Flight[] = await this.prisma.flight.findMany({
            where: {
                CompanyId: CompanyId,
                FlightStatus: {
                    in: flightStatus,
                },
            },
            include: include,
        });

        return entities;
    }

    async findAllFlightRoutesByMemberId(MemberId: string, include?: Prisma.FlightRouteInclude) {
        const entities: FlightRoute[] = await this.prisma.flightRoute.findMany({
            where: {
                MemberId: MemberId,
            },
            include: include,
        });

        return entities;
    }

    async findAllFlightRoutesByFlightId(FlightId: string, include?: Prisma.FlightRouteInclude) {
        const entities: FlightRoute[] = await this.prisma.flightRoute.findMany({
            where: {
                FlightId: FlightId,
            },
            include: include,
        });

        return entities;
    }

    async createFlightRoute(dto: CreateFlightRouteDto, include?: Prisma.FlightRouteInclude) {
        const query: Prisma.FlightRouteCreateInput = {
            Flight: {
                connect: {
                    Id: dto.FlightId,
                },
            },
            Member: {
                connect: {
                    Id: dto.MemberId,
                },
            },
            Route: dto.Route,
        };

        const entity = await this.prisma.flightRoute.create({
            data: query,
            include: include,
        });

        return entity;
    }

    async updateFlightRoute(dto: updateFlightRouteDto, include?: Prisma.FlightRouteInclude) {
        const entity = await this.prisma.flightRoute.update({
            where: {
                Id: dto.Id,
            },
            data: {
                ...dto,
                Route: dto.Route,
            },
            include: include,
        });

        return entity;
    }

    async deleteFlightRouteById(Id: string) {
        const entity = await this.prisma.flightRoute.delete({
            where: {
                Id: Id,
            }
        });

        return entity;
    }

    async deleteAllFlightRoutesByFlightId(FlightId: string) {
        const entity = await this.prisma.flightRoute.deleteMany({
            where: {
                FlightId: FlightId,
            },
        });

        return entity;
    }
}
