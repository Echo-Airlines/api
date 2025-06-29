import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { SchedulerRegistry } from '@nestjs/schedule';
import { JobsService } from './jobs.service';
import { OnAirApiService } from '../on-air/on-air-api.service';
import { VirtualAirlineService } from '../virtual-airline/virtual-airline.service';
import { AppConfigService } from '../app-config/app-config.service';
import * as cron from 'cron';
import { executeVirtualAirlineSync } from './schedules/executeVirtualAirlineSync';
// import { executeVirtualAirlineMembersSync } from './schedules/executeVirtualAirlineMembersSync';
import { AppConfig, Job, JobType } from 'generated/prisma';

export interface IJobSchedulerServices {
    VirtualAirline: VirtualAirlineService;
    OnAir: OnAirApiService;
}

@Injectable()
export class JobSchedulerService implements OnModuleInit {
    private readonly logger = new Logger(JobSchedulerService.name);
    private config: AppConfig|null = null;
    private services: IJobSchedulerServices;

    constructor(
        private readonly jobsService: JobsService,
        private readonly schedulerRegistry: SchedulerRegistry,
        private readonly onAirApiService: OnAirApiService,
        private readonly virtualAirlineService: VirtualAirlineService,
        private readonly appConfigService: AppConfigService,
    ) {
        this.services = {
            VirtualAirline: this.virtualAirlineService,
            OnAir: this.onAirApiService,
        }
    }

    async onModuleInit() {
        await this._loadJobs();
        
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

        // Create new cron job
        const cronJob = new cron.CronJob(job.CronExpression, async () => {
            await this.executeJob(job);
        });

        // Add to registry and start
        this.schedulerRegistry.addCronJob(job.Id, cronJob as any);
        cronJob.start();

        this.logger.log(`Scheduled job ${job.Name} (${job.Id}) with cron ${job.CronExpression}`);
    }

    private async _loadJobs() {        
        if (!this.config) {
            this.config = await this.appConfigService.getLatest()
        }

        if (!this.config) {
            this.logger.warn('No app config found, skipping job scheduler. Please set the config first in the admin panel.');
            return;
        }

        this.logger.log('Loading jobs');

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
                    if (!this.config.VirtualAirlineId) {
                        throw new Error('Virtual airline ID is not set in app config');
                    }

                    const results = await executeVirtualAirlineSync(this.config.VirtualAirlineId, this.services);
                    // update the job status to completed
                    break;
                // case JobType.VIRTUAL_AIRLINE_MEMBERS_SYNC:
                //     if (!this.config.VirtualAirlineId) {
                //         throw new Error('Virtual airline ID is not set in app config');
                //     }

                //     await executeVirtualAirlineMembersSync(this.config.VirtualAirlineId, this.services);
                //     break;
                default:
                    throw new Error(`Unknown job type: ${job.Type}`);
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