import { Module } from '@nestjs/common';
import { VirtualAirlineService } from './virtual-airline.service';
import { DatabaseModule } from '@database/database.module';
import { VirtualAirlineController } from './virtual-airline.controller';
import { AppConfigModule } from '@app-config/app-config.module';

@Module({
  imports: [DatabaseModule, AppConfigModule],
  providers: [VirtualAirlineService],
  controllers: [VirtualAirlineController],
  exports: [VirtualAirlineService],
})
export class VirtualAirlineModule {}
