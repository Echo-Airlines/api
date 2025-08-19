import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { JobsService } from './jobs.service';
import { JobSchedulerService } from './job-scheduler.service';
import { OnAirModule } from '../on-air/on-air.module';
import { VirtualAirlineModule } from '../virtual-airline/virtual-airline.module';
import { AppConfigModule } from '../app-config/app-config.module';
import { PrismaModule } from '@prisma/prisma.module';
import { JobsController } from './jobs.controller';
import { AircraftModule } from '@aircraft/aircraft.module';
import { AirportModule } from '@airport/airport.module';
import { FlightModule } from '@flight/flight.module';

@Module({
    imports: [
        ScheduleModule.forRoot(),
        OnAirModule,
        VirtualAirlineModule,
        AppConfigModule,
        PrismaModule,
        AircraftModule,
        AirportModule,
        FlightModule,
    ],
    controllers: [JobsController],
    providers: [JobsService, JobSchedulerService],
    exports: [JobsService, JobSchedulerService],
})
export class JobsModule {} 