import { IsMemberGuard } from '@auth/guards/is-member.guard';
import { JwtAuthGuard } from '@auth/guards/jwt-auth.guard';
import { FlightService } from '@flight/flight.service';
import { MemberService } from '@member/member.service';
import { Body, Controller, Get, NotFoundException, Param, Post, Query, Req, UnauthorizedException, UseGuards } from '@nestjs/common';
import { Flight, FlightRoute, FlightStatus, Prisma } from 'prisma/generated/prisma';
import { CreateFlightRouteDto } from './dto/create-flight-route.dto';
import { CreateFlightDto } from './dto/create-flight.dto';

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

    @Post()
    @UseGuards(JwtAuthGuard, IsMemberGuard)
    async createFlight(@Body() body: CreateFlightDto) {
        const data: Prisma.FlightCreateInput = {
            ...body,
            Company: {
                connect: {
                    Id: body.CompanyId,
                },
            },
            Category: body.Category,
            Registered: body.Registered,
            ResultComments: body.ResultComments,
            HasStalled: body.HasStalled,
            HasOverspeeded: body.HasOverspeeded,
            WrongFuelDetected: body.WrongFuelDetected,
            WrongWeightDetected: body.WrongWeightDetected,
            UseFreelanceRouteSchedule: body.UseFreelanceRouteSchedule,
            CanResumeOrAbort: body.CanResumeOrAbort,
            Aircraft: {
                connect: {
                    Id: body.AircraftId,
                },
            },
            DepartureAirport: {
                connect: {
                    Id: body.DepartureAirportId,
                },
            },
            ArrivalIntendedAirport: {
                connect: {
                    Id: body.ArrivalIntendedAirportId,
                },
            },
            ArrivalAlternateAirport: {
                connect: {
                    Id: body.ArrivalAlternateAirportId,
                },
            },
        };
        const result: Flight = await this.flightService.create(data);

        return result;
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

    @Get('routes/:flightId')
    @UseGuards(JwtAuthGuard, IsMemberGuard)
    async getFlightRoutes(@Param('flightId') flightId: string) {
        const result: FlightRoute[] = await this.flightService.findAllFlightRoutesByFlightId(flightId, {
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

    @Post('routes')
    @UseGuards(JwtAuthGuard, IsMemberGuard)
    async createFlightRoute(@Body() body: CreateFlightRouteDto) {
        const result: FlightRoute = await this.flightService.createFlightRoute(body);

        return result;
    }
}
