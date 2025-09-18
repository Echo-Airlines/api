"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminDiscordModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../../database/database.module");
const admin_discord_controller_1 = require("./admin-discord.controller");
const admin_discord_service_1 = require("./admin-discord.service");
const discord_service_1 = require("../../discord/discord.service");
let AdminDiscordModule = class AdminDiscordModule {
};
exports.AdminDiscordModule = AdminDiscordModule;
exports.AdminDiscordModule = AdminDiscordModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        providers: [admin_discord_service_1.AdminDiscordService, discord_service_1.DiscordService],
        exports: [admin_discord_service_1.AdminDiscordService],
        controllers: [admin_discord_controller_1.AdminDiscordController],
    })
], AdminDiscordModule);
//# sourceMappingURL=admin-discord.module.js.map