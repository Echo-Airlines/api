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
var VirtualAirlineController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VirtualAirlineController = void 0;
const common_1 = require("@nestjs/common");
const virtual_airline_service_1 = require("./virtual-airline.service");
const prisma_1 = require("../../prisma/generated/prisma/index.js");
const app_config_service_1 = require("../app-config/app-config.service");
const public_member_dto_1 = require("./dto/public-member.dto");
const logger_service_1 = require("../logger/logger.service");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const is_manager_guard_1 = require("../auth/guards/is-manager.guard");
const UpdateVirtualAirline_dto_1 = require("./dto/UpdateVirtualAirline.dto");
let VirtualAirlineController = VirtualAirlineController_1 = class VirtualAirlineController {
    virtualAirlineService;
    appConfigService;
    logger = new logger_service_1.LoggerService(VirtualAirlineController_1.name);
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
    async getPrimaryVirtualAirline() {
        const result = await this.virtualAirlineService.getPrimaryVirtualAirline();
        return result;
    }
    async getPrimaryVirtualAirlineWithApiKey() {
        const result = await this.virtualAirlineService.getPrimaryVirtualAirlineWithApiKey();
        return result;
    }
    async getLeaderboard() {
        const result = await this.virtualAirlineService.getPrimaryLeaderboard()
            .then((members) => members.map((member) => new public_member_dto_1.PublicMemberDto(member)));
        return result;
    }
    async getPrimaryVirtualAirlineMembers() {
        this.logger.log('getPrimaryVirtualAirlineMembers');
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
    async getById(id) {
        const result = await this.virtualAirlineService.getVirtualAirlineById(id);
        if (!result) {
            throw new common_1.NotFoundException('Virtual airline not found');
        }
        return result;
    }
    async update(Id, body) {
        if (body.VAManagerDiscordWebhookId && body.VAManagerDiscordWebhookId.length <= 0) {
            body.VAManagerDiscordWebhookId = undefined;
        }
        const result = await this.virtualAirlineService.updateById(Id, body);
        return result;
    }
};
exports.VirtualAirlineController = VirtualAirlineController;
__decorate([
    (0, common_1.Get)('all'),
    __param(0, (0, common_1.Query)('worldSlug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VirtualAirlineController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VirtualAirlineController.prototype, "getPrimaryVirtualAirline", null);
__decorate([
    (0, common_1.Get)('with-api-key'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VirtualAirlineController.prototype, "getPrimaryVirtualAirlineWithApiKey", null);
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
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VirtualAirlineController.prototype, "getById", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_manager_guard_1.IsManagerGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateVirtualAirline_dto_1.UpdateVirtualAirlineDto]),
    __metadata("design:returntype", Promise)
], VirtualAirlineController.prototype, "update", null);
exports.VirtualAirlineController = VirtualAirlineController = VirtualAirlineController_1 = __decorate([
    (0, common_1.Controller)('va'),
    __metadata("design:paramtypes", [virtual_airline_service_1.VirtualAirlineService, app_config_service_1.AppConfigService])
], VirtualAirlineController);
//# sourceMappingURL=virtual-airline.controller.js.map