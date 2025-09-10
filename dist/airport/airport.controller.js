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
exports.AirportController = void 0;
const common_1 = require("@nestjs/common");
const airport_service_1 = require("./airport.service");
const on_air_api_service_1 = require("../on-air/on-air-api.service");
const prisma_1 = require("../../prisma/generated/prisma/index.js");
const is_member_guard_1 = require("../auth/is-member.guard");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let AirportController = class AirportController {
    airportService;
    onAirApiService;
    constructor(airportService, onAirApiService) {
        this.airportService = airportService;
        this.onAirApiService = onAirApiService;
    }
    async getAllRegisteredAirports() {
        const airports = await this.airportService.findAll();
        return airports;
    }
    async getAirportByICAO(icao) {
        let airport = await this.airportService.findByICAO(icao);
        if (!airport) {
            const onAirAirport = await this.onAirApiService.getAirportByICAO(icao);
            if (!onAirAirport) {
                throw new common_1.NotFoundException('Airport not found');
            }
            airport = {
                Id: onAirAirport.Id,
                ICAO: onAirAirport.ICAO,
                IATA: onAirAirport.IATA,
                Name: onAirAirport.Name,
                Size: onAirAirport.Size,
                City: onAirAirport.City,
                State: onAirAirport.State,
                CountryCode: onAirAirport.CountryCode,
                CountryName: onAirAirport.CountryName,
                CountryEmoji: this.airportService.determineCountryEmoji(onAirAirport.CountryCode),
                Latitude: new prisma_1.Prisma.Decimal(onAirAirport.Latitude),
                Longitude: new prisma_1.Prisma.Decimal(onAirAirport.Longitude),
                HomeWebSiteUrl: onAirAirport.HomeWebSiteUrl || null,
                WikiUrl: onAirAirport.WikiUrl || null,
                Description: onAirAirport.Description || null,
                CreatedAt: new Date(),
                UpdatedAt: new Date()
            };
            airport = await this.airportService.upsert(airport);
        }
        return airport;
    }
};
exports.AirportController = AirportController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_member_guard_1.IsMemberGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AirportController.prototype, "getAllRegisteredAirports", null);
__decorate([
    (0, common_1.Get)('lookup/:icao'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_member_guard_1.IsMemberGuard),
    __param(0, (0, common_1.Param)('icao')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AirportController.prototype, "getAirportByICAO", null);
exports.AirportController = AirportController = __decorate([
    (0, common_1.Controller)(['airport', 'airports']),
    __metadata("design:paramtypes", [airport_service_1.AirportService, on_air_api_service_1.OnAirApiService])
], AirportController);
//# sourceMappingURL=airport.controller.js.map