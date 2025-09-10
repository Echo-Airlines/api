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
exports.OnAirController = void 0;
const common_1 = require("@nestjs/common");
const on_air_api_service_1 = require("./on-air-api.service");
let OnAirController = class OnAirController {
    onAirApiService;
    constructor(onAirApiService) {
        this.onAirApiService = onAirApiService;
    }
    async getVirtualAirlines() {
        try {
            const results = await this.onAirApiService.getVirtualAirline();
            if (!results) {
                throw new common_1.NotFoundException('Virtual airline not found');
            }
            return results;
        }
        catch (error) {
            throw new common_1.NotFoundException('Virtual airlines not found');
        }
    }
    async getVirtualAirlineMembers() {
        try {
            const results = await this.onAirApiService.getVirtualAirlineMembers();
            if (!results) {
                throw new common_1.NotFoundException('Virtual airline members not found');
            }
            return results;
        }
        catch (error) {
            throw new common_1.NotFoundException('Virtual airline members not found');
        }
    }
    async getVirtualAirlineById(id) {
        try {
            const results = await this.onAirApiService.getVirtualAirline(id);
            return results;
        }
        catch (error) {
            throw new common_1.NotFoundException('Virtual airline not found');
        }
    }
    async getVirtualAirlineMembersById(id) {
        try {
            const results = await this.onAirApiService.getVirtualAirlineMembers(id);
            return results;
        }
        catch (error) {
            throw new common_1.NotFoundException('Virtual airline members not found');
        }
    }
};
exports.OnAirController = OnAirController;
__decorate([
    (0, common_1.Get)('va'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OnAirController.prototype, "getVirtualAirlines", null);
__decorate([
    (0, common_1.Get)('va/members'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OnAirController.prototype, "getVirtualAirlineMembers", null);
__decorate([
    (0, common_1.Get)('va/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OnAirController.prototype, "getVirtualAirlineById", null);
__decorate([
    (0, common_1.Get)('va/:id/members'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OnAirController.prototype, "getVirtualAirlineMembersById", null);
exports.OnAirController = OnAirController = __decorate([
    (0, common_1.Controller)(['on-air', 'oa']),
    __metadata("design:paramtypes", [on_air_api_service_1.OnAirApiService])
], OnAirController);
//# sourceMappingURL=on-air.controller.js.map