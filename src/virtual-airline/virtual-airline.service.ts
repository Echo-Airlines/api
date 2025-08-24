import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.service';
import { Member, Prisma, VirtualAirline, VirtualAirlineRole } from 'prisma/generated/prisma';

@Injectable()
export class VirtualAirlineService {
    constructor(private prisma: PrismaService) {}

    async findAll(query?: Prisma.VirtualAirlineFindManyArgs) {
        const entities: VirtualAirline[] = await this.prisma.virtualAirline.findMany({
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

    async getPrimaryVirtualAirline(query?: Prisma.VirtualAirlineFindFirstArgs) {
        const entity: VirtualAirline | null = await this.prisma.virtualAirline.findFirst({
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

    async getPrimaryLeaderboard(sortColumn: 'reputation' | 'flights' | 'hours' | 'earnings' = 'earnings') {
        const va = await this.getPrimaryVirtualAirline();

        if (!va) {
            throw new NotFoundException('Virtual airline not found');
        }

        let members = await this.getPrimaryVirtualAirlineMembers();

        if (members.length === 0) {
            return [];
        } else {
            // filter out members with a permission less than 400
            members = members.filter((member) => {
                const permission = member.VARole.Permission;
                return permission < 400;
            });
        }


        // sort the members by the sort column
        const leaderboard = members.sort((a, b) => {
            switch(sortColumn) {
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
    
    
    async getVirtualAirlineById(Id: string, query?: Prisma.VirtualAirlineFindUniqueArgs) {
        if (!Id) {
            throw new BadRequestException('Virtual airline ID is required');
        }

        const entity: VirtualAirline | null = await this.prisma.virtualAirline.findUnique({
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

    async getVARoles() {
        const va = await this.getPrimaryVirtualAirline();

        if (!va) {
            throw new NotFoundException('Virtual airline not found');
        }

        const roles: VirtualAirlineRole[] = await this.prisma.virtualAirlineRole.findMany({
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

    async Member_findAll(query?: Prisma.MemberFindManyArgs) {
        const entities: Member[] = await this.prisma.member.findMany({
            ...query,
            include: {
                VirtualAirline: true,
                VARole: true
            }
        });

        return entities;
    }

    async Member_findById(Id: string) {
        const entity: Member | null = await this.prisma.member.findUnique({
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

    async Member_deactivate(Id: string) {
        if (!Id) {
            throw new BadRequestException('Member ID is required');
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
}
