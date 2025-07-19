import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.service';
import { Prisma, User as PrismaUser } from 'prisma/generated/prisma';

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

    async update(id: string, data: Prisma.UserUpdateInput) {
        const entity = await this.prisma.user.update({ where: { Id: id }, data });

        return entity;
    }
    
    async delete(id: string) {
        const entity = await this.prisma.user.delete({ where: { Id: id } });

        return entity;
    }
}