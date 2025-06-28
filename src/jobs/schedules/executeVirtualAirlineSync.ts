import { IJobSchedulerServices } from "../job-scheduler.service";

export async function executeVirtualAirlineSync(virtualAirlineId: string, services: IJobSchedulerServices) {
    // Get data from OnAir
    const onAirData = await services.OnAir.getVirtualAirline(virtualAirlineId);
    if (!onAirData) {
        throw new Error('Failed to fetch virtual airline data from OnAir');
    }

    // Convert to our entity format and upsert
    await services.VirtualAirline.upsertById({
        Id: onAirData.Id,
        Identifier: onAirData.AirlineCode || onAirData.Id, // Fallback to Id if AirlineCode is not available
        Name: onAirData.Name,
        Description: onAirData.Description,
        LastDividendsDistribution: onAirData.LastDividendsDistribution ? new Date(onAirData.LastDividendsDistribution) : new Date(),
        LastComputationDate: onAirData.LastComputationDate ? new Date(onAirData.LastComputationDate) : new Date(),
        ComputedMemberCount: onAirData.MemberCount || 0,
        ComputedAircraftsCount: 0, // This needs to be computed from the fleet
        ComputedNumberOfFlights30Days: 0, // This needs to be computed from flights
        ComputedNumberOfFlightHours30Days: 0, // This needs to be computed from flights
        ComputedMostUsedAirports: '[]', // This needs to be computed from flights
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
    });
}