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
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("./database/database.service");
let AppService = class AppService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getHealth() {
        const uptimeInSeconds = process.uptime();
        const uptime = `${Math.floor(uptimeInSeconds / 3600)}h ${Math.floor((uptimeInSeconds % 3600) / 60)}m ${Math.floor(uptimeInSeconds % 60)}s`;
        const memoryUsage = process.memoryUsage();
        const memoryUsageInMB = {
            rss: Math.round(memoryUsage.rss / 1024 / 1024),
            heapTotal: Math.round(memoryUsage.heapTotal / 1024 / 1024),
            heapUsed: Math.round(memoryUsage.heapUsed / 1024 / 1024),
        };
        const cpuUsage = process.cpuUsage();
        const cpuUsageInPercent = {
            total: Math.round((cpuUsage.user + cpuUsage.system) / 1000),
            user: Math.round((cpuUsage.user / 1000) * 100),
            system: Math.round((cpuUsage.system / 1000) * 100),
        };
        const databaseStats = await this.prisma.$metrics.json();
        return {
            status: 'healthy',
            timestamp: new Date().toISOString(),
            uptime,
            environment: process.env.NODE_ENV || 'development',
            version: process.env.npm_package_version || '1.0.0',
            memoryUsage: memoryUsageInMB,
            cpuUsage: cpuUsageInPercent,
            databaseStats,
        };
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], AppService);
//# sourceMappingURL=app.service.js.map