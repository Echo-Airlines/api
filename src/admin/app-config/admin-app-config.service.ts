import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "@prisma/prisma.service";
import { AppConfig, Prisma } from "prisma/generated/prisma";

@Injectable()
export class AdminAppConfigService {
    constructor(private prisma: PrismaService) {}

    async create(dto: AppConfig) {
        const appConfig = await this.prisma.appConfig.create({
            data: dto
        });

        return appConfig;
    }

    async findOne(query: Prisma.AppConfigWhereInput) {
        const result = await this.prisma.appConfig.findFirst({
            where: query
        });

        if (!result) {
            throw new NotFoundException('App config not found');
        }

        return result;
    }

    async findMany(query: Prisma.AppConfigFindManyArgs) {
        const result = await this.prisma.appConfig.findMany(query);

        if (!result) {
            throw new NotFoundException('App config not found');
        }

        return result;
    }

    async getLatest() {
        const result:AppConfig[] = await this.prisma.appConfig.findMany({ orderBy: { UpdatedAt: 'desc' } });

        if (!result) {
            return null;
        }

        return result[0];
    }

    async update(query: Prisma.AppConfigWhereInput, dto: AppConfig) {
        const appConfig = await this.findOne(query);

        return this.prisma.appConfig.update({
            where: { Id: appConfig.Id },
            data: dto
        });
    }

    async upsert(dto: AppConfig) {
        let appConfig = await this.getLatest();
        
        if (!appConfig) {
            appConfig = await this.create(dto);
        } else {
            appConfig = await this.update({ Id: appConfig.Id }, dto);
        }

        return appConfig;
    }

    async delete(query: Prisma.AppConfigWhereInput) {
        const appConfig = await this.findOne(query);

        return this.prisma.appConfig.delete({
            where: { Id: appConfig.Id }
        });
    }
    
    async setVirtualAirlineInitiated(VirtualAirlineInitiated: boolean) {
        const appConfig = await this.getLatest();

        if (!appConfig) {
            throw new NotFoundException('App config not found');
        }

        return this.prisma.appConfig.update({
            where: { Id: appConfig.Id },
            data: { VirtualAirlineInitiated }
        });
    }
}