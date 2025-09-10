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
exports.AircraftService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AircraftService = class AircraftService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAllByVirtualAirlineIdentifier(virtualAirlineIdentifier) {
        const entities = await this.prisma.aircraft.findMany({
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
    async findAll(query) {
        const entities = await this.prisma.aircraft.findMany({
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
    async findById(Id) {
        const entity = await this.prisma.aircraft.findUnique({
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
        const entities = await this.prisma.aircraft.findMany({
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
    async upsert(dto) {
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
    async assignLiveryToAircraft(aircraft, livery) {
        const entity = await this.prisma.aircraft.update({
            where: { Id: aircraft.Id },
            data: { Liveries: { connect: { Id: livery.Id } } },
            include: {
                Liveries: true,
            },
        });
        return entity;
    }
};
exports.AircraftService = AircraftService;
exports.AircraftService = AircraftService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AircraftService);
//# sourceMappingURL=aircraft.service.js.map