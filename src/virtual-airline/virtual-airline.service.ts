import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.service';
import { type Prisma, type VirtualAirline } from 'generated/prisma';

@Injectable()
export class VirtualAirlineService {
    constructor(private prisma: PrismaService) {}

    async getVirtualAirline() {
        const entity: VirtualAirline | null = await this.prisma.virtualAirline.findFirst({
            orderBy: {
                UpdatedAt: 'desc'
            }
        });

        if (!entity) {
            throw new NotFoundException('Virtual airline not found');
        }

        return entity;
    }
    
    async getVirtualAirlineById(Id: string) {
        const entity: VirtualAirline | null = await this.prisma.virtualAirline.findUnique({
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
                Identifier: virtualAirline.Identifier
            },
            update: virtualAirline,
            create: virtualAirline
        });

        return entity;
    }
}
