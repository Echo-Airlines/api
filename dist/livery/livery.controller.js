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
const livery_service_1 = require("./livery.service");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const is_admin_guard_1 = require("../auth/guards/is-admin.guard");
const platform_express_1 = require("@nestjs/platform-express");
const path = require("path");
const fs = require("fs");
let LiveryController = class LiveryController {
    liveryService;
    constructor(liveryService) {
        this.liveryService = liveryService;
    }
    async getAll() {
        const result = await this.liveryService.findAll();
        return result;
    }
    async getById(id) {
        const result = await this.liveryService.findById(id);
        if (!result) {
            throw new common_1.NotFoundException('Livery not found');
        }
        return result;
    }
    async uploadFile(id, name, file) {
        const result = file;
        let livery = await this.liveryService.findById(id);
        if (!livery) {
            throw new common_1.NotFoundException('Livery not found');
        }
        const fileName = `${name}.${file.mimetype.split('/')[1]}`;
        const dirName = path.resolve(`${__dirname}/../../files/liveries`);
        const liveryDir = path.join(dirName, id);
        const filePath = path.join(liveryDir, fileName);
        if (!fs.existsSync(dirName)) {
            fs.mkdirSync(dirName, { recursive: true });
        }
        if (!fs.existsSync(liveryDir)) {
            fs.mkdirSync(liveryDir, { recursive: true });
        }
        fs.writeFileSync(filePath, file.buffer);
        const updatedLivery = {
            Id: livery.Id,
            [name]: fileName,
            UpdatedAt: new Date()
        };
        try {
            livery = await this.liveryService.update(id, updatedLivery);
        }
        catch (error) {
            console.error(error);
            throw new common_1.InternalServerErrorException('Failed to update livery');
        }
        return livery;
    }
};
exports.LiveryController = LiveryController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LiveryController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LiveryController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)(':id/upload/:name'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('name')),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], LiveryController.prototype, "uploadFile", null);
exports.LiveryController = LiveryController = __decorate([
    (0, common_1.Controller)(['livery', 'liveries']),
    __metadata("design:paramtypes", [livery_service_1.LiveryService])
], LiveryController);
//# sourceMappingURL=livery.controller.js.map