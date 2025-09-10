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
exports.AdminNotamService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const prisma_1 = require("../../../prisma/generated/prisma/index.js");
let AdminNotamService = class AdminNotamService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto, query) {
        const entity = await this.prisma.notam.create({
            data: dto,
            ...query,
        });
        return entity;
    }
    async findMany(query) {
        const entities = await this.prisma.notam.findMany(query);
        return entities;
    }
    async findOne(query) {
        const entity = await this.prisma.notam.findUnique(query);
        return entity;
    }
    async findAllActive(query) {
        const entities = await this.findMany({
            where: {
                Status: prisma_1.NOTAMStatus.ACTIVE,
            },
            ...query,
        });
        return entities;
    }
    async findOneById(Id, query) {
        const entity = await this.findOne({
            where: {
                Id,
            },
            ...query,
        });
        return entity;
    }
    async updateById(Id, data) {
        const entity = await this.update({
            where: { Id },
            data,
        });
        return entity;
    }
    async update(query) {
        const entity = await this.prisma.notam.update(query);
        return entity;
    }
    async remove(query) {
        const entity = await this.prisma.notam.delete(query);
        return entity;
    }
    async removeById(Id) {
        const entity = await this.remove({
            where: { Id },
        });
        return entity;
    }
};
exports.AdminNotamService = AdminNotamService;
exports.AdminNotamService = AdminNotamService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AdminNotamService);
//# sourceMappingURL=admin-notam.service.js.map