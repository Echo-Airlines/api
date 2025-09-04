import { Controller, Param, Get, NotFoundException, UseGuards } from '@nestjs/common';
import { AirportService } from './airport.service';
import { OnAirApiService } from '@on-air/on-air-api.service';
import { OnAirAirport } from '@on-air/types';
import { Airport, Prisma } from 'prisma/generated/prisma';
import { IsMemberGuard } from '@auth/is-member.guard';
import { JwtAuthGuard } from '@auth/jwt-auth.guard';

@Controller(['airport', 'airports'])
export class AirportController {
    constructor(private readonly airportService: AirportService, private readonly onAirApiService: OnAirApiService) {}

    @Get()
    @UseGuards(JwtAuthGuard, IsMemberGuard)
    async getAllRegisteredAirports() {
        const airports = await this.airportService.findAll();

        return airports;
    }

    @Get('lookup/:icao')
    @UseGuards(JwtAuthGuard, IsMemberGuard)
    async getAirportByICAO(@Param('icao') icao: string) {
        let airport = await this.airportService.findByICAO(icao);

        // if the airport does not exist in the database, we need to fetch it from the OnAir API
        if (!airport) {
            const onAirAirport: OnAirAirport|null = await this.onAirApiService.getAirportByICAO(icao);

            if (!onAirAirport) {
                throw new NotFoundException('Airport not found');
            }

            airport = {
                Id: onAirAirport.Id,
                ICAO: onAirAirport.ICAO,
                IATA: onAirAirport.IATA,
                Name: onAirAirport.Name,
                Size: onAirAirport.Size,
                City: onAirAirport.City,
                State: onAirAirport.State,
                CountryCode: onAirAirport.CountryCode,
                CountryName: onAirAirport.CountryName,
                CountryEmoji: this.airportService.determineCountryEmoji(onAirAirport.CountryCode),
                Latitude: new Prisma.Decimal(onAirAirport.Latitude),
                Longitude: new Prisma.Decimal(onAirAirport.Longitude),
                HomeWebSiteUrl: onAirAirport.HomeWebSiteUrl || null,
                WikiUrl: onAirAirport.WikiUrl || null,
                Description: onAirAirport.Description || null,
                CreatedAt: new Date(),
                UpdatedAt: new Date()
            }

            airport = await this.airportService.upsert(airport);
        }

        return airport;
    }
  }
