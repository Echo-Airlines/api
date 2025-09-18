"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobsModule = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const jobs_service_1 = require("./jobs.service");
const job_scheduler_service_1 = require("./job-scheduler.service");
const on_air_module_1 = require("../on-air/on-air.module");
const virtual_airline_module_1 = require("../virtual-airline/virtual-airline.module");
const app_config_module_1 = require("../app-config/app-config.module");
const database_module_1 = require("../database/database.module");
const jobs_controller_1 = require("./jobs.controller");
const aircraft_module_1 = require("../aircraft/aircraft.module");
const airport_module_1 = require("../airport/airport.module");
const flight_module_1 = require("../flight/flight.module");
const company_module_1 = require("../company/company.module");
const member_module_1 = require("../member/member.module");
let JobsModule = class JobsModule {
};
exports.JobsModule = JobsModule;
exports.JobsModule = JobsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            schedule_1.ScheduleModule.forRoot(),
            on_air_module_1.OnAirModule,
            virtual_airline_module_1.VirtualAirlineModule,
            app_config_module_1.AppConfigModule,
            database_module_1.DatabaseModule,
            aircraft_module_1.AircraftModule,
            airport_module_1.AirportModule,
            flight_module_1.FlightModule,
            company_module_1.CompanyModule,
            member_module_1.MemberModule,
        ],
        controllers: [jobs_controller_1.JobsController],
        providers: [jobs_service_1.JobsService, job_scheduler_service_1.JobSchedulerService],
        exports: [jobs_service_1.JobsService, job_scheduler_service_1.JobSchedulerService],
    })
], JobsModule);
//# sourceMappingURL=jobs.module.js.map