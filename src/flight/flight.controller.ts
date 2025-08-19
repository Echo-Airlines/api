import { IsMemberGuard } from '@auth/is-member.guard';
import { JwtAuthGuard } from '@auth/jwt-auth.guard';
import { FlightService } from '@flight/flight.service';
import { MemberService } from '@member/member.service';
import { Controller, Get, NotFoundException, Query, Req, UnauthorizedException, UseGuards } from '@nestjs/common';
import { Flight, FlightRoute, FlightStatus, Prisma } from 'prisma/generated/prisma';

@Controller(['flight', 'flights'])
export class FlightController {
    constructor(private readonly flightService: FlightService, private readonly memberService: MemberService) {}
  
    @Get()
    async getNotCompletedOrCancelledFlights(@Query('aircraftIdentifier') aircraftIdentifier?: string, @Query('completed') completed?: boolean) {
        const query: Prisma.FlightFindManyArgs = {
            where: {
                FlightStatus: {
                    notIn: completed ? [] : [FlightStatus.COMPLETED, FlightStatus.CANCELLED],
                },
            },
            include: {
                Company: true,
                Aircraft: {
                    include: {
                        AircraftClass: true,
                        AircraftStatus: true,
                        CurrentAirport: true,
                        AircraftMaintenance: true,
                    },
                },
                FlightRoute: true,
                DepartureAirport: true,
                ArrivalIntendedAirport: true,
                ArrivalAlternateAirport: true,
                ArrivalActualAirport: true,
            }
        };

        const result: Flight[] = await this.flightService.findAll(query);

        return result;
    }

    @Get('all')
    async getAllFlights() {
        const results: Flight[] = await this.flightService.findAll({
            include: {
                Company: true,
                Aircraft: {
                    include: {
                        AircraftClass: true,
                        AircraftStatus: true,
                        CurrentAirport: true,
                        AircraftMaintenance: true,
                    },
                },
                FlightRoute: true,
                DepartureAirport: true,
                ArrivalIntendedAirport: true,
                ArrivalAlternateAirport: true,
                ArrivalActualAirport: true,
            }
        });

        return results;
    }

    @Get('mine')
    @UseGuards(JwtAuthGuard, IsMemberGuard)
    async getMyFlights(@Req() req, @Query('completed') completed?: boolean) {
        const user = req.user;
        const member = await this.memberService.findByUserId(user.userId);

        if (!member) {
            return {
                error: 'Member not found',
                flights: [],
                success: false,
            }
        }

        const result: Flight[] = await this.flightService.findAllFlightsByCompanyId(member.Id, completed, {
            Company: true,  
            Aircraft: {
                include: {
                    AircraftClass: true,
                    AircraftStatus: true,
                    CurrentAirport: true,
                    AircraftMaintenance: true,
                },
            },
            FlightRoute: true,
            DepartureAirport: true,
            ArrivalIntendedAirport: true,
            ArrivalAlternateAirport: true,
            ArrivalActualAirport: true,
        });

        return {
            flights: result,
            success: true,
            error: null,
        }
    }

    @Get('routes/mine')
    @UseGuards(JwtAuthGuard, IsMemberGuard)
    async getMyFlightRoutes(@Req() req) {
        const user = req.user;
        const member = await this.memberService.findByUserId(user.userId);

        if (!member) {
            throw new NotFoundException('Member not found');
        }

        const result: FlightRoute[] = await this.flightService.findAllFlightRoutesByMemberId(member.Id, {
            Flight: {
                include: {
                    Company: true,
                    Aircraft: true,
                    DepartureAirport: true,
                    ArrivalIntendedAirport: true,
                },
            },
        });

        return result;
    }
}
