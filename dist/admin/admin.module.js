"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminModule = void 0;
const common_1 = require("@nestjs/common");
const admin_user_module_1 = require("./user/admin-user.module");
const admin_virtual_airline_module_1 = require("./virtual-airline/admin-virtual-airline.module");
const admin_discord_module_1 = require("./discord/admin-discord.module");
const admin_listener_module_1 = require("./listener/admin-listener.module");
const admin_app_config_module_1 = require("./app-config/admin-app-config.module");
let AdminModule = class AdminModule {
};
exports.AdminModule = AdminModule;
exports.AdminModule = AdminModule = __decorate([
    (0, common_1.Module)({
        imports: [admin_user_module_1.AdminUserModule, admin_virtual_airline_module_1.AdminVirtualAirlineModule, admin_discord_module_1.AdminDiscordModule, admin_listener_module_1.AdminListenerModule, admin_app_config_module_1.AdminAppConfigModule],
        providers: [],
        exports: [],
        controllers: [],
    })
], AdminModule);
//# sourceMappingURL=admin.module.js.map