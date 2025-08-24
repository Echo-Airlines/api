import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.service';
import { Company, Prisma } from 'prisma/generated/prisma';

@Injectable()
export class CompanyService {
    constructor(private prisma: PrismaService) {}

    async findMany(query?: Prisma.CompanyFindManyArgs) {
        const entities: Company[] = await this.prisma.company.findMany(query);

        return entities;
    }

    async findUnique(query: Prisma.CompanyFindUniqueArgs) {
        const entity: Company|null = await this.prisma.company.findUnique(query);

        return entity;
    }

    async findById(Id: string) {
        const entity: Company|null = await this.prisma.company.findUnique({
            where: {
                Id: Id
            }
        });

        return entity;
    }

    async findByAirlineCode(AirlineCode: string) {
        const entity: Company|null = await this.prisma.company.findUnique({
            where: {
                AirlineCode: AirlineCode
            }
        });

        return entity;
    }

    async findByOwnerId(OwnerId: string) {
        const entity: Company|null = await this.prisma.company.findFirst({
            where: {
                Owner: {
                    Id: OwnerId
                }
            }
        });

        return entity;
    }

    async upsert(dto: Prisma.CompanyCreateInput) {
        const entity: Company = await this.prisma.company.upsert({
            where: {
                Id: dto.Id
            },
            update: dto,
            create: dto
        });

        return entity;
    }
}
