import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.service';
import { Prisma, VirtualAirline, VirtualAirlineRole } from 'prisma/generated/prisma';

@Injectable()
export class AdminVirtualAirlineService {
    constructor(private prisma: PrismaService) {}

    async findAll(query?: Prisma.VirtualAirlineFindManyArgs) {
        const entities: VirtualAirline[] = await this.prisma.virtualAirline.findMany({
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
        const entity: VirtualAirline | null = await this.prisma.virtualAirline.findFirst({
            where: {
                IsPrimary: true
            },
            include: {
                World: true
            },
            orderBy: {
                UpdatedAt: 'desc'
            }
        });

        return entity;
    }
    
    async getVirtualAirlineById(Id: string) {
        const entity: VirtualAirline | null = await this.prisma.virtualAirline.findUnique({
            include: {
                World: true
            },
            where: {
                Id
            }
        });

        if (!entity) {
            throw new NotFoundException('Virtual airline not found');
        }

        return entity;
    }

    async getVirtualAirlineByIdentifier(Identifier: string) {
        const entity: VirtualAirline | null = await this.prisma.virtualAirline.findUnique({
            include: {
                World: true
            },
            where: {
                Identifier
            }
        });

        if (!entity) {
            throw new NotFoundException('Virtual airline not found');
        }

        return entity;
    }

    async upsertById(virtualAirline: Prisma.VirtualAirlineCreateInput) {
        const entity = await this.prisma.virtualAirline.upsert({
            where: {
                Id: virtualAirline.Id
            },
            update: virtualAirline,
            create: virtualAirline
        });

        return entity;
    }

    async upsertByIdentifier(virtualAirline: Prisma.VirtualAirlineCreateInput) {
        const entity = await this.prisma.virtualAirline.upsert({
            where: {
                Identifier: virtualAirline.Identifier ?? ''
            },
            update: virtualAirline,
            create: virtualAirline
        });

        return entity;
    }

    async create(virtualAirline: Prisma.VirtualAirlineCreateInput) {
        const entity = await this.prisma.virtualAirline.create({
            data: virtualAirline,
            include: {
                World: true
            }
        });

        return entity;
    }

    // roles
    async VARole_findAll(query?: Prisma.VirtualAirlineRoleFindManyArgs) {
        const entities: VirtualAirlineRole[] = await this.prisma.virtualAirlineRole.findMany({
            ...query,
            include: {
                VirtualAirline: true
            }
        });

        return entities;
    }

    async VARole_findById(Id: string) {
        const entity: VirtualAirlineRole | null = await this.prisma.virtualAirlineRole.findUnique({
            where: {
                Id
            },
            include: {
                VirtualAirline: true
            }
        });

        return entity;
    }

    async VARole_upsert(virtualAirlineRole: Prisma.VirtualAirlineRoleCreateInput) {
        const entity = await this.prisma.virtualAirlineRole.upsert({
            where: {
                Id: virtualAirlineRole.Id
            },
            update: virtualAirlineRole,
            create: virtualAirlineRole
        });

        return entity;
    }
}
