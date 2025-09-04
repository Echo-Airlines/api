import { Module } from '@nestjs/common';
import { AircraftService } from './aircraft.service';
import { PrismaModule } from '@prisma/prisma.module';
import { AircraftController } from './aircraft.controller';
import { LiveryModule } from '@livery/livery.module';

@Module({
    imports: [PrismaModule, LiveryModule],
    providers: [AircraftService],
    exports: [AircraftService],
    controllers: [AircraftController],
})
export class AircraftModule {}
