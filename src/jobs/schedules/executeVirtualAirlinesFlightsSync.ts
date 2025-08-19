import { JobSchedulerService } from "@jobs/job-scheduler.service";
import { Flight, FlightStatus, Prisma, VirtualAirline } from "prisma/generated/prisma";
import { OnAirFlight } from "@on-air/types";
import { eachSeries } from "async";


export async function executeVirtualAirlinesFlightsSync(scheduler: JobSchedulerService) {
    const virtualAirlines = await scheduler.services.VirtualAirline.findAll();

    for (const virtualAirline of virtualAirlines) {
        await executeVirtualAirlineFlightsSync(virtualAirline, scheduler);
    }
}

async function executeVirtualAirlineFlightsSync(virtualAirline: VirtualAirline, scheduler: JobSchedulerService) {
    return new Promise(async (resolve, reject) => {
        const oaFlights: OnAirFlight[] = await scheduler.services.OnAir.getVirtualAirlineFlights(virtualAirline.Id);

        if (oaFlights.length === 0) {
            scheduler.logger.warn(`No flights found for virtual airline ${virtualAirline.Id}`);
            return resolve(null);
        }

        const results: Flight[] = [];

        await eachSeries(oaFlights, async (flight: OnAirFlight) => {
            const entity: Flight = await executeVirtualAirlineFlightSync(flight, virtualAirline, scheduler);

            results.push(entity);
            
            return true;
        }, (err) => {
            if (err) {
                scheduler.logger.error(`Error syncing flights for virtual airline ${virtualAirline.Id}: ${err}`);
                return reject(err);
            }

            return resolve(results);
        });
    });
}

