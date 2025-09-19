import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { JobsService } from './jobs.service';
import { JobSchedulerService } from './job-scheduler.service';
import { OnAirModule } from '../on-air/on-air.module';
import { VirtualAirlineModule } from '../virtual-airline/virtual-airline.module';
import { AppConfigModule } from '../app-config/app-config.module';
import { DatabaseModule } from '@database/database.module';
import { JobsController } from './jobs.controller';
import { AircraftModule } from '@aircraft/aircraft.module';
import { AirportModule } from '@airport/airport.module';
import { FlightModule } from '@flight/flight.module';
import { CompanyModule } from '@company/company.module';
import { MemberModule } from '@member/member.module';
import { DiscordModule } from '@discord/discord.module';
import { NotificationModule } from '@notification/notification.module';

@Module({
    imports: [
        ScheduleModule.forRoot(),
        OnAirModule,
        VirtualAirlineModule,
        AppConfigModule,
        DatabaseModule,
        AircraftModule,
        AirportModule,
        FlightModule,
        CompanyModule,
        MemberModule,
        NotificationModule,
        DiscordModule,
    ],
    controllers: [JobsController],
    providers: [JobsService, JobSchedulerService],
    exports: [JobsService, JobSchedulerService],
})
export class JobsModule {} 