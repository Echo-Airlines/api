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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FSHubService = void 0;
const common_1 = require("@nestjs/common");
const app_config_service_1 = require("../app-config/app-config.service");
const fshub_api_1 = require("fshub-api");
let FSHubService = class FSHubService {
    appConfigService;
    fshubApi;
    constructor(appConfigService) {
        this.appConfigService = appConfigService;
    }
    async initializeFSHubApi() {
        const appConfig = await this.appConfigService.getLatest();
        if (!appConfig) {
            throw new Error('No app config found. Please ensure the app config is set.');
        }
        if (!appConfig.FSHubApiKey || appConfig.FSHubApiKey === '') {
            throw new Error('FSHUB_API_KEY is not set. Please ensure the FSHUB_API_KEY is set.');
        }
        this.fshubApi = new fshub_api_1.default({ apiKey: appConfig.FSHubApiKey });
    }
    async getFlightScreenshotsById(id) {
        if (!id) {
            throw new Error('Flight ID is required');
        }
        if (!this.fshubApi) {
            await this.initializeFSHubApi();
        }
        if (!this.fshubApi) {
            throw new Error('FSHub API is not initialized');
        }
        const screenshots = await this.fshubApi.Flight_getFlightScreenshotsById(id);
        return screenshots;
    }
    async getFlightById(id) {
        if (!id) {
            throw new Error('Flight ID is required');
        }
        if (!this.fshubApi) {
            await this.initializeFSHubApi();
        }
        if (!this.fshubApi) {
            throw new Error('FSHub API is not initialized');
        }
        const flight = await this.fshubApi.Flight_getFlightById(id);
        return flight;
    }
};
exports.FSHubService = FSHubService;
exports.FSHubService = FSHubService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [app_config_service_1.AppConfigService])
], FSHubService);
//# sourceMappingURL=fshub.service.js.map