import { Module } from '@nestjs/common';
import { AirportService } from './airport.service';
import { AirportController } from './airport.controller';
import { PrismaModule } from '@prisma/prisma.module';
import { OnAirModule } from '@on-air/on-air.module';

@Module({
    imports: [PrismaModule, OnAirModule],
    providers: [AirportService],
    controllers: [AirportController],
    exports: [AirportService],
})
export class AirportModule {}
