"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VirtualAirlineModule = void 0;
const common_1 = require("@nestjs/common");
const virtual_airline_service_1 = require("./virtual-airline.service");
const database_module_1 = require("../database/database.module");
const virtual_airline_controller_1 = require("./virtual-airline.controller");
const app_config_module_1 = require("../app-config/app-config.module");
let VirtualAirlineModule = class VirtualAirlineModule {
};
exports.VirtualAirlineModule = VirtualAirlineModule;
exports.VirtualAirlineModule = VirtualAirlineModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, app_config_module_1.AppConfigModule],
        providers: [virtual_airline_service_1.VirtualAirlineService],
        controllers: [virtual_airline_controller_1.VirtualAirlineController],
        exports: [virtual_airline_service_1.VirtualAirlineService],
    })
], VirtualAirlineModule);
//# sourceMappingURL=virtual-airline.module.js.map