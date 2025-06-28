import { Module } from '@nestjs/common';
import { OnAirApiService } from './on-air-api.service';
import { AppConfigModule } from '@/app-config/app-config.module';
import { OnAirController } from './on-air.controller';

@Module({
  imports: [AppConfigModule],
  providers: [OnAirApiService,],
  exports: [OnAirApiService],
  controllers: [OnAirController],
})
export class OnAirModule {}
