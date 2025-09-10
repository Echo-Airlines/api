"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const prisma_1 = require("../../prisma/generated/prisma/index.js");
let FlightService = class FlightService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(query) {
        const entities = await this.prisma.flight.findMany({
            ...query
        });
        return entities;
    }
    async findAllByAircraftIdentifier(aircraftIdentifier) {
        const entities = await this.prisma.flight.findMany({
            where: {
                Aircraft: {
                    Identifier: aircraftIdentifier,
                },
            },
        });
        return entities;
    }
    async findAllByVirtualAirlineIdentifier(virtualAirlineIdentifier) {
        const entities = await this.prisma.flight.findMany({
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
    async findById(Id, include) {
        const entity = await this.prisma.flight.findUnique({
            where: {
                Id: Id,
            },
            include: include,
        });
        return entity;
    }
    async upsert(dto) {
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
    async findAllFlightsByCompanyId(CompanyId, completed, include) {
        let flightStatus = [prisma_1.FlightStatus.PENDING, prisma_1.FlightStatus.FLIGHT];
        if (completed) {
            flightStatus = [
                prisma_1.FlightStatus.PENDING,
                prisma_1.FlightStatus.FLIGHT,
                prisma_1.FlightStatus.COMPLETED,
                prisma_1.FlightStatus.CANCELLED,
                prisma_1.FlightStatus.WARP,
            ];
        }
        const entities = await this.prisma.flight.findMany({
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
    async findAllFlightRoutesByMemberId(MemberId, include) {
        const entities = await this.prisma.flightRoute.findMany({
            where: {
                MemberId: MemberId,
            },
            include: include,
        });
        return entities;
    }
    async findAllFlightRoutesByFlightId(FlightId, include) {
        const entities = await this.prisma.flightRoute.findMany({
            where: {
                FlightId: FlightId,
            },
            include: include,
        });
        return entities;
    }
    async createFlightRoute(dto, include) {
        const query = {
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
    async updateFlightRoute(dto, include) {
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
    async deleteFlightRouteById(Id) {
        const entity = await this.prisma.flightRoute.delete({
            where: {
                Id: Id,
            }
        });
        return entity;
    }
    async deleteAllFlightRoutesByFlightId(FlightId) {
        const entity = await this.prisma.flightRoute.deleteMany({
            where: {
                FlightId: FlightId,
            },
        });
        return entity;
    }
};
exports.FlightService = FlightService;
exports.FlightService = FlightService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FlightService);
//# sourceMappingURL=flight.service.js.map