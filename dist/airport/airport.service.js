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
exports.AirportService = void 0;
const common_1 = require("@nestjs/common");
const on_air_api_service_1 = require("../on-air/on-air-api.service");
const database_service_1 = require("../database/database.service");
const countries_1 = require("./countries");
let AirportService = class AirportService {
    prisma;
    onAirApiService;
    constructor(prisma, onAirApiService) {
        this.prisma = prisma;
        this.onAirApiService = onAirApiService;
    }
    async findAll(include) {
        const entities = await this.prisma.airport.findMany({
            include: include,
        });
        return entities;
    }
    async findById(id, include) {
        const entity = await this.prisma.airport.findUnique({
            where: {
                Id: id,
            },
            include: include,
        });
        return entity;
    }
    async findByICAO(ICAO, include) {
        const entity = await this.prisma.airport.findUnique({
            where: {
                ICAO: ICAO,
            },
            include: include,
        });
        return entity;
    }
    async findByIATA(IATA, include) {
        const entity = await this.prisma.airport.findUnique({
            where: {
                IATA: IATA,
            },
            include: include,
        });
        return entity;
    }
    async create(dto, include) {
        const entity = await this.prisma.airport.create({
            data: dto,
            include: include,
        });
        return entity;
    }
    async upsert(dto, include) {
        const entity = await this.prisma.airport.upsert({
            where: {
                ICAO: dto.ICAO,
            },
            create: dto,
            update: dto,
            include: include,
        });
        return entity;
    }
    async lookupByICAO(ICAO, include) {
        let entity = await this.prisma.airport.findUnique({
            where: {
                ICAO: ICAO,
            },
            include: include,
        });
        if (!entity) {
            const onAirAirport = await this.onAirApiService.getAirportByICAO(ICAO);
            if (!onAirAirport) {
                return null;
            }
            entity = await this.create({
                Id: onAirAirport.Id,
                ICAO: onAirAirport.ICAO,
                IATA: onAirAirport.IATA,
                Name: onAirAirport.Name,
                Size: onAirAirport.Size,
                City: onAirAirport.City,
                State: onAirAirport.State,
                CountryCode: onAirAirport.CountryCode,
                CountryName: onAirAirport.CountryName,
                Latitude: onAirAirport.Latitude,
                Longitude: onAirAirport.Longitude,
                HomeWebSiteUrl: onAirAirport.HomeWebSiteUrl,
                WikiUrl: onAirAirport.WikiUrl,
                Description: onAirAirport.Description,
            }, include);
        }
        return entity;
    }
    determineCountryEmoji(countryCode) {
        const countryEmoji = countries_1.default[countryCode]?.emoji;
        return countryEmoji;
    }
};
exports.AirportService = AirportService;
exports.AirportService = AirportService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService, on_air_api_service_1.OnAirApiService])
], AirportService);
//# sourceMappingURL=airport.service.js.map