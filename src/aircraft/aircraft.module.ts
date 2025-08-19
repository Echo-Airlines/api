import { Module } from '@nestjs/common';
import { AircraftService } from './aircraft.service';
import { PrismaModule } from '@prisma/prisma.module';
import { AircraftController } from './aircraft.controller';

@Module({
    imports: [PrismaModule],
    providers: [AircraftService],
    exports: [AircraftService],
    controllers: [AircraftController],
})
export class AircraftModule {}
