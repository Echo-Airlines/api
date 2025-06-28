import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { JobsService } from './jobs.service';
import { JobSchedulerService } from './job-scheduler.service';
import { OnAirModule } from '../on-air/on-air.module';
import { VirtualAirlineModule } from '../virtual-airline/virtual-airline.module';
import { AppConfigModule } from '../app-config/app-config.module';
import { PrismaModule } from '@prisma/prisma.module';

@Module({
    imports: [
        ScheduleModule.forRoot(),
        OnAirModule,
        VirtualAirlineModule,
        AppConfigModule,
        PrismaModule,
    ],
    controllers: [],
    providers: [JobsService, JobSchedulerService],
    exports: [JobsService, JobSchedulerService],
})
export class JobsModule {} 