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
var JobSchedulerService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobSchedulerService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const jobs_service_1 = require("./jobs.service");
const on_air_api_service_1 = require("../on-air/on-air-api.service");
const virtual_airline_service_1 = require("../virtual-airline/virtual-airline.service");
const app_config_service_1 = require("../app-config/app-config.service");
const cron = require("cron");
const executeVirtualAirlinesSync_1 = require("./schedules/executeVirtualAirlinesSync");
const prisma_1 = require("../../prisma/generated/prisma/index.js");
const config_1 = require("@nestjs/config");
const executeVirtualAirlinesMembersSync_1 = require("./schedules/executeVirtualAirlinesMembersSync");
const aircraft_service_1 = require("../aircraft/aircraft.service");
const executeVirtualAirlinesFleetSync_1 = require("./schedules/executeVirtualAirlinesFleetSync");
const airport_service_1 = require("../airport/airport.service");
const flight_service_1 = require("../flight/flight.service");
const executeVirtualAirlinesFlightsSync_1 = require("./schedules/executeVirtualAirlinesFlightsSync");
const company_service_1 = require("../company/company.service");
const member_service_1 = require("../member/member.service");
let JobSchedulerService = JobSchedulerService_1 = class JobSchedulerService {
    jobsService;
    schedulerRegistry;
    onAirApiService;
    virtualAirlineService;
    aircraftService;
    appConfigService;
    configService;
    airportService;
    flightService;
    companyService;
    memberService;
    logger = new common_1.Logger(JobSchedulerService_1.name);
    config = null;
    services;
    constructor(jobsService, schedulerRegistry, onAirApiService, virtualAirlineService, aircraftService, appConfigService, configService, airportService, flightService, companyService, memberService) {
        this.jobsService = jobsService;
        this.schedulerRegistry = schedulerRegistry;
        this.onAirApiService = onAirApiService;
        this.virtualAirlineService = virtualAirlineService;
        this.aircraftService = aircraftService;
        this.appConfigService = appConfigService;
        this.configService = configService;
        this.airportService = airportService;
        this.flightService = flightService;
        this.companyService = companyService;
        this.memberService = memberService;
        this.services = {
            VirtualAirline: this.virtualAirlineService,
            OnAir: this.onAirApiService,
            Aircraft: this.aircraftService,
            Airport: this.airportService,
            Flight: this.flightService,
            Company: this.companyService,
            Member: this.memberService,
        };
    }
    async onModuleInit() {
        await this._loadJobs();
        let jobPollingIntervalInMs = this.configService.get('JOB_POLLING_INTERVAL_MS');
        if (jobPollingIntervalInMs) {
            this.logger.log(`Job polling interval is set to every ${jobPollingIntervalInMs / 1000} seconds`);
            if (jobPollingIntervalInMs < 60000) {
                this.logger.warn(`Job polling interval is less than 60 seconds, forcing minimum interval of 60 seconds. Please set the JOB_POLLING_INTERVAL_MS environment variable to at least 60000.`);
                jobPollingIntervalInMs = 60000;
            }
            setInterval(async () => {
                this._loadJobs();
            }, jobPollingIntervalInMs);
        }
    }
    async unscheduleJob(job) {
        this.schedulerRegistry.deleteCronJob(job.Id);
    }
    async executeJobById(id) {
        const job = await this.jobsService.findOneById(id);
        if (!job) {
            throw new Error(`Job ${id} not found`);
        }
        const result = await this.executeJob(job);
        return result;
    }
    async scheduleJob(job) {
        try {
            this.schedulerRegistry.deleteCronJob(job.Id);
        }
        catch (error) {
        }
        this.logger.debug(`Scheduling job ${job.Name} (${job.Id}) with cron ${job.CronExpression}`);
        const cronJob = new cron.CronJob(this.matchCronExpression(job.CronExpression), async () => {
            await this.executeJob(job);
        });
        this.schedulerRegistry.addCronJob(job.Id, cronJob);
        cronJob.start();
        this.logger.log(`Scheduled job ${job.Name} (${job.Id}) with cron ${job.CronExpression}`);
    }
    matchCronExpression(cronExpression) {
        const nestCronExpression = schedule_1.CronExpression[cronExpression];
        if (!nestCronExpression) {
            throw new Error(`Invalid cron expression: ${cronExpression}`);
        }
        return nestCronExpression;
    }
    async _loadJobs() {
        if (!this.config) {
            this.config = await this.appConfigService.getLatest();
        }
        if (!this.config) {
            this.logger.warn('No app config found, skipping job scheduler. Please set the config first in the admin panel.');
            return;
        }
        this.logger.debug(`Loading enabled jobs from the database at ${new Date().toISOString()}`);
        const jobs = await this.jobsService.findAllEnabled();
        if (jobs.length === 0) {
            this.logger.warn('No enabled jobs found, skipping job scheduler. Please enable at least one job in the admin panel.');
            return;
        }
        for (const job of jobs) {
            const cronJob = await this._findJobFromSchedule(job);
            if (job.IsEnabled && !cronJob) {
                await this.scheduleJob(job);
                if (!job.FirstRunCompleted) {
                    await this.executeJob(job);
                }
            }
            else if (!job.IsEnabled && cronJob) {
                await this.unscheduleJob(job);
            }
        }
    }
    async _findJobFromSchedule(job) {
        try {
            const cronJob = this.schedulerRegistry.getCronJob(job.Id);
            if (!cronJob) {
                return null;
            }
            return cronJob;
        }
        catch (error) {
            return null;
        }
    }
    async executeJob(job) {
        const startTime = new Date();
        try {
            if (!this.config) {
                this.logger.warn(`No app config found, skipping job ${job.Name} (${job.Id})`);
                return;
            }
            if (!this.config.OnAirSyncEnabled) {
                this.logger.log(`OnAir sync is not enabled in app config, skipping job ${job.Name} (${job.Id})`);
                return;
            }
            this.logger.log(`Executing job ${job.Name} (${job.Id}) at ${startTime.toISOString()}`);
            switch (job.Type) {
                case prisma_1.JobType.VIRTUAL_AIRLINE_SYNC:
                    await (0, executeVirtualAirlinesSync_1.executeAllVirtualAirlinesSync)(this);
                    break;
                case prisma_1.JobType.VIRTUAL_AIRLINE_MEMBERS_SYNC:
                    await (0, executeVirtualAirlinesMembersSync_1.executeVirtualAirlinesMembersSync)(this);
                    break;
                case prisma_1.JobType.VIRTUAL_AIRLINE_FLEET_SYNC:
                    await (0, executeVirtualAirlinesFleetSync_1.executeVirtualAirlinesFleetSync)(this);
                    break;
                case prisma_1.JobType.VIRTUAL_AIRLINE_FLIGHTS_SYNC:
                    await (0, executeVirtualAirlinesFlightsSync_1.executeVirtualAirlinesFlightsSync)(this);
                    break;
                default:
                    throw new Error(`Unknown job type: ${job.Type}`);
            }
            const endTime = new Date();
            const duration = endTime.getTime() - startTime.getTime();
            this.logger.log(`Job ${job.Name} finished at ${endTime.toISOString()}. Duration: ${duration / 1000}s`);
            const cronJob = this.schedulerRegistry.getCronJob(job.Id);
            const nextRunAt = cronJob.nextDate().toJSDate();
            let updatedJob = job;
            if (job.FirstRunCompleted === false) {
                updatedJob = await this.jobsService.setFirstRunCompleted(job.Id);
            }
            updatedJob = await this.jobsService.updateLastRun(job.Id, startTime, nextRunAt);
            return {
                success: true,
                message: `Job executed successfully. Duration: ${duration / 1000}s`,
                duration: duration,
                nextRunAt: nextRunAt,
                job: updatedJob,
            };
        }
        catch (error) {
            if (error instanceof Error) {
                this.logger.error(`Error executing job ${job.Name} (${job.Id}): ${error.message}`);
                await this.jobsService.updateLastRun(job.Id, startTime, startTime, error.message);
            }
            else {
                this.logger.error(`Error executing job ${job.Name} (${job.Id}): ${error.message}`);
                await this.jobsService.updateLastRun(job.Id, startTime, startTime, error.message);
            }
            return {
                success: false,
                message: error instanceof Error ? error.message : 'Unknown error',
            };
        }
    }
};
exports.JobSchedulerService = JobSchedulerService;
exports.JobSchedulerService = JobSchedulerService = JobSchedulerService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jobs_service_1.JobsService,
        schedule_1.SchedulerRegistry,
        on_air_api_service_1.OnAirApiService,
        virtual_airline_service_1.VirtualAirlineService,
        aircraft_service_1.AircraftService,
        app_config_service_1.AppConfigService,
        config_1.ConfigService,
        airport_service_1.AirportService,
        flight_service_1.FlightService,
        company_service_1.CompanyService,
        member_service_1.MemberService])
], JobSchedulerService);
//# sourceMappingURL=job-scheduler.service.js.map