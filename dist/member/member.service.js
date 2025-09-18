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
exports.MemberService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
let MemberService = class MemberService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAllActive() {
        const result = await this.prisma.member.findMany({
            where: {
                IsActive: true,
            },
        });
        return result;
    }
    async findByCompanyId(companyId) {
        return this.prisma.member.findFirst({
            where: {
                CompanyId: companyId,
            },
            include: {
                User: {
                    select: {
                        Id: true,
                        FirstName: true,
                        LastName: true,
                        Username: true,
                        PrivacySettings: true,
                    },
                },
                Company: true,
            },
        });
    }
    async findById(id, query) {
        const entity = await this.prisma.member.findUnique({
            where: {
                Id: id,
            },
            ...query,
        });
        return entity;
    }
    async findByUserId(userId) {
        return this.prisma.member.findFirst({
            where: {
                UserId: userId,
            },
            include: {
                User: true,
                Company: true,
            },
        });
    }
    async associateMemberToUser(memberId, userId) {
        const result = await this.prisma.member.update({
            where: {
                Id: memberId,
            },
            data: {
                User: {
                    connect: {
                        Id: userId,
                    },
                },
            },
        });
        return result;
    }
    async create(dto) {
        const result = await this.prisma.member.create({
            data: dto,
        });
        return result;
    }
    async update(Id, dto) {
        const result = await this.prisma.member.update({
            where: {
                Id
            },
            data: dto,
        });
        return result;
    }
};
exports.MemberService = MemberService;
exports.MemberService = MemberService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], MemberService);
//# sourceMappingURL=member.service.js.map