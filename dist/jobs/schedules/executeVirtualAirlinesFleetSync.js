"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeVirtualAirlinesFleetSync = executeVirtualAirlinesFleetSync;
const async_1 = require("async");
async function executeVirtualAirlinesFleetSync(scheduler) {
    const virtualAirlines = await scheduler.services.VirtualAirline.findAll();
    for (const virtualAirline of virtualAirlines) {
        await executeVirtualAirlineFleetSync(virtualAirline, scheduler);
    }
}
async function executeVirtualAirlineFleetSync(virtualAirline, scheduler) {
    return new Promise(async (resolve, reject) => {
        const oAFleet = await scheduler.services.OnAir.getVirtualAirlineFleet(virtualAirline.Id);
        if (oAFleet.length === 0) {
            scheduler.logger.warn(`No fleet found for virtual airline ${virtualAirline.Id}`);
            return resolve(null);
        }
        const results = [];
        await (0, async_1.eachSeries)(oAFleet, async (aircraft) => {
            const entity = await executeVirtualAirlineAircraftSync(aircraft, virtualAirline, scheduler);
            results.push(entity);
            return true;
        }, (err) => {
            if (err) {
                scheduler.logger.error(`Error syncing aircraft fleet for virtual airline ${virtualAirline.Id}: ${err}`);
                return reject(err);
            }
            return resolve(results);
        });
    });
}
async function executeVirtualAirlineAircraftSync(dto, virtualAirline, scheduler) {
    const data = {
        Id: dto.Id,
        Identifier: dto.Identifier,
        DisplayName: dto.AircraftType.DisplayName,
        LastRefresh: new Date(),
        AircraftClass: {
            connectOrCreate: {
                where: {
                    Id: dto.AircraftType.AircraftClassId,
                },
                create: {
                    Id: dto.AircraftType.AircraftClassId,
                    Name: dto.AircraftType.AircraftClass.Name,
                    ShortName: dto.AircraftType.AircraftClass.ShortName,
                },
            },
        },
        AircraftStatus: {
            connect: {
                Id: dto.AircraftStatus,
            },
        },
        VirtualAirline: {
            connect: {
                Id: virtualAirline.Id,
            },
        },
        CurrentAirport: (dto.CurrentAirport) ? {
            connectOrCreate: {
                where: {
                    ICAO: dto.CurrentAirport.ICAO,
                },
                create: {
                    Id: dto.CurrentAirport.Id,
                    ICAO: dto.CurrentAirport.ICAO,
                    IATA: dto.CurrentAirport.IATA,
                    Name: dto.CurrentAirport.Name,
                    Size: dto.CurrentAirport.Size,
                    City: dto.CurrentAirport.City,
                    State: dto.CurrentAirport.State,
                    CountryCode: dto.CurrentAirport.CountryCode,
                    CountryName: dto.CurrentAirport.CountryName,
                    Latitude: dto.CurrentAirport.Latitude,
                    Longitude: dto.CurrentAirport.Longitude,
                },
            },
        } : undefined,
        AircraftMaintenance: (dto.AircraftMaintenance) ? {
            connectOrCreate: {
                where: {
                    Id: dto.AircraftMaintenance.Id,
                },
                create: {
                    Id: dto.AircraftMaintenance.Id,
                    AnnualCheckup: dto.AircraftMaintenance.AnnualCheckup,
                    Inspection100Hours: dto.AircraftMaintenance.Inspection100Hours,
                    FailuresRepair: dto.AircraftMaintenance.FailuresRepair,
                    AirframeRepair: dto.AircraftMaintenance.AirframeRepair,
                    AirframeReplace: dto.AircraftMaintenance.AirframeReplace,
                    EcoSeats: dto.AircraftMaintenance.EcoSeats,
                    BusSeats: dto.AircraftMaintenance.BusSeats,
                    FirstClassSeats: dto.AircraftMaintenance.FirstClassSeats,
                    AirframeRepairCondition: dto.AircraftMaintenance.AirframeRepairCondition,
                    MaintenanceFBOId: dto.AircraftMaintenance.MaintenanceFBOId,
                    RemainingMaintenanceWorkHours: dto.AircraftMaintenance.RemainingMaintenanceWorkHours,
                    Amount: dto.AircraftMaintenance.Amount,
                },
            },
        } : undefined,
    };
    const entity = await scheduler.services.Aircraft.upsert(data);
    return entity;
}
//# sourceMappingURL=executeVirtualAirlinesFleetSync.js.map