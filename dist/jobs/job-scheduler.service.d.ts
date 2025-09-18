import { Logger, OnModuleInit } from '@nestjs/common';
import { SchedulerRegistry, CronExpression as NestCronExpression } from '@nestjs/schedule';
import { JobsService } from './jobs.service';
import { OnAirApiService } from '../on-air/on-air-api.service';
import { VirtualAirlineService } from '../virtual-airline/virtual-airline.service';
import { AppConfigService } from '../app-config/app-config.service';
import { Job, CronExpression } from 'prisma/generated/prisma';
import { ConfigService } from '@nestjs/config';
import { AircraftService } from '@aircraft/aircraft.service';
import { AirportService } from '@airport/airport.service';
import { FlightService } from '@flight/flight.service';
import { CompanyService } from '@company/company.service';
import { MemberService } from '@member/member.service';
export interface IJobSchedulerServices {
    VirtualAirline: VirtualAirlineService;
    OnAir: OnAirApiService;
    Aircraft: AircraftService;
    Airport: AirportService;
    Flight: FlightService;
    Company: CompanyService;
    Member: MemberService;
}
export declare class JobSchedulerService implements OnModuleInit {
    private readonly jobsService;
    private readonly schedulerRegistry;
    private readonly onAirApiService;
    private readonly virtualAirlineService;
    private readonly aircraftService;
    private readonly appConfigService;
    private readonly configService;
    private readonly airportService;
    private readonly flightService;
    private readonly companyService;
    private readonly memberService;
    readonly logger: Logger;
    private config;
    services: IJobSchedulerServices;
    constructor(jobsService: JobsService, schedulerRegistry: SchedulerRegistry, onAirApiService: OnAirApiService, virtualAirlineService: VirtualAirlineService, aircraftService: AircraftService, appConfigService: AppConfigService, configService: ConfigService, airportService: AirportService, flightService: FlightService, companyService: CompanyService, memberService: MemberService);
    onModuleInit(): Promise<void>;
    unscheduleJob(job: Job): Promise<void>;
    executeJobById(id: string): Promise<{
        success: boolean;
        message: string;
        duration: number;
        nextRunAt: Date;
        job: {
            Id: string;
            Name: string;
            Description: string | null;
            CreatedAt: Date;
            UpdatedAt: Date;
            IsEnabled: boolean;
            FirstRunCompleted: boolean;
            Type: import("prisma/generated/prisma").$Enums.JobType;
            Status: import("prisma/generated/prisma").$Enums.JobStatus;
            CronExpression: import("prisma/generated/prisma").$Enums.CronExpression;
            Parameters: import("prisma/generated/prisma/runtime/library").JsonValue | null;
            LastRunAt: Date | null;
            NextRunAt: Date | null;
            LastError: string | null;
            ExecutionCount: number;
        };
    } | {
        success: boolean;
        message: string;
        duration?: undefined;
        nextRunAt?: undefined;
        job?: undefined;
    } | undefined>;
    scheduleJob(job: Job): Promise<void>;
    matchCronExpression(cronExpression: CronExpression): NestCronExpression;
    private _loadJobs;
    private _findJobFromSchedule;
    executeJob(job: Job): Promise<{
        success: boolean;
        message: string;
        duration: number;
        nextRunAt: Date;
        job: {
            Id: string;
            Name: string;
            Description: string | null;
            CreatedAt: Date;
            UpdatedAt: Date;
            IsEnabled: boolean;
            FirstRunCompleted: boolean;
            Type: import("prisma/generated/prisma").$Enums.JobType;
            Status: import("prisma/generated/prisma").$Enums.JobStatus;
            CronExpression: import("prisma/generated/prisma").$Enums.CronExpression;
            Parameters: import("prisma/generated/prisma/runtime/library").JsonValue | null;
            LastRunAt: Date | null;
            NextRunAt: Date | null;
            LastError: string | null;
            ExecutionCount: number;
        };
    } | {
        success: boolean;
        message: string;
        duration?: undefined;
        nextRunAt?: undefined;
        job?: undefined;
    } | undefined>;
}
