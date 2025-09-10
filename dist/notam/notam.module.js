"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotamModule = void 0;
const common_1 = require("@nestjs/common");
const notam_service_1 = require("./notam.service");
const notam_controller_1 = require("./notam.controller");
const prisma_module_1 = require("../prisma/prisma.module");
let NotamModule = class NotamModule {
};
exports.NotamModule = NotamModule;
exports.NotamModule = NotamModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [notam_controller_1.NotamController],
        providers: [notam_service_1.NotamService],
    })
], NotamModule);
//# sourceMappingURL=notam.module.js.map