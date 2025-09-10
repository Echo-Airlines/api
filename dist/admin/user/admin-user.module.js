"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUserModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("../../prisma/prisma.module");
const admin_user_service_1 = require("./admin-user.service");
const admin_user_controller_1 = require("./admin-user.controller");
const admin_role_controller_1 = require("./admin-role.controller");
const admin_invite_code_controller_1 = require("./admin-invite-code.controller");
const hash_module_1 = require("../../hash/hash.module");
const email_module_1 = require("../../email/email.module");
const email_service_1 = require("../../email/email.service");
let AdminUserModule = class AdminUserModule {
};
exports.AdminUserModule = AdminUserModule;
exports.AdminUserModule = AdminUserModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, hash_module_1.HashModule, email_module_1.EmailModule],
        providers: [admin_user_service_1.AdminUserService, email_service_1.EmailService],
        exports: [admin_user_service_1.AdminUserService],
        controllers: [admin_user_controller_1.AdminUserController, admin_role_controller_1.AdminRoleController, admin_invite_code_controller_1.AdminInviteCodeController],
    })
], AdminUserModule);
//# sourceMappingURL=admin-user.module.js.map