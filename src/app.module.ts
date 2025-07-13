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
    LoggerModule
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
    const seedDatabase =
      this.configService.get<string>('SEED_DATABASE') || 'false';

    if (seedDatabase === 'true') {
      await this.seederService.run();
    }
     
  }
}