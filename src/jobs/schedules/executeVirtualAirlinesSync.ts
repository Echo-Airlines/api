import { OnAirVirtualAirline } from "@on-air/types";
import { type JobSchedulerService } from "../job-scheduler.service";
import { VirtualAirline } from "prisma/generated/prisma";
import { eachSeries } from "async";

export async function executeAllVirtualAirlinesSync(scheduler: JobSchedulerService): Promise<VirtualAirline[]> {
    const virtualAirlines: VirtualAirline[] = await scheduler.services.VirtualAirline.findAll();

    if (virtualAirlines.length === 0) {
        scheduler.logger.warn('No virtual airlines found to sync');
        return [];
    }

    const results: VirtualAirline[] = [];
    await eachSeries(virtualAirlines, async (va: VirtualAirline) => {
        const entity = await executeVirtualAirlineSync(va, scheduler);
        
        results.push(entity);
    });

    return results;
}

export async function executeVirtualAirlineSync(entity: VirtualAirline, scheduler: JobSchedulerService): Promise<VirtualAirline> {
    // Get data from OnAir
    scheduler.logger.debug(`Executing virtual airline sync for virtual airline ${entity.Id}`);
    const onAirData: OnAirVirtualAirline | null = await scheduler.services.OnAir.getVirtualAirline(entity.Id);
    if (!onAirData) {
        throw new Error('Failed to fetch virtual airline data from OnAir');
    }

    // Convert to our entity format and upsert
    entity = await scheduler.services.VirtualAirline.upsertById({
        Id: onAirData.Id,
        ApiKey: entity.ApiKey,
        Identifier: onAirData.AirlineCode || onAirData.Id, // Fallback to Id if AirlineCode is not available
        Name: onAirData.Name,
        Description: onAirData.Description,
        LastDividendsDistribution: onAirData.LastDividendsDistribution ? new Date(onAirData.LastDividendsDistribution) : new Date(),
        LastComputationDate: onAirData.LastComputationDate ? new Date(onAirData.LastComputationDate) : new Date(),
        ComputedMemberCount: onAirData.MemberCount || 0,
        ComputedAircraftsCount: onAirData.ComputedAircraftsCount,
        ComputedNumberOfFlights30Days: onAirData.ComputedNumberOfFlights30Days,
        ComputedNumberOfFlightHours30Days: onAirData.ComputedNumberOfFlightHours30Days,
        ComputedMostUsedAirports: onAirData.ComputedMostUsedAirports || '[]',
        LastConnection: onAirData.LastConnection ? new Date(onAirData.LastConnection) : new Date(),
        LastReportDate: onAirData.LastReportDate ? new Date(onAirData.LastReportDate) : new Date(),
        Reputation: (onAirData.Reputation) ? parseInt(onAirData.Reputation.toFixed(3)) : 0,
        CreationDate: onAirData.CreationDate ? new Date(onAirData.CreationDate) : new Date(),
        DifficultyLevel: onAirData.DifficultyLevel || 0,
        Level: onAirData.Level || 0,
        LevelXP: onAirData.LevelXP || 0,
        TotalContractsCompleted: onAirData.TotalContractsCompleted || 0,
        TotalContractsEarnedCredits: onAirData.TotalContractsEarnedCredits || 0,
        LastRefresh: new Date(),
        World: {
            connect: {
                Id: onAirData.WorldId,
            },
        },
    });

    scheduler.logger.debug(`Virtual airline sync completed for virtual airline ${entity.Identifier}`);

    return entity;
}