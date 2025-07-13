import { Module } from '@nestjs/common';
import { VirtualAirlineService } from './virtual-airline.service';
import { PrismaModule } from '@prisma/prisma.module';
import { VirtualAirlineController } from './virtual-airline.controller';

@Module({
  imports: [PrismaModule],
  providers: [VirtualAirlineService],
  controllers: [VirtualAirlineController],
  exports: [VirtualAirlineService],
})
export class VirtualAirlineModule {}
