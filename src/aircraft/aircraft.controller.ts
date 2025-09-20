import { Body, Controller, Get, NotFoundException, Param, Put, Query, UseGuards } from '@nestjs/common';
import { AircraftService } from './aircraft.service';
import { Aircraft, Livery, Prisma } from 'prisma/generated/prisma';
import { IsAdminGuard } from '@auth/guards/is-admin.guard';
import { JwtAuthGuard } from '@auth/guards/jwt-auth.guard';
import { LiveryService } from '@livery/livery.service';

@Controller(['aircraft', 'a', 'fleet'])
export class AircraftController {
    constructor(private readonly aircraftService: AircraftService, private readonly liveryService: LiveryService) {}
  
    @Get()
    async getPrimaryVirtualAirlineFleet() {
        const result: Aircraft[] = await this.aircraftService.findPrimaryVirtualAirlineFleet();

        return result;
    }

    @Get(':id')
    async getAircraftById(@Param('id') id: string) {
        const result: Aircraft | null = await this.aircraftService.findById(id);

        return result;
    }

    @Get(':virtualAirlineIdentifier')
    async getFleetByVirtualAirlineIdentifier(@Param('virtualAirlineIdentifier') virtualAirlineIdentifier: string) {
        const result: Aircraft[] = await this.aircraftService.findAllByVirtualAirlineIdentifier(virtualAirlineIdentifier);

        return result;
    }

    @Put(':id/liveries')
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async assignLiveryToAircraft(@Param('id') id: string, @Body() data: { liveryId: string }) {
        const aircraft: Aircraft | null = await this.aircraftService.findById(id);

        if (!aircraft) {
            throw new NotFoundException('Aircraft not found');
        }

        const livery: Livery | null = await this.liveryService.findById(data.liveryId);

        if (!livery) {
            throw new NotFoundException('Livery not found');
        }

        const result: Aircraft = await this.aircraftService.assignLiveryToAircraft(aircraft, livery);

        return result;
    }
}