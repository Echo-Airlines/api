import { Aircraft, Prisma, VirtualAirline } from "prisma/generated/prisma";
import { JobSchedulerService } from "../job-scheduler.service";
import { OnAirAircraft } from "@on-air/types";
import { eachSeries } from "async";

export async function executeVirtualAirlinesFleetSync(scheduler: JobSchedulerService) {
    const virtualAirlines = await scheduler.services.VirtualAirline.findAll();

    for (const virtualAirline of virtualAirlines) {
        await executeVirtualAirlineFleetSync(virtualAirline, scheduler);
    }
}

async function executeVirtualAirlineFleetSync(virtualAirline: VirtualAirline, scheduler: JobSchedulerService) {
    return new Promise(async (resolve, reject) => {
        const oAFleet: OnAirAircraft[] = await scheduler.services.OnAir.getVirtualAirlineFleet(virtualAirline.Id);

        if (oAFleet.length === 0) {
            scheduler.logger.warn(`No fleet found for virtual airline ${virtualAirline.Id}`);
            return resolve(null);
        }

        const results: Aircraft[] = [];

        await eachSeries(oAFleet, async (aircraft: OnAirAircraft) => {
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

async function executeVirtualAirlineAircraftSync(dto: OnAirAircraft, virtualAirline: VirtualAirline, scheduler: JobSchedulerService) {
    const data: Prisma.AircraftCreateInput = {
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
                    // HomeWebSiteUrl: dto.CurrentAirport.HomeWebSiteUrl,
                    // WikiUrl: dto.CurrentAirport.WikiUrl,
                },
            },
        } : undefined,
        AircraftMaintenance: (dto.AircraftMaintenance) ? {
            connectOrCreate: {
                where: {
                    Id: dto.AircraftMaintenance.Id,
                },
                create: {
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