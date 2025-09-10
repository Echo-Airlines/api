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
exports.LoggerService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let LoggerService = class LoggerService extends common_1.ConsoleLogger {
    configService = new config_1.ConfigService();
    constructor(context, options) {
        super(context, {
            ...options,
        });
        const logLevels = this.configService.get('LOG_LEVELS')?.split(',') || ['log', 'error', 'warn', 'debug', 'verbose', 'fatal'];
        if (!this.options) {
            this.options = {};
        }
        this.options.logLevels = logLevels;
    }
    setLogLevels(levels) {
        this.options.logLevels = levels;
    }
    printStartupBanner(apiUrl, adminUser, adminPassword) {
        const padString = (str, length) => str.padEnd(length, ' ');
        const bannerWidth = 60;
        const borderLine = '#'.repeat(bannerWidth);
        const dashLine = '-'.repeat(bannerWidth - 4);
        console.log('');
        console.log(borderLine);
        console.log(`#${' '.repeat(bannerWidth - 2)}#`);
        console.log(`#         ${padString('ECHO Airlines API Started Successfully', bannerWidth - 12)} #`);
        console.log(`# ${dashLine} #`);
        console.log(`#${' '.repeat(bannerWidth - 2)}#`);
        console.log(`# ${padString(`API Base URL: ${apiUrl}`, bannerWidth - 4)} #`);
        if (adminUser && adminPassword) {
            console.log(`# ${padString(`Admin Username: ${adminUser}`, bannerWidth - 4)} #`);
            console.log(`# ${padString(`Admin Password: ${adminPassword}`, bannerWidth - 4)} #`);
        }
        console.log(`#${' '.repeat(bannerWidth - 2)}#`);
        console.log(borderLine);
        console.log('');
    }
};
exports.LoggerService = LoggerService;
exports.LoggerService = LoggerService = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.TRANSIENT }),
    __metadata("design:paramtypes", [String, Object])
], LoggerService);
//# sourceMappingURL=logger.service.js.map