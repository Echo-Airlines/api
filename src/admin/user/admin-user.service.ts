import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.service';
import { InviteCode, Prisma, User as PrismaUser } from 'prisma/generated/prisma';

@Injectable()
export class AdminUserService {
    constructor(private prisma: PrismaService) {}

    async findAll(query?: Prisma.UserFindManyArgs) {
        const entities = await this.prisma.user.findMany(query);

        return entities;
    }

    async findOne(query: Prisma.UserFindUniqueArgs) {
        const entity = await this.prisma.user.findUnique(query);

        return entity;
    }

    async create(data: Prisma.UserCreateInput) {
        const entity = await this.prisma.user.create({ data });

        return entity;
    }

    async update(Id: string, data: Prisma.UserUpdateInput) {
        const entity = await this.prisma.user.update({ where: { Id }, data });

        return entity;
    }
    
    async deleteOneById(Id: string) {
        // Use a transaction to ensure all related records are deleted atomically
        const entity = await this.prisma.$transaction(async (tx) => {
            // Delete user privacy settings first (one-to-one relationship)
            await tx.userPrivacySettings.deleteMany({
                where: { UserId: Id }
            });

            // Update members to remove user association (set UserId to null)
            await tx.member.updateMany({
                where: { UserId: Id },
                data: { UserId: null }
            });

            // Delete the user (this will also handle the many-to-many UserRoles relationship)
            return await tx.user.delete({ where: { Id } });
        });

        return entity;
    }

    async assignRoleToUser(UserId: string, roleSlug: string) {
        const entity = await this.prisma.user.update({
            where: { Id: UserId },
            data: {
                Roles: {
                    connect: { Slug: roleSlug }
                }
            }
        });

        return entity;
    }

    async unassignRoleFromUser(UserId: string, roleSlug: string) {
        const entity = await this.prisma.user.update({
            where: { Id: UserId },
            data: {
                Roles: {
                    disconnect: { Slug: roleSlug }
                }
            }
        });

        return entity;
    }

    async findAllRoles() {
        const entities = await this.prisma.role.findMany({
            include: {
                VirtualAirlineRole: true
            }
        });

        return entities;
    }

    async getRoleBySlug(slug: string) {
        if (!slug) {
            throw new Error('Slug is required');
        }

        const entity = await this.prisma.role.findUnique({
            where: { Slug: slug },
            include: {
                VirtualAirlineRole: true
            }
        });

        return entity;
    }

    async findManyInviteCodes(query?: Prisma.InviteCodeFindManyArgs) {
        const entities = await this.prisma.inviteCode.findMany(query);

        return entities;
    }

    async findOneInviteCode(query: Prisma.InviteCodeFindUniqueArgs) {
        const entity = await this.prisma.inviteCode.findUnique(query);

        return entity;
    }

    async createInviteCode() {
        const entity = await this.prisma.inviteCode.create({
            data: {
                Code: crypto.randomUUID()
            }
        });

        return entity;
    }

    async createInviteCodes(quantity: number) {
        const entities: InviteCode[] = [];

        for (let i = 0; i < quantity; i++) {
            const entity: InviteCode = await this.prisma.inviteCode.create({
                data: {
                    Code: crypto.randomUUID()
                }
            });

            entities.push(entity);
        }

        return entities;
    }

    async updateInviteCode(Id: string, data: Prisma.InviteCodeUpdateInput) {
        const entity = await this.prisma.inviteCode.update({ where: { Id }, data });

        return entity;
    }

    async deleteInviteCode(Id: string) {
        const entity = await this.prisma.inviteCode.delete({ where: { Id } });

        return entity;
    }

    async linkRoleToVirtualAirlineRole(Id: number, virtualAirlineRoleId: string) {
        const entity = await this.prisma.role.update({
            where: { Id },
            data: {
                VirtualAirlineRoleId: virtualAirlineRoleId
            }
        });

        return entity;
    }
}