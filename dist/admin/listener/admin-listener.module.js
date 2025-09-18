"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminListenerModule = void 0;
const common_1 = require("@nestjs/common");
const admin_listener_service_1 = require("./admin-listener.service");
const admin_listener_controller_1 = require("./admin-listener.controller");
const database_module_1 = require("../../database/database.module");
const listener_module_1 = require("../../listener/listener.module");
let AdminListenerModule = class AdminListenerModule {
};
exports.AdminListenerModule = AdminListenerModule;
exports.AdminListenerModule = AdminListenerModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, listener_module_1.ListenerModule],
        providers: [admin_listener_service_1.AdminListenerService],
        controllers: [admin_listener_controller_1.AdminListenerController],
        exports: [admin_listener_service_1.AdminListenerService],
    })
], AdminListenerModule);
//# sourceMappingURL=admin-listener.module.js.map