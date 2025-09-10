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
exports.AdminUserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let AdminUserService = class AdminUserService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(query) {
        const entities = await this.prisma.user.findMany(query);
        return entities;
    }
    async findOne(query) {
        const entity = await this.prisma.user.findUnique(query);
        return entity;
    }
    async create(data, query) {
        const _query = { data, ...query };
        const entity = await this.prisma.user.create(_query);
        return entity;
    }
    async update(Id, data, query) {
        const _query = { where: { Id }, data, ...query };
        const entity = await this.prisma.user.update(_query);
        return entity;
    }
    async deleteOneById(Id) {
        const entity = await this.prisma.$transaction(async (tx) => {
            await tx.userPrivacySettings.deleteMany({
                where: { UserId: Id }
            });
            await tx.member.updateMany({
                where: { UserId: Id },
                data: { UserId: null }
            });
            return await tx.user.delete({ where: { Id } });
        });
        return entity;
    }
    async assignRoleToUser(UserId, roleSlug) {
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
    async unassignRoleFromUser(UserId, roleSlug) {
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
    async getRoleBySlug(slug) {
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
    async findManyInviteCodes(query) {
        const entities = await this.prisma.inviteCode.findMany(query);
        return entities;
    }
    async findOneInviteCode(query) {
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
    async createInviteCodes(quantity) {
        const entities = [];
        for (let i = 0; i < quantity; i++) {
            const entity = await this.prisma.inviteCode.create({
                data: {
                    Code: crypto.randomUUID()
                }
            });
            entities.push(entity);
        }
        return entities;
    }
    async updateInviteCode(Id, data) {
        const entity = await this.prisma.inviteCode.update({ where: { Id }, data });
        return entity;
    }
    async deleteInviteCode(Id) {
        const entity = await this.prisma.inviteCode.delete({ where: { Id } });
        return entity;
    }
    async linkRoleToVirtualAirlineRole(Id, virtualAirlineRoleId) {
        const entity = await this.prisma.role.update({
            where: { Id },
            data: {
                VirtualAirlineRoleId: virtualAirlineRoleId
            }
        });
        return entity;
    }
};
exports.AdminUserService = AdminUserService;
exports.AdminUserService = AdminUserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AdminUserService);
//# sourceMappingURL=admin-user.service.js.map