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
exports.AppConfigService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
let AppConfigService = class AppConfigService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        const appConfig = await this.prisma.appConfig.create({
            data: dto
        });
        return appConfig;
    }
    async findOne(query) {
        const result = await this.prisma.appConfig.findFirst({
            where: query
        });
        if (!result) {
            throw new common_1.NotFoundException('App config not found');
        }
        return result;
    }
    async findMany(query) {
        const result = await this.prisma.appConfig.findMany(query);
        if (!result) {
            throw new common_1.NotFoundException('App config not found');
        }
        return result;
    }
    async getLatest() {
        const result = await this.prisma.appConfig.findMany({ orderBy: { UpdatedAt: 'desc' } });
        if (!result) {
            return null;
        }
        return result[0];
    }
    async update(query, dto) {
        const appConfig = await this.findOne(query);
        return this.prisma.appConfig.update({
            where: { Id: appConfig.Id },
            data: dto
        });
    }
    async upsert(dto) {
        let appConfig = await this.getLatest();
        if (!appConfig) {
            appConfig = await this.create(dto);
        }
        else {
            appConfig = await this.update({ Id: appConfig.Id }, dto);
        }
        return appConfig;
    }
    async delete(query) {
        const appConfig = await this.findOne(query);
        return this.prisma.appConfig.delete({
            where: { Id: appConfig.Id }
        });
    }
    async setVirtualAirlineInitiated(VirtualAirlineInitiated) {
        const appConfig = await this.getLatest();
        if (!appConfig) {
            throw new common_1.NotFoundException('App config not found');
        }
        return this.prisma.appConfig.update({
            where: { Id: appConfig.Id },
            data: { VirtualAirlineInitiated }
        });
    }
    async Livery_findAll() {
        const result = await this.Livery_findMany({
            orderBy: { CreatedAt: 'desc' }
        });
        return result;
    }
    async Livery_findAllActive() {
        const result = await this.Livery_findMany({
            where: { IsActive: true },
            orderBy: { CreatedAt: 'desc' }
        });
        return result;
    }
    async Livery_findOneById(id) {
        const result = await this.Livery_findOne({ where: { Id: id } });
        return result;
    }
    async Livery_findMany(query) {
        const result = await this.prisma.livery.findMany(query);
        return result;
    }
    async Livery_findOne(query) {
        const result = await this.prisma.livery.findFirst(query);
        if (!result) {
            throw new common_1.NotFoundException('Livery not found');
        }
        return result;
    }
    async Livery_incrementDownloadCount(id) {
        const result = await this.prisma.livery.update({
            where: { Id: id },
            data: {
                DownloadCount: {
                    increment: 1
                }
            }
        });
        return result;
    }
    async updateDiscordConfig(config) {
        const appConfig = await this.getLatest();
        if (!appConfig) {
            throw new common_1.NotFoundException('App config not found');
        }
        return this.prisma.appConfig.update({
            where: { Id: appConfig.Id },
            data: config
        });
    }
    async getDiscordConfig() {
        const appConfig = await this.getLatest();
        if (!appConfig) {
            return null;
        }
        return {
            DiscordAuthEnabled: appConfig.DiscordAuthEnabled,
        };
    }
};
exports.AppConfigService = AppConfigService;
exports.AppConfigService = AppConfigService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], AppConfigService);
//# sourceMappingURL=app-config.service.js.map