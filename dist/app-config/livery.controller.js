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
exports.LiveryController = void 0;
const common_1 = require("@nestjs/common");
const app_config_service_1 = require("./app-config.service");
const public_livery_dto_1 = require("./dto/public-livery.dto");
let LiveryController = class LiveryController {
    appConfigService;
    constructor(appConfigService) {
        this.appConfigService = appConfigService;
    }
    async findAllActive() {
        const liveries = await this.appConfigService.Livery_findAllActive();
        return liveries.map(livery => new public_livery_dto_1.PublicLiveryDto(livery));
    }
    async downloadLivery(id, res) {
        const livery = await this.appConfigService.Livery_findOneById(id);
        if (!livery) {
            throw new common_1.NotFoundException('Livery not found');
        }
        if (!livery.DownloadUrl) {
            throw new common_1.NotFoundException('Download URL not available for this livery');
        }
        await this.appConfigService.Livery_incrementDownloadCount(id);
        const downloadUrl = `${process.env.FILE_URL}${livery.DownloadUrl}`;
        console.log(downloadUrl);
        return res.redirect(downloadUrl);
    }
};
exports.LiveryController = LiveryController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LiveryController.prototype, "findAllActive", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], LiveryController.prototype, "downloadLivery", null);
exports.LiveryController = LiveryController = __decorate([
    (0, common_1.Controller)(['livery', 'liveries']),
    __metadata("design:paramtypes", [app_config_service_1.AppConfigService])
], LiveryController);
//# sourceMappingURL=livery.controller.js.map