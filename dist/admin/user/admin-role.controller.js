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
exports.AdminRoleController = void 0;
const common_1 = require("@nestjs/common");
const admin_user_service_1 = require("./admin-user.service");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
const is_admin_guard_1 = require("../../auth/is-admin.guard");
let AdminRoleController = class AdminRoleController {
    userService;
    constructor(userService) {
        this.userService = userService;
    }
    async getAll() {
        const data = await this.userService.findAllRoles();
        return data;
    }
    async getRoleBySlug(slug) {
        const data = await this.userService.getRoleBySlug(slug);
        return data;
    }
    async linkRoleToVirtualAirlineRole(id, body) {
        const data = await this.userService.linkRoleToVirtualAirlineRole(id, body.virtualAirlineRoleId);
        return data;
    }
};
exports.AdminRoleController = AdminRoleController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminRoleController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':slug'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminRoleController.prototype, "getRoleBySlug", null);
__decorate([
    (0, common_1.Put)(':id/link'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AdminRoleController.prototype, "linkRoleToVirtualAirlineRole", null);
exports.AdminRoleController = AdminRoleController = __decorate([
    (0, common_1.Controller)(['admin/role', 'admin/roles', 'admin/r']),
    __metadata("design:paramtypes", [admin_user_service_1.AdminUserService])
], AdminRoleController);
//# sourceMappingURL=admin-role.controller.js.map