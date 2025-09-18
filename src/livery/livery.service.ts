import { Injectable } from '@nestjs/common';
import { DatabaseService } from '@database/database.service';
import { Livery, LiveryFile, LiveryImage, Prisma } from 'prisma/generated/prisma';

@Injectable()
export class LiveryService {
    constructor(private prisma: DatabaseService) {}
    
    async findAll(query?: Prisma.LiveryFindManyArgs) {
        const entities: Livery[] = await this.prisma.livery.findMany({
            ...query,
            include: {
                Aircraft: true,
            },
            orderBy: {
                UpdatedAt: 'desc'
            }
        });

        return entities;
    }

    async findById(Id: string) {
        const entity: Livery | null = await this.prisma.livery.findUnique({
            where: {
                Id: Id,
            },
            include: {
                Aircraft: true,
            },
        });

        return entity;
    }

    async create(dto: Prisma.LiveryCreateInput) {
        const entity = await this.prisma.livery.create({
            data: dto,
        });

        return entity;
    }

    async update(Id: string, dto: Prisma.LiveryUpdateInput) {
        const entity = await this.prisma.livery.update({
            where: { Id: Id },
            data: dto,
        });

        return entity;
    }

    async delete(Id: string) {
        const entity = await this.prisma.livery.delete({
            where: { Id: Id },
        });

        return entity;
    }

    // LiveryImage
    async LiveryImage_findMany(query?: Prisma.LiveryImageFindManyArgs) {
        const entities: LiveryImage[] = await this.prisma.liveryImage.findMany(query);

        return entities;
    }

    async LiveryImage_findOneById(Id: string, query?: Partial<Prisma.LiveryImageFindUniqueArgs>) {
        const _query = {
            where: {
                Id: Id,
            },
            ...query,
        }

        const entity: LiveryImage | null = await this.prisma.liveryImage.findUnique(_query);

        return entity;
    }

    async LiveryImage_create(dto: Prisma.LiveryImageCreateInput) {
        const entity = await this.prisma.liveryImage.create({
            data: dto,
        });

        return entity;
    }

    async LiveryImage_update(Id: string, dto: Prisma.LiveryImageUpdateInput) {
        const entity = await this.prisma.liveryImage.update({
            where: { Id: Id },
            data: dto,
        });

        return entity;
    }

    // LiveryFile
    async LiveryFile_findMany(query?: Prisma.LiveryFileFindManyArgs) {
        const entities: LiveryFile[] = await this.prisma.liveryFile.findMany(query);

        return entities;
    }

    async LiveryFile_findOneById(Id: string, query?: Partial<Prisma.LiveryFileFindUniqueArgs>) {
        const _query = {
            where: {
                Id: Id,
            },
            ...query,
        }

        const entity: LiveryFile | null = await this.prisma.liveryFile.findUnique(_query);

        return entity;
    }

    async LiveryFile_create(dto: Prisma.LiveryFileCreateInput) {
        const entity = await this.prisma.liveryFile.create({
            data: dto,
        });

        return entity;
    }

    async LiveryFile_update(Id: string, dto: Prisma.LiveryFileUpdateInput) {
        const entity = await this.prisma.liveryFile.update({
            where: { Id: Id },
            data: dto,
        });

        return entity;
    }
}
