import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from '@prisma/prisma.module';
import { VirtualAirlineModule } from '@virtual-airline/virtual-airline.module';
import { OnAirModule } from '@on-air/on-air.module';
import { AppConfigModule } from './app-config/app-config.module';
import { JobsModule } from './jobs/jobs.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoggerService } from '@logger/logger.service';
import { SeederService } from './seeder/seeder.service';
import { SeederModule } from './seeder/seeder.module';
import { LoggerModule } from '@logger/logger.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { MemberModule } from './member/member.module';
import { AircraftModule } from './aircraft/aircraft.module';
import { AirportModule } from './airport/airport.module';
import { FlightModule } from './flight/flight.module';
import { DiscordModule } from './discord/discord.module';
import { ListenerModule } from './listener/listener.module';
import { FshubModule } from './fshub/fshub.module';
import { NotifierModule } from './notifier/notifier.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '.env.local'],
    }),
    PrismaModule,
    OnAirModule,
    VirtualAirlineModule,
    AppConfigModule,
    JobsModule,
    SeederModule,
    LoggerModule,
    UserModule,
    AuthModule,
    AdminModule,
    MemberModule,
    AircraftModule,
    AirportModule,
    FlightModule,
    DiscordModule,
    ListenerModule,
    FshubModule,
    NotifierModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements OnModuleInit {
  private readonly logger = new LoggerService(AppModule.name);
  constructor(
    private readonly configService: ConfigService,
    private readonly seederService: SeederService,
  ) {}

  async onModuleInit() {   
     
  }
}