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
var AppModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const prisma_module_1 = require("./prisma/prisma.module");
const virtual_airline_module_1 = require("./virtual-airline/virtual-airline.module");
const on_air_module_1 = require("./on-air/on-air.module");
const app_config_module_1 = require("./app-config/app-config.module");
const jobs_module_1 = require("./jobs/jobs.module");
const config_1 = require("@nestjs/config");
const logger_service_1 = require("./logger/logger.service");
const logger_module_1 = require("./logger/logger.module");
const user_module_1 = require("./user/user.module");
const auth_module_1 = require("./auth/auth.module");
const admin_module_1 = require("./admin/admin.module");
const member_module_1 = require("./member/member.module");
const aircraft_module_1 = require("./aircraft/aircraft.module");
const airport_module_1 = require("./airport/airport.module");
const flight_module_1 = require("./flight/flight.module");
const discord_module_1 = require("./discord/discord.module");
const listener_module_1 = require("./listener/listener.module");
const fshub_module_1 = require("./fshub/fshub.module");
const notifier_module_1 = require("./notifier/notifier.module");
const company_module_1 = require("./company/company.module");
const livery_module_1 = require("./livery/livery.module");
const websocket_module_1 = require("./websocket/websocket.module");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const platform_express_1 = require("@nestjs/platform-express");
const email_module_1 = require("./email/email.module");
const handlebars_adapter_1 = require("@nestjs-modules/mailer/dist/adapters/handlebars.adapter");
const mailer_1 = require("@nestjs-modules/mailer");
const notam_module_1 = require("./notam/notam.module");
const emailTemplatesDirectory = (0, path_1.join)(__dirname, 'email/templates');
console.log('emailTemplatesDirectory:', emailTemplatesDirectory);
let AppModule = AppModule_1 = class AppModule {
    logger = new logger_service_1.LoggerService(AppModule_1.name);
    constructor() { }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = AppModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: ['.env', '.env.local'],
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..'),
                serveStaticOptions: {
                    fallthrough: false,
                },
            }),
            platform_express_1.MulterModule.registerAsync({
                useFactory: () => ({
                    dest: (0, path_1.join)(__dirname, '..', 'files'),
                }),
                inject: [config_1.ConfigService],
            }),
            mailer_1.MailerModule.forRoot({
                transport: {
                    host: process.env.MAIL_HOST,
                    port: process.env.MAIL_PORT ? parseInt(process.env.MAIL_PORT) : 587,
                    auth: {
                        user: process.env.MAIL_USERNAME,
                        pass: process.env.MAIL_PASSWORD,
                    },
                },
                defaults: {
                    from: process.env.MAIL_FROM || '"noreply" <noreply@azsupras.club>',
                },
                template: {
                    dir: emailTemplatesDirectory,
                    adapter: new handlebars_adapter_1.HandlebarsAdapter(),
                    options: {
                        strict: false,
                    },
                },
            }),
            prisma_module_1.PrismaModule,
            on_air_module_1.OnAirModule,
            virtual_airline_module_1.VirtualAirlineModule,
            app_config_module_1.AppConfigModule,
            jobs_module_1.JobsModule,
            logger_module_1.LoggerModule,
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            admin_module_1.AdminModule,
            member_module_1.MemberModule,
            aircraft_module_1.AircraftModule,
            airport_module_1.AirportModule,
            flight_module_1.FlightModule,
            discord_module_1.DiscordModule,
            listener_module_1.ListenerModule,
            fshub_module_1.FSHubModule,
            notifier_module_1.NotifierModule,
            company_module_1.CompanyModule,
            livery_module_1.LiveryModule,
            websocket_module_1.WebsocketModule,
            email_module_1.EmailModule,
            notam_module_1.NotamModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    }),
    __metadata("design:paramtypes", [])
], AppModule);
//# sourceMappingURL=app.module.js.map