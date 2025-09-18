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
exports.LiveryService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
let LiveryService = class LiveryService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(query) {
        const entities = await this.prisma.livery.findMany({
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
    async findById(Id) {
        const entity = await this.prisma.livery.findUnique({
            where: {
                Id: Id,
            },
            include: {
                Aircraft: true,
            },
        });
        return entity;
    }
    async create(dto) {
        const entity = await this.prisma.livery.create({
            data: dto,
        });
        return entity;
    }
    async update(Id, dto) {
        const entity = await this.prisma.livery.update({
            where: { Id: Id },
            data: dto,
        });
        return entity;
    }
    async delete(Id) {
        const entity = await this.prisma.livery.delete({
            where: { Id: Id },
        });
        return entity;
    }
    async LiveryImage_findMany(query) {
        const entities = await this.prisma.liveryImage.findMany(query);
        return entities;
    }
    async LiveryImage_findOneById(Id, query) {
        const _query = {
            where: {
                Id: Id,
            },
            ...query,
        };
        const entity = await this.prisma.liveryImage.findUnique(_query);
        return entity;
    }
    async LiveryImage_create(dto) {
        const entity = await this.prisma.liveryImage.create({
            data: dto,
        });
        return entity;
    }
    async LiveryImage_update(Id, dto) {
        const entity = await this.prisma.liveryImage.update({
            where: { Id: Id },
            data: dto,
        });
        return entity;
    }
    async LiveryFile_findMany(query) {
        const entities = await this.prisma.liveryFile.findMany(query);
        return entities;
    }
    async LiveryFile_findOneById(Id, query) {
        const _query = {
            where: {
                Id: Id,
            },
            ...query,
        };
        const entity = await this.prisma.liveryFile.findUnique(_query);
        return entity;
    }
    async LiveryFile_create(dto) {
        const entity = await this.prisma.liveryFile.create({
            data: dto,
        });
        return entity;
    }
    async LiveryFile_update(Id, dto) {
        const entity = await this.prisma.liveryFile.update({
            where: { Id: Id },
            data: dto,
        });
        return entity;
    }
};
exports.LiveryService = LiveryService;
exports.LiveryService = LiveryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], LiveryService);
//# sourceMappingURL=livery.service.js.map