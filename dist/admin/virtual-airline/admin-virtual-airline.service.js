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
exports.AdminVirtualAirlineService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let AdminVirtualAirlineService = class AdminVirtualAirlineService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(query) {
        const entities = await this.prisma.virtualAirline.findMany({
            ...query,
            include: {
                World: true,
                VARoles: true,
                Members: true,
            },
            orderBy: {
                UpdatedAt: 'desc'
            }
        });
        return entities;
    }
    async getPrimaryVirtualAirline() {
        const entity = await this.prisma.virtualAirline.findFirst({
            where: {
                IsPrimary: true
            },
            include: {
                World: true,
                VARoles: true,
                Members: true,
            },
            orderBy: {
                UpdatedAt: 'desc'
            }
        });
        return entity;
    }
    async getVirtualAirlineById(Id) {
        const entity = await this.prisma.virtualAirline.findUnique({
            include: {
                World: true
            },
            where: {
                Id
            }
        });
        if (!entity) {
            throw new common_1.NotFoundException('Virtual airline not found');
        }
        return entity;
    }
    async getPrimaryVARoles() {
        const entities = await this.prisma.virtualAirlineRole.findMany({
            where: {
                VirtualAirline: { IsPrimary: true }
            }
        });
        return entities;
    }
    async getUnlinkedVARoles() {
        const entities = await this.prisma.virtualAirlineRole.findMany({
            where: {
                Role: null
            }
        });
        return entities;
    }
    async getVirtualAirlineByIdentifier(Identifier) {
        const entity = await this.prisma.virtualAirline.findUnique({
            include: {
                World: true
            },
            where: {
                Identifier
            }
        });
        if (!entity) {
            throw new common_1.NotFoundException('Virtual airline not found');
        }
        return entity;
    }
    async upsertById(virtualAirline) {
        const entity = await this.prisma.virtualAirline.upsert({
            where: {
                Id: virtualAirline.Id
            },
            update: virtualAirline,
            create: virtualAirline
        });
        return entity;
    }
    async upsertByIdentifier(virtualAirline) {
        const entity = await this.prisma.virtualAirline.upsert({
            where: {
                Identifier: virtualAirline.Identifier ?? ''
            },
            update: virtualAirline,
            create: virtualAirline
        });
        return entity;
    }
    async create(virtualAirline) {
        const entity = await this.prisma.virtualAirline.create({
            data: virtualAirline,
            include: {
                World: true
            }
        });
        return entity;
    }
    async VARole_findAll(query) {
        const entities = await this.prisma.virtualAirlineRole.findMany({
            ...query,
            include: {
                VirtualAirline: true
            }
        });
        return entities;
    }
    async VARole_findById(Id) {
        const entity = await this.prisma.virtualAirlineRole.findUnique({
            where: {
                Id
            },
            include: {
                VirtualAirline: true
            }
        });
        return entity;
    }
    async VARole_upsert(virtualAirlineRole) {
        const entity = await this.prisma.virtualAirlineRole.upsert({
            where: {
                Id: virtualAirlineRole.Id
            },
            update: virtualAirlineRole,
            create: virtualAirlineRole
        });
        return entity;
    }
};
exports.AdminVirtualAirlineService = AdminVirtualAirlineService;
exports.AdminVirtualAirlineService = AdminVirtualAirlineService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AdminVirtualAirlineService);
//# sourceMappingURL=admin-virtual-airline.service.js.map