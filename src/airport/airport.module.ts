import { Module } from '@nestjs/common';
import { AirportService } from './airport.service';
import { AirportController } from './airport.controller';
import { DatabaseModule } from '@database/database.module';
import { OnAirModule } from '@on-air/on-air.module';

@Module({
    imports: [DatabaseModule, OnAirModule],
    providers: [AirportService],
    controllers: [AirportController],
    exports: [AirportService],
})
export class AirportModule {}