async function executeVirtualAirlineFlightSync(dto: OnAirFlight, virtualAirline: VirtualAirline, scheduler: JobSchedulerService) {
    // determine the flight status
    let flightStatus: FlightStatus = FlightStatus.PENDING;

    if (dto.Registered === false && dto.StartTime) {
        if (dto.Aircraft.AircraftStatus === 4) {
            flightStatus = FlightStatus.WARP;
        } else {
            flightStatus = FlightStatus.FLIGHT;
        }
    } else if (dto.Registered === true && dto.CancelReason) {
        flightStatus = FlightStatus.CANCELLED;
    } else if (dto.Registered === true && !dto.CancelReason) {
        flightStatus = FlightStatus.COMPLETED;
    }

    const query: Prisma.FlightCreateInput = {
        Id: dto.Id,
        LastRefresh: dto.LastRefresh,
        Registered: dto.Registered,
        Category: dto.Category,
        ResultComments: dto.ResultComments,
        IsAI: dto.IsAI,
        StartTime: (dto.StartTime) ? new Date(dto.StartTime) : undefined,
        EndTime: (dto.EndTime) ? new Date(dto.EndTime) : undefined,
        EngineOnTime: (dto.EngineOnTime) ? new Date(dto.EngineOnTime) : undefined,
        EngineOffTime: (dto.EngineOffTime) ? new Date(dto.EngineOffTime) : undefined,
        AirborneTime: (dto.AirborneTime) ? new Date(dto.AirborneTime) : undefined,
        LandedTime: (dto.LandedTime) ? new Date(dto.LandedTime) : undefined,
        IntendedFlightLevel: dto.IntendedFlightLevel,
        Passengers: dto.Passengers,
        Cargo: dto.Cargo,
        AddedFuelQty: dto.AddedFuelQty,
        VerticalSpeedAtTouchdownMpS: dto.VerticalSpeedAtTouchdownMpS,
        MaxGForce: dto.MaxGForce,
        MinGForce: dto.MinGForce,
        MaxBank: dto.MaxBank,
        MaxPitch: dto.MaxPitch,
        HasStalled: dto.HasStalled,
        HasOverspeeded: dto.HasOverspeeded,
        XPFlight: dto.XPFlight,
        XPFlightBonus: dto.XPFlightBonus,
        XPMissions: dto.XPMissions,
        CargosTotalWeight: dto.CargosTotalWeight,
        PAXCount: dto.PAXCount,
        AircraftCurrentFOB: dto.AircraftCurrentFOB,
        AircraftCurrentAltitude: dto.AircraftCurrentAltitude,
        ActualCruiseAltitude: dto.ActualCruiseAltitude,
        ActualConsumptionAtCruiseLevelInLbsPerHour: dto.ActualConsumptionAtCruiseLevelInLbsPerHour,
        ActualTotalFuelConsumptionInLbs: dto.ActualTotalFuelConsumptionInLbs,
        ActualConsumptionAtCruiseLevelInGalPerHour: dto.ActualConsumptionAtCruiseLevelInGalPerHour,
        ActualTASAtCruiseLevel: dto.ActualTASAtCruiseLevel,
        ActualCruiseTimeInMinutes: dto.ActualCruiseTimeInMinutes,
        ActualPressureAltitude: dto.ActualPressureAltitude,
        RegisterState: dto.RegisterState,
        WrongFuelDetected: dto.WrongFuelDetected,
        WrongWeightDetected: dto.WrongWeightDetected,
        TimeOffset: dto.TimeOffset,
        StartLatitude: dto.StartLatitude,
        StartLongitude: dto.StartLongitude,
        StartHeading: dto.StartHeading,
        CanResumeOrAbort: dto.CanResumeOrAbort,
        EngineOnRealTime: (dto.EngineOnRealTime) ? new Date(dto.EngineOnRealTime) : undefined,
        LandedRealTime: (dto.LandedRealTime) ? new Date(dto.LandedRealTime) : undefined,
        AirborneRealTime: (dto.AirborneRealTime) ? new Date(dto.AirborneRealTime) : undefined,
        Aircraft: {
            connectOrCreate: {
                where: {
                    Identifier: dto.Aircraft.Identifier,
                },
                create: {
                    Id: dto.Id,
                    Identifier: dto.Aircraft.Identifier,
                    DisplayName: dto.Aircraft.AircraftType.DisplayName,
                    LastRefresh: new Date(),
                    AircraftClass: {
                        connectOrCreate: {
                            where: {
                                Id: dto.Aircraft.AircraftType.AircraftClassId,
                            },
                            create: {
                                Id: dto.Aircraft.AircraftType.AircraftClassId,
                                Name: dto.Aircraft.AircraftType.AircraftClass.Name,
                                ShortName: dto.Aircraft.AircraftType.AircraftClass.ShortName,
                            },
                        },
                    },
                    AircraftStatus: {
                        connect: {
                            Id: dto.Aircraft.AircraftStatus,
                        },
                    },
                    VirtualAirline: {
                        connect: {
                            Id: virtualAirline.Id,
                        },
                    },
                    CurrentAirport: (dto.Aircraft.CurrentAirport) ? {
                        connectOrCreate: {
                            where: {
                                ICAO: dto.Aircraft.CurrentAirport.ICAO,
                            },
                            create: {
                                Id: dto.Aircraft.CurrentAirport.Id,
                                ICAO: dto.Aircraft.CurrentAirport.ICAO,
                                IATA: dto.Aircraft.CurrentAirport.IATA,
                                Name: dto.Aircraft.CurrentAirport.Name,
                                Size: dto.Aircraft.CurrentAirport.Size,
                                City: dto.Aircraft.CurrentAirport.City,
                                State: dto.Aircraft.CurrentAirport.State,
                                CountryCode: dto.Aircraft.CurrentAirport.CountryCode,
                                CountryName: dto.Aircraft.CurrentAirport.CountryName,
                                Latitude: dto.Aircraft.CurrentAirport.Latitude,
                                Longitude: dto.Aircraft.CurrentAirport.Longitude,
                                // HomeWebSiteUrl: dto.CurrentAirport.HomeWebSiteUrl,
                                // WikiUrl: dto.CurrentAirport.WikiUrl,
                            },
                        },
                    } : undefined,
                },
            },
        },
        FlightStatus: flightStatus,
        Company: {
            connectOrCreate: {
                where: {
                    Id: dto.Company.Id,
                },
                create: {
                    Name: dto.Company.Name,
                    AirlineCode: dto.Company.AirlineCode,
                    CreationDate: (dto.Company.CreationDate) ? new Date(dto.Company.CreationDate) : new Date(),
                    Level: dto.Company.Level,
                    LevelXP: dto.Company.LevelXP,
                    Reputation: dto.Company.Reputation,
                    Paused: dto.Company.Paused,
                    LastConnection: (dto.Company.LastConnection) ? new Date(dto.Company.LastConnection) : null,
                    LastReportDate: (dto.Company.LastReportDate) ? new Date(dto.Company.LastReportDate) : null,
                    DifficultyLevel: dto.Company.DifficultyLevel,
                    World: {
                        connect: {
                            Id: dto.Company.WorldId,
                        },
                    },
                    OwnerId: dto.Id,
                },
            },
        },
        VirtualAirline: {
            connect: {
                Id: virtualAirline.Id,
            },
        },
        DepartureAirport: {
            connectOrCreate: {
                where: {
                    Id: dto.DepartureAirport.Id,
                },
                create: {
                    Id: dto.DepartureAirport.Id,
                    ICAO: dto.DepartureAirport.ICAO,
                    IATA: dto.DepartureAirport.IATA,
                    Name: dto.DepartureAirport.Name,
                    Size: dto.DepartureAirport.Size,
                    City: dto.DepartureAirport.City,
                    State: dto.DepartureAirport.State,
                    CountryCode: dto.DepartureAirport.CountryCode,
                    CountryName: dto.DepartureAirport.CountryName,
                    Latitude: dto.DepartureAirport.Latitude,
                    Longitude: dto.DepartureAirport.Longitude,
                },
            },
        },
        ArrivalIntendedAirport: {
            connectOrCreate: {
                where: {
                    Id: dto.ArrivalIntendedAirport.Id,
                },
                create: {
                    Id: dto.ArrivalIntendedAirport.Id,
                    ICAO: dto.ArrivalIntendedAirport.ICAO,
                    IATA: dto.ArrivalIntendedAirport.IATA,
                    Name: dto.ArrivalIntendedAirport.Name,
                    Size: dto.ArrivalIntendedAirport.Size,
                    City: dto.ArrivalIntendedAirport.City,
                    State: dto.ArrivalIntendedAirport.State,
                    CountryCode: dto.ArrivalIntendedAirport.CountryCode,
                    CountryName: dto.ArrivalIntendedAirport.CountryName,
                    Latitude: dto.ArrivalIntendedAirport.Latitude,
                    Longitude: dto.ArrivalIntendedAirport.Longitude,
                },
            },
        },
        ArrivalActualAirport: (dto.ArrivalActualAirport) ? {
            connectOrCreate: {
                where: {
                    Id: dto.ArrivalActualAirport.Id,
                },
                create: {
                    Id: dto.ArrivalActualAirport.Id,
                    ICAO: dto.ArrivalActualAirport.ICAO,
                    IATA: dto.ArrivalActualAirport.IATA,
                    Name: dto.ArrivalActualAirport.Name,
                    Size: dto.ArrivalActualAirport.Size,
                    City: dto.ArrivalActualAirport.City,
                    State: dto.ArrivalActualAirport.State,
                    CountryCode: dto.ArrivalActualAirport.CountryCode,
                    CountryName: dto.ArrivalActualAirport.CountryName,
                    Latitude: dto.ArrivalActualAirport.Latitude,
                    Longitude: dto.ArrivalActualAirport.Longitude,
                },
            },
        } : undefined,
    };
    
    const entity: Flight | null = await scheduler.services.Flight.upsert(query);

    if (!entity) {
        scheduler.logger.error(`Error syncing flight ${dto.Id} for virtual airline ${virtualAirline.Id}`);
        return Promise.reject(new Error(`Error syncing flight ${dto.Id} for virtual airline ${virtualAirline.Id}`));
    }

    return Promise.resolve(entity);
}