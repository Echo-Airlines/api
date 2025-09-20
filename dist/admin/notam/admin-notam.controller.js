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
exports.AdminNotamController = void 0;
const common_1 = require("@nestjs/common");
const admin_notam_service_1 = require("./admin-notam.service");
const create_notam_dto_1 = require("./dto/create-notam.dto");
const update_notam_dto_1 = require("./dto/update-notam.dto");
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
const is_admin_guard_1 = require("../../auth/guards/is-admin.guard");
let AdminNotamController = class AdminNotamController {
    notamService;
    constructor(notamService) {
        this.notamService = notamService;
    }
    async findAllActive() {
        const result = await this.notamService.findAllActive();
        return result;
    }
    async findOne(id) {
        const result = await this.notamService.findOneById(id);
        return result;
    }
    async create(createNotamDto) {
        const result = await this.notamService.create(createNotamDto);
        return result;
    }
    async update(id, updateNotamDto) {
        const result = await this.notamService.updateById(id, updateNotamDto);
        return result;
    }
    async remove(id) {
        const result = await this.notamService.removeById(id);
        return result;
    }
};
exports.AdminNotamController = AdminNotamController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminNotamController.prototype, "findAllActive", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminNotamController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_notam_dto_1.CreateNotamDto]),
    __metadata("design:returntype", Promise)
], AdminNotamController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_notam_dto_1.UpdateNotamDto]),
    __metadata("design:returntype", Promise)
], AdminNotamController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminNotamController.prototype, "remove", null);
exports.AdminNotamController = AdminNotamController = __decorate([
    (0, common_1.Controller)(['admin/notam', 'admin/notams']),
    __metadata("design:paramtypes", [admin_notam_service_1.AdminNotamService])
], AdminNotamController);
//# sourceMappingURL=admin-notam.controller.js.map