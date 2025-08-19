import { Controller, Get, Param } from '@nestjs/common';
import { AircraftService } from './aircraft.service';
import { Aircraft } from 'prisma/generated/prisma';

@Controller(['aircraft', 'a', 'fleet'])
export class AircraftController {
    constructor(private readonly aircraftService: AircraftService) {}
  
    @Get()
    async getPrimaryVirtualAirlineFleet() {
        const result: Aircraft[] = await this.aircraftService.findPrimaryVirtualAirlineFleet();

        return result;
    }

    @Get(':virtualAirlineIdentifier')
    async getFleetByVirtualAirlineIdentifier(@Param('virtualAirlineIdentifier') virtualAirlineIdentifier: string) {
        const result: Aircraft[] = await this.aircraftService.findAllByVirtualAirlineIdentifier(virtualAirlineIdentifier);

        return result;
    }
}