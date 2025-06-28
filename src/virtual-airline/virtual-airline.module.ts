import { Module } from '@nestjs/common';
import { VirtualAirlineService } from './virtual-airline.service';
import { PrismaModule } from '@prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [VirtualAirlineService],
  exports: [VirtualAirlineService],
})
export class VirtualAirlineModule {}
