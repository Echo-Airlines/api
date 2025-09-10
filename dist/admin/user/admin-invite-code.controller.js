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
exports.AdminInviteCodeController = void 0;
const common_1 = require("@nestjs/common");
const admin_user_service_1 = require("./admin-user.service");
const is_admin_guard_1 = require("../../auth/is-admin.guard");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
let AdminInviteCodeController = class AdminInviteCodeController {
    userService;
    constructor(userService) {
        this.userService = userService;
    }
    async getInviteCodes() {
        const data = await this.userService.findManyInviteCodes();
        return data;
    }
    async generateInviteCode(body) {
        let data = [];
        if (body.quantity && body.quantity > 1) {
            data = await this.userService.createInviteCodes(body.quantity);
        }
        else {
            const _data = await this.userService.createInviteCode();
            data = [_data];
        }
        return data;
    }
    async deleteInviteCode(Id) {
        const data = await this.userService.deleteInviteCode(Id);
        return data;
    }
};
exports.AdminInviteCodeController = AdminInviteCodeController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminInviteCodeController.prototype, "getInviteCodes", null);
__decorate([
    (0, common_1.Post)('generate'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminInviteCodeController.prototype, "generateInviteCode", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminInviteCodeController.prototype, "deleteInviteCode", null);
exports.AdminInviteCodeController = AdminInviteCodeController = __decorate([
    (0, common_1.Controller)(['admin/invite-code', 'admin/invite-codes']),
    __metadata("design:paramtypes", [admin_user_service_1.AdminUserService])
], AdminInviteCodeController);
//# sourceMappingURL=admin-invite-code.controller.js.map