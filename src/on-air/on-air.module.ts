import { Module } from '@nestjs/common';
import { OnAirApiService } from './on-air-api.service';
import { OnAirController } from './on-air.controller';
import { VirtualAirlineModule } from '@/virtual-airline/virtual-airline.module';

@Module({
  imports: [VirtualAirlineModule],
  providers: [OnAirApiService,],
  exports: [OnAirApiService],
  controllers: [OnAirController],
})
export class OnAirModule {}
