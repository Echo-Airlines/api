"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnAirModule = void 0;
const common_1 = require("@nestjs/common");
const on_air_api_service_1 = require("./on-air-api.service");
const on_air_controller_1 = require("./on-air.controller");
const virtual_airline_module_1 = require("../virtual-airline/virtual-airline.module");
let OnAirModule = class OnAirModule {
};
exports.OnAirModule = OnAirModule;
exports.OnAirModule = OnAirModule = __decorate([
    (0, common_1.Module)({
        imports: [virtual_airline_module_1.VirtualAirlineModule],
        providers: [on_air_api_service_1.OnAirApiService,],
        exports: [on_air_api_service_1.OnAirApiService],
        controllers: [on_air_controller_1.OnAirController],
    })
], OnAirModule);
//# sourceMappingURL=on-air.module.js.map