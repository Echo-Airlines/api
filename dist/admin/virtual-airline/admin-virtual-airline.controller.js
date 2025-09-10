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
exports.AdminVirtualAirlineController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
const is_admin_guard_1 = require("../../auth/is-admin.guard");
const admin_virtual_airline_service_1 = require("./admin-virtual-airline.service");
let AdminVirtualAirlineController = class AdminVirtualAirlineController {
    virtualAirlineService;
    constructor(virtualAirlineService) {
        this.virtualAirlineService = virtualAirlineService;
    }
    async getAll() {
        const data = await this.virtualAirlineService.findAll();
        return data;
    }
    async getVARoles() {
        const data = await this.virtualAirlineService.getPrimaryVARoles();
        return data;
    }
    async getUnlinkedVARoles() {
        const data = await this.virtualAirlineService.getUnlinkedVARoles();
        return data;
    }
};
exports.AdminVirtualAirlineController = AdminVirtualAirlineController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminVirtualAirlineController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('roles'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminVirtualAirlineController.prototype, "getVARoles", null);
__decorate([
    (0, common_1.Get)('roles/unlinked'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminVirtualAirlineController.prototype, "getUnlinkedVARoles", null);
exports.AdminVirtualAirlineController = AdminVirtualAirlineController = __decorate([
    (0, common_1.Controller)(['admin/va', 'admin/vas']),
    __metadata("design:paramtypes", [admin_virtual_airline_service_1.AdminVirtualAirlineService])
], AdminVirtualAirlineController);
//# sourceMappingURL=admin-virtual-airline.controller.js.map