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
exports.VirtualAirlineService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let VirtualAirlineService = class VirtualAirlineService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(query) {
        const entities = await this.prisma.virtualAirline.findMany({
            ...query,
            include: {
                World: true,
                Members: true,
            },
            orderBy: {
                UpdatedAt: 'desc'
            }
        });
        return entities;
    }
    async getPrimaryVirtualAirline(query) {
        const entity = await this.prisma.virtualAirline.findFirst({
            where: (query?.where) ? query.where : {
                IsPrimary: true
            },
            include: (query?.include) ? query.include : {
                World: true,
            },
            orderBy: (query?.orderBy) ? query.orderBy : {
                UpdatedAt: 'desc',
            }
        });
        return entity;
    }
    async getPrimaryLeaderboard(sortColumn = 'earnings') {
        const va = await this.getPrimaryVirtualAirline();
        if (!va) {
            throw new common_1.NotFoundException('Virtual airline not found');
        }
        let members = await this.getPrimaryVirtualAirlineMembers();
        if (members.length === 0) {
            return [];
        }
        else {
            members = members.filter((member) => {
                const permission = member.VARole.Permission;
                return permission < 400;
            });
        }
        const leaderboard = members.sort((a, b) => {
            switch (sortColumn) {
                case 'earnings':
                    return b.TotalEarnedCredits.toNumber() - a.TotalEarnedCredits.toNumber();
                default:
                    return a.Company.Name.localeCompare(b.Company.Name);
            }
        });
        return leaderboard;
    }
    async getPrimaryVirtualAirlineMembers() {
        const members = await this.prisma.member.findMany({
            where: {
                VirtualAirline: {
                    IsPrimary: true,
                },
                IsActive: true,
            },
            include: {
                Company: true,
                VARole: true
            }
        });
        return members;
    }
    async getVirtualAirlineById(Id, query) {
        if (!Id) {
            throw new common_1.BadRequestException('Virtual airline ID is required');
        }
        const entity = await this.prisma.virtualAirline.findUnique({
            ...query,
            include: {
                World: true,
                Members: true,
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
    async getVARoles() {
        const va = await this.getPrimaryVirtualAirline();
        if (!va) {
            throw new common_1.NotFoundException('Virtual airline not found');
        }
        const roles = await this.prisma.virtualAirlineRole.findMany({
            where: {
                VirtualAirline: {
                    Id: va.Id
                }
            },
            orderBy: {
                Name: 'asc',
            }
        });
        return roles;
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
    async Member_findAll(query) {
        const entities = await this.prisma.member.findMany({
            ...query,
            include: {
                VirtualAirline: true,
                VARole: true
            }
        });
        return entities;
    }
    async Member_findById(Id) {
        const entity = await this.prisma.member.findUnique({
            where: {
                Id
            },
            include: {
                VirtualAirline: true,
                VARole: true
            }
        });
        return entity;
    }
    async Member_deactivate(Id) {
        if (!Id) {
            throw new common_1.BadRequestException('Member ID is required');
        }
        const entity = await this.prisma.member.update({
            where: {
                Id
            },
            data: {
                IsActive: false,
                DeactivatedAt: new Date()
            },
            include: {
                Company: true,
                VARole: true
            }
        });
        return entity;
    }
};
exports.VirtualAirlineService = VirtualAirlineService;
exports.VirtualAirlineService = VirtualAirlineService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], VirtualAirlineService);
//# sourceMappingURL=virtual-airline.service.js.map