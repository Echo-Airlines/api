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
exports.AppConfigController = void 0;
const common_1 = require("@nestjs/common");
const app_config_service_1 = require("./app-config.service");
const public_app_config_dto_1 = require("./dto/public-app-config.dto");
let AppConfigController = class AppConfigController {
    appConfigService;
    constructor(appConfigService) {
        this.appConfigService = appConfigService;
    }
    async findLatest(req) {
        const config = await this.appConfigService.getLatest();
        if (!config) {
            throw new common_1.NotFoundException('Config not found');
        }
        return new public_app_config_dto_1.PublicAppConfigDto(config);
    }
    async upsert(req, dto) {
        const config = await this.appConfigService.upsert(dto);
        return config;
    }
};
exports.AppConfigController = AppConfigController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppConfigController.prototype, "findLatest", null);
__decorate([
    (0, common_1.Put)('upsert'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppConfigController.prototype, "upsert", null);
exports.AppConfigController = AppConfigController = __decorate([
    (0, common_1.Controller)('config'),
    __metadata("design:paramtypes", [app_config_service_1.AppConfigService])
], AppConfigController);
//# sourceMappingURL=app-config.controller.js.map