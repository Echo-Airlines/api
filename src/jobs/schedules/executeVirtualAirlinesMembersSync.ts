import { Member, Prisma, VirtualAirline } from "prisma/generated/prisma";
import { JobSchedulerService } from "../job-scheduler.service";
import { OnAirMember } from "@on-air/types";
import { eachSeries } from "async";

export async function executeVirtualAirlinesMembersSync(scheduler: JobSchedulerService) {
    const virtualAirlines = await scheduler.services.VirtualAirline.findAll();

    for (const virtualAirline of virtualAirlines) {
        await executeVirtualAirlineMembersSync(virtualAirline, scheduler);
    }
}

async function executeVirtualAirlineMembersSync(virtualAirline: VirtualAirline, scheduler: JobSchedulerService) {
    // get the members for OnAir
    const oAMembers: OnAirMember[]|null = await scheduler.services.OnAir.getVirtualAirlineMembers(virtualAirline.Id);
    if (!oAMembers || oAMembers.length === 0) {
        scheduler.logger.warn(`No members found for virtual airline ${virtualAirline.Id}`);
        return;
    }

    const results: Member[] = [];
    // loop through the members and upsert each member
    await eachSeries(oAMembers, async (member: OnAirMember) => {
        const entity = await executeVirtualAirlineMemberSync(member, virtualAirline, scheduler);

        results.push(entity);
    });
}

async function executeVirtualAirlineMemberSync(dto: OnAirMember, virtualAirline: VirtualAirline, scheduler: JobSchedulerService) {
    const data: Prisma.MemberCreateInput = {
        Id: dto.Id,
        CompanyId: dto.CompanyId,
        CompanyName: dto.Company.Name,
        AirlineCode: dto.Company.AirlineCode,
        LastConnection: new Date(dto.Company.LastConnection),
        Reputation: dto.Company.Reputation,
        CompanyCreationDate: new Date(dto.Company.CreationDate),
        CompanyLevel: dto.Company.Level,
        CompanyLevelXP: dto.Company.LevelXP,
        TotalCargosTransportedLbs: dto.TotalCargosTransportedLbs,
        TotalPAXsTransported: dto.TotalPAXsTransported,
        TotalEarnedCredits: dto.TotalEarnedCredits,
        TotalSpentCredits: dto.TotalSpentCredits,
        NumberOfFlights: dto.NumberOfFlights,
        FlightHours: dto.FlightHours,
        Color: dto.Color,
        ReputationImpact: dto.ReputationImpact,
        LastVAFlightDate: dto.LastVAFlightDate ? new Date(dto.LastVAFlightDate) : null,
        LastRefresh: new Date(),
        VirtualAirline: {
            connect: {
                Id: virtualAirline.Id,
            },
        },
        VARole: {
            connect: {
                Id: dto.VARoleId,
            },
        }
    }

    const entity = await scheduler.services.VirtualAirline.Member_upsert(data);

    return entity;
}