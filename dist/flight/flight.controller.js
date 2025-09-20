"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightController = void 0;
const is_member_guard_1 = require("../auth/guards/is-member.guard");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const flight_service_1 = require("./flight.service");
const member_service_1 = require("../member/member.service");
const common_1 = require("@nestjs/common");
const prisma_1 = require("../../prisma/generated/prisma/index.js");
const create_flight_route_dto_1 = require("./dto/create-flight-route.dto");
const create_flight_dto_1 = require("./dto/create-flight.dto");
let FlightController = class FlightController {
    flightService;
    memberService;
    constructor(flightService, memberService) {
        this.flightService = flightService;
        this.memberService = memberService;
    }
    async getNotCompletedOrCancelledFlights(aircraftIdentifier, completed) {
        const query = {
            where: {
                FlightStatus: {
                    notIn: completed ? [] : [prisma_1.FlightStatus.COMPLETED, prisma_1.FlightStatus.CANCELLED],
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
        const result = await this.flightService.findAll(query);
        return result;
    }
    async getAllFlights() {
        const results = await this.flightService.findAll({
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
    async createFlight(body) {
        const data = {
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
        const result = await this.flightService.create(data);
        return result;
    }
    async getMyFlights(req, completed) {
        const user = req.user;
        const member = await this.memberService.findByUserId(user.userId);
        if (!member) {
            return {
                error: 'Member not found',
                flights: [],
                success: false,
            };
        }
        const result = await this.flightService.findAllFlightsByCompanyId(member.Id, completed, {
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
        };
    }
    async getMyFlightRoutes(req) {
        const user = req.user;
        const member = await this.memberService.findByUserId(user.userId);
        if (!member) {
            throw new common_1.NotFoundException('Member not found');
        }
        const result = await this.flightService.findAllFlightRoutesByMemberId(member.Id, {
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
    async getFlightRoutes(flightId) {
        const result = await this.flightService.findAllFlightRoutesByFlightId(flightId, {
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
    async createFlightRoute(body) {
        const result = await this.flightService.createFlightRoute(body);
        return result;
    }
};
exports.FlightController = FlightController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('aircraftIdentifier')),
    __param(1, (0, common_1.Query)('completed')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Boolean]),
    __metadata("design:returntype", Promise)
], FlightController.prototype, "getNotCompletedOrCancelledFlights", null);
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FlightController.prototype, "getAllFlights", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_member_guard_1.IsMemberGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_flight_dto_1.CreateFlightDto]),
    __metadata("design:returntype", Promise)
], FlightController.prototype, "createFlight", null);
__decorate([
    (0, common_1.Get)('mine'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_member_guard_1.IsMemberGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)('completed')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Boolean]),
    __metadata("design:returntype", Promise)
], FlightController.prototype, "getMyFlights", null);
__decorate([
    (0, common_1.Get)('routes/mine'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_member_guard_1.IsMemberGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FlightController.prototype, "getMyFlightRoutes", null);
__decorate([
    (0, common_1.Get)('routes/:flightId'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_member_guard_1.IsMemberGuard),
    __param(0, (0, common_1.Param)('flightId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FlightController.prototype, "getFlightRoutes", null);
__decorate([
    (0, common_1.Post)('routes'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_member_guard_1.IsMemberGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_flight_route_dto_1.CreateFlightRouteDto]),
    __metadata("design:returntype", Promise)
], FlightController.prototype, "createFlightRoute", null);
exports.FlightController = FlightController = __decorate([
    (0, common_1.Controller)(['flight', 'flights']),
    __metadata("design:paramtypes", [flight_service_1.FlightService, member_service_1.MemberService])
], FlightController);
//# sourceMappingURL=flight.controller.js.map