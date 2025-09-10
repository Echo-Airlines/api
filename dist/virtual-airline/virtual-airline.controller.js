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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VirtualAirlineController = void 0;
const common_1 = require("@nestjs/common");
const virtual_airline_service_1 = require("./virtual-airline.service");
const prisma_1 = require("../../prisma/generated/prisma/index.js");
const app_config_service_1 = require("../app-config/app-config.service");
const public_member_dto_1 = require("./dto/public-member.dto");
let VirtualAirlineController = class VirtualAirlineController {
    virtualAirlineService;
    appConfigService;
    constructor(virtualAirlineService, appConfigService) {
        this.virtualAirlineService = virtualAirlineService;
        this.appConfigService = appConfigService;
    }
    async getAll(worldSlug) {
        let query = {
            include: {
                World: true,
                Members: {
                    include: {
                        Company: true,
                    }
                },
            },
            orderBy: {
                UpdatedAt: 'desc'
            }
        };
        if (worldSlug) {
            query = {
                where: {
                    World: {
                        Slug: worldSlug
                    }
                }
            };
        }
        const result = await this.virtualAirlineService.findAll(query);
        return result;
    }
    async getLeaderboard() {
        const result = await this.virtualAirlineService.getPrimaryLeaderboard()
            .then((members) => members.map((member) => new public_member_dto_1.PublicMemberDto(member)));
        return result;
    }
    async getPrimaryVirtualAirlineMembers() {
        const members = await this.virtualAirlineService.getPrimaryVirtualAirlineMembers();
        const result = members.map((member) => new public_member_dto_1.PublicMemberDto(member));
        return result;
    }
    async getVARoles() {
        const result = await this.virtualAirlineService.getVARoles();
        return result;
    }
    async create(body) {
        const result = await this.virtualAirlineService.create(body);
        await this.appConfigService.setVirtualAirlineInitiated(true);
        return result;
    }
};
exports.VirtualAirlineController = VirtualAirlineController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('worldSlug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VirtualAirlineController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('leaderboard'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VirtualAirlineController.prototype, "getLeaderboard", null);
__decorate([
    (0, common_1.Get)('members'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VirtualAirlineController.prototype, "getPrimaryVirtualAirlineMembers", null);
__decorate([
    (0, common_1.Get)('roles'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VirtualAirlineController.prototype, "getVARoles", null);
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], VirtualAirlineController.prototype, "create", null);
exports.VirtualAirlineController = VirtualAirlineController = __decorate([
    (0, common_1.Controller)('va'),
    __metadata("design:paramtypes", [virtual_airline_service_1.VirtualAirlineService, app_config_service_1.AppConfigService])
], VirtualAirlineController);
//# sourceMappingURL=virtual-airline.controller.js.map