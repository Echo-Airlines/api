import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { SchedulerRegistry, CronExpression as NestCronExpression } from '@nestjs/schedule';
import { JobsService } from './jobs.service';
import { OnAirApiService } from '../on-air/on-air-api.service';
import { VirtualAirlineService } from '../virtual-airline/virtual-airline.service';
import { AppConfigService } from '../app-config/app-config.service';
import * as cron from 'cron';
import { executeAllVirtualAirlinesSync } from './schedules/executeVirtualAirlinesSync';
// import { executeVirtualAirlineMembersSync } from './schedules/executeVirtualAirlineMembersSync';
import { AppConfig, Job, JobType, CronExpression } from 'prisma/generated/prisma';
import { ConfigService } from '@nestjs/config';
import { executeVirtualAirlinesMembersSync } from './schedules/executeVirtualAirlinesMembersSync';

export interface IJobSchedulerServices {
    VirtualAirline: VirtualAirlineService;
    OnAir: OnAirApiService;
}

@Injectable()
export class JobSchedulerService implements OnModuleInit {
    public readonly logger = new Logger(JobSchedulerService.name);
    private config: AppConfig|null = null;
    public services: IJobSchedulerServices;

    constructor(
        private readonly jobsService: JobsService,
        private readonly schedulerRegistry: SchedulerRegistry,
        private readonly onAirApiService: OnAirApiService,
        private readonly virtualAirlineService: VirtualAirlineService,
        private readonly appConfigService: AppConfigService,
        private readonly configService: ConfigService,
    ) {
        this.services = {
            VirtualAirline: this.virtualAirlineService,
            OnAir: this.onAirApiService,
        }
    }

    async onModuleInit() {
        await this._loadJobs();
        
        let jobPollingIntervalInMs = this.configService.get<number|undefined>('JOB_POLLING_INTERVAL_MS');

        if (jobPollingIntervalInMs) {
            this.logger.log(`Job polling interval is set to every ${jobPollingIntervalInMs/1000} seconds`);
            if (jobPollingIntervalInMs < 60000) {
                this.logger.warn(`Job polling interval is less than 60 seconds, forcing minimum interval of 60 seconds. Please set the JOB_POLLING_INTERVAL_MS environment variable to at least 60000.`);
                jobPollingIntervalInMs = 60000;
            }

            setInterval(async () => {
                this._loadJobs();
            }, jobPollingIntervalInMs);
        }

        // this should also run an interval to check if there are any jobs that are now active and should be scheduled)
        // setInterval(async () => {
        //     this._loadJobs();
        // }, 60000); // run every 1 minute
    }

    public async unscheduleJob(job: Job) {
        this.schedulerRegistry.deleteCronJob(job.Id);
    }

    public async executeJobById(id: string) {
        const job: Job|null = await this.jobsService.findOneById(id);

        if (!job) {
            throw new Error(`Job ${id} not found`);
        }

        await this.executeJob(job);
    }

    public async scheduleJob(job: Job) {
        // Remove existing job if it exists
        try {
            this.schedulerRegistry.deleteCronJob(job.Id);
        } catch (error) {
            // Job doesn't exist, that's fine
        }

        // Create new cron job1
        this.logger.debug(`Scheduling job ${job.Name} (${job.Id}) with cron ${job.CronExpression}`);
        const cronJob = new cron.CronJob(this.matchCronExpression(job.CronExpression), async () => {
            await this.executeJob(job);
        });

        // Add to registry and start
        this.schedulerRegistry.addCronJob(job.Id, cronJob as any);
        cronJob.start();

        this.logger.log(`Scheduled job ${job.Name} (${job.Id}) with cron ${job.CronExpression}`);
    }

    public matchCronExpression(cronExpression: CronExpression): NestCronExpression {
        const nestCronExpression: NestCronExpression = NestCronExpression[cronExpression];

        if (!nestCronExpression) {
            throw new Error(`Invalid cron expression: ${cronExpression}`);
        }

        return nestCronExpression;
    }

    private async _loadJobs() {        
        if (!this.config) {
            this.config = await this.appConfigService.getLatest()
        }

        if (!this.config) {
            this.logger.warn('No app config found, skipping job scheduler. Please set the config first in the admin panel.');
            return;
        }

        this.logger.debug(`Loading enabled jobs from the database at ${new Date().toISOString()}`);

        // Load all active jobs and schedule them
        const jobs: Job[] = await this.jobsService.findAllEnabled();

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
            } else if (!job.IsEnabled && cronJob) {
                await this.unscheduleJob(job);
            }
        }
    }

    private async _findJobFromSchedule(job: Job) {
        try {
            const cronJob = this.schedulerRegistry.getCronJob(job.Id);  

            if (!cronJob) {
                return null;
            }

            return cronJob;
        } catch (error) {
            // this.logger.error(`Error finding job ${job.Name} (${job.Id}) from schedule. Error: ${error.message}`);
            return null;
        }
    }

    public async executeJob(job: Job) {
        const now = new Date();
        this.logger.log(`Executing job ${job.Name} (${job.Id}) at ${now.toISOString()}`);
        
        try {
            if (!this.config) {
                this.logger.warn(`No app config found, skipping job ${job.Name} (${job.Id})`);
                return;
            }

            if (!this.config.OnAirSyncEnabled) {
                this.logger.log(`OnAir sync is not enabled in app config, skipping job ${job.Name} (${job.Id})`);
                return;
            }

            switch (job.Type) {
                case JobType.VIRTUAL_AIRLINE_SYNC:
                    await executeAllVirtualAirlinesSync(this);

                    // update the job status to completed
                    break;
                case JobType.VIRTUAL_AIRLINE_MEMBERS_SYNC:
                    await executeVirtualAirlinesMembersSync(this);

                    // update the job status to completed
                    break;
                default:
                    throw new Error(`Unknown job type: ${job.Type}`);
            }

            if (!job.FirstRunCompleted) {
                await this.jobsService.update(job.Id, {
                    FirstRunCompleted: true,
                });
            }

            // Calculate next run time
            const cronJob = this.schedulerRegistry.getCronJob(job.Id);
            const nextRunAt = cronJob.nextDate().toJSDate();

            // Update job status
            await this.jobsService.updateLastRun(job.Id, now, nextRunAt);
        } catch (error) {
            this.logger.error(`Error executing job ${job.Name} (${job.Id}): ${error.message}`);
            await this.jobsService.updateLastRun(job.Id, now, now, error.message);
        }
    }
} 