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
var OnAirApiService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnAirApiService = void 0;
const common_1 = require("@nestjs/common");
const onair_api_1 = require("onair-api");
const virtual_airline_service_1 = require("../virtual-airline/virtual-airline.service");
let OnAirApiService = OnAirApiService_1 = class OnAirApiService {
    virtualAirlineService;
    logger = new common_1.Logger(OnAirApiService_1.name);
    onAirApi = null;
    config = null;
    constructor(virtualAirlineService) {
        this.virtualAirlineService = virtualAirlineService;
        this.initialize();
    }
    async onModuleInit() {
        await this.initialize();
    }
    async initialize() {
        const virtualAirline = await this.virtualAirlineService.getPrimaryVirtualAirlineWithApiKey();
        if (!virtualAirline) {
            this.logger.warn('Missing required virtual airline configuration. Please create a virtual airline in the admin panel.');
            return;
        }
        this.onAirApi = new onair_api_1.default({
            apiKey: virtualAirline.ApiKey,
            companyId: virtualAirline.Id,
            vaId: virtualAirline.Id
        });
    }
    async getCompany(companyId) {
        if (!this.onAirApi) {
            this.logger.warn('OnAir API not initialized. Please set the config in the admin panel.');
            return;
        }
        const result = await this.onAirApi.getCompany(companyId);
        return result;
    }
    async getVirtualAirline(virtualAirlineId) {
        if (!this.onAirApi) {
            this.logger.warn('OnAir API not initialized. Please set the config in the admin panel.');
            return null;
        }
        const result = await this.onAirApi.getVirtualAirline(virtualAirlineId);
        return result;
    }
    async getVirtualAirlineMembers(virtualAirlineId) {
        if (!this.onAirApi) {
            this.logger.warn('OnAir API not initialized. Please set the config in the admin panel.');
            return null;
        }
        const result = await this.onAirApi.getVirtualAirlineMembers(virtualAirlineId);
        return result;
    }
    async getVirtualAirlineRoles(virtualAirlineId) {
        if (!this.onAirApi) {
            this.logger.warn('OnAir API not initialized. Please set the config in the admin panel.');
            return null;
        }
        const result = await this.onAirApi.getVirtualAirlineRoles(virtualAirlineId);
        return result;
    }
    async getVirtualAirlineFleet(virtualAirlineId) {
        if (!this.onAirApi) {
            this.logger.warn('OnAir API not initialized. Please set the config in the admin panel.');
            throw new Error('OnAir API not initialized. Please set the config in the admin panel.');
        }
        const result = await this.onAirApi.getVirtualAirlineFleet(virtualAirlineId);
        return result;
    }
    async getVirtualAirlineFlights(virtualAirlineId) {
        if (!this.onAirApi) {
            this.logger.warn('OnAir API not initialized. Please set the config in the admin panel.');
            throw new Error('OnAir API not initialized. Please set the config in the admin panel.');
        }
        const result = await this.onAirApi.getVirtualAirlineFlights(virtualAirlineId);
        return result;
    }
    async getAirportByICAO(icao) {
        if (!this.onAirApi) {
            this.logger.warn('OnAir API not initialized. Please set the config in the admin panel.');
            throw new Error('OnAir API not initialized. Please set the config in the admin panel.');
        }
        const result = await this.onAirApi.getAirport(icao);
        return result;
    }
    async getVirtualAirlineNotifications(virtualAirlineId) {
        if (!this.onAirApi) {
            this.logger.warn('OnAir API not initialized. Please set the config in the admin panel.');
            throw new Error('OnAir API not initialized. Please set the config in the admin panel.');
        }
        const result = await this.onAirApi.getVirtualAirlineNotifications(virtualAirlineId);
        return result;
    }
};
exports.OnAirApiService = OnAirApiService;
exports.OnAirApiService = OnAirApiService = OnAirApiService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [virtual_airline_service_1.VirtualAirlineService])
], OnAirApiService);
//# sourceMappingURL=on-air-api.service.js.map