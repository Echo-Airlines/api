"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeAllVirtualAirlinesSync = executeAllVirtualAirlinesSync;
exports.executeVirtualAirlineSync = executeVirtualAirlineSync;
exports.executeVirtualAirlineRolesSync = executeVirtualAirlineRolesSync;
const async_1 = require("async");
async function executeAllVirtualAirlinesSync(scheduler) {
    const virtualAirlines = await scheduler.services.VirtualAirline.findAll();
    if (virtualAirlines.length === 0) {
        scheduler.logger.warn('No virtual airlines found to sync');
        return [];
    }
    const results = [];
    await (0, async_1.eachSeries)(virtualAirlines, async (va) => {
        const entity = await executeVirtualAirlineSync(va, scheduler);
        results.push(entity);
    });
    return results;
}
async function executeVirtualAirlineSync(entity, scheduler) {
    scheduler.logger.debug(`Executing virtual airline sync for virtual airline ${entity.Id}`);
    const onAirData = await scheduler.services.OnAir.getVirtualAirline(entity.Id);
    if (!onAirData) {
        throw new Error('Failed to fetch virtual airline data from OnAir');
    }
    entity = await scheduler.services.VirtualAirline.upsertById({
        Id: onAirData.Id,
        ApiKey: entity.ApiKey,
        Identifier: onAirData.AirlineCode || onAirData.Id,
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
    const roles = await executeVirtualAirlineRolesSync(entity, scheduler);
    return entity;
}
async function executeVirtualAirlineRolesSync(va, scheduler) {
    scheduler.logger.debug(`Executing virtual airline roles sync for virtual airline ${va.Id}`);
    const onAirData = await scheduler.services.OnAir.getVirtualAirlineRoles(va.Id);
    if (!onAirData) {
        throw new Error('Failed to fetch virtual airline roles data from OnAir');
    }
    const results = [];
    await (0, async_1.eachSeries)(onAirData, async (role) => {
        const entity = await executeVirtualAirlineRoleSync(role, va, scheduler);
        results.push(entity);
    });
    return results;
}
async function executeVirtualAirlineRoleSync(dto, va, scheduler) {
    const data = {
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
    };
    const entity = await scheduler.services.VirtualAirline.VARole_upsert(data);
    return entity;
}
//# sourceMappingURL=executeVirtualAirlinesSync.js.map