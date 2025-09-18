"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminAppConfigModule = void 0;
const database_module_1 = require("../../database/database.module");
const admin_app_config_service_1 = require("./admin-app-config.service");
const admin_app_config_controller_1 = require("./admin-app-config.controller");
const common_1 = require("@nestjs/common");
let AdminAppConfigModule = class AdminAppConfigModule {
};
exports.AdminAppConfigModule = AdminAppConfigModule;
exports.AdminAppConfigModule = AdminAppConfigModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        exports: [admin_app_config_service_1.AdminAppConfigService],
        providers: [admin_app_config_service_1.AdminAppConfigService],
        controllers: [admin_app_config_controller_1.AdminAppConfigController],
    })
], AdminAppConfigModule);
//# sourceMappingURL=admin-app-config.module.js.map