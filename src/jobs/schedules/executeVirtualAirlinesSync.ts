import { OnAirVirtualAirline, OnAirVirtualAirlineRole } from "@on-air/types";
import { type JobSchedulerService } from "../job-scheduler.service";
import { Prisma, VirtualAirline, VirtualAirlineRole } from "prisma/generated/prisma";
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
        ComputedMemberCount: onAirData.ComputedMemberCount || 0,
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

    // sync roles
    const roles = await executeVirtualAirlineRolesSync(entity, scheduler);

    return entity;
}

export async function executeVirtualAirlineRolesSync(va: VirtualAirline, scheduler: JobSchedulerService): Promise<VirtualAirlineRole[]> {
    // Get data from OnAir
    scheduler.logger.debug(`Executing virtual airline roles sync for virtual airline ${va.Id}`);

    const onAirData: OnAirVirtualAirlineRole[] | null = await scheduler.services.OnAir.getVirtualAirlineRoles(va.Id);
    if (!onAirData) {
        throw new Error('Failed to fetch virtual airline roles data from OnAir');
    }

    const results: VirtualAirlineRole[] = [];
    await eachSeries(onAirData, async (role: OnAirVirtualAirlineRole) => {
        const entity = await executeVirtualAirlineRoleSync(role, va, scheduler);
        
        results.push(entity);
    });

    return results;
}

async function executeVirtualAirlineRoleSync(dto: OnAirVirtualAirlineRole, va: VirtualAirline, scheduler: JobSchedulerService): Promise<VirtualAirlineRole> {
    const data: Prisma.VirtualAirlineRoleCreateInput = {
        Id: dto.Id,
        Name: dto.Name,
        Permission: dto.Permission,
        IsDefaultNewRole: dto.IsDefaultNewRole,
        Color: dto.Color,
        PayPercent: dto.PayPercent,
        IsHidden: dto.IsHidden,
        RestrictLoadingVAJobsIntoNonVAAircraft: dto.RestrictLoadingVAJobsIntoNonVAAircraft,
        RestrictLoadingNonVAJobsIntoVAAircraft: dto.RestrictLoadingNonVAJobsIntoVAAircraft,
        PayWeekly: dto.PayWeekly,
        PayPerFlightHour: dto.PayPerFlightHour,
        LastRefresh: new Date(),
        VirtualAirline: {
            connect: {
                Id: va.Id,
            },
        },
    }
    const entity = await scheduler.services.VirtualAirline.VARole_upsert(data);
    return entity;
}
