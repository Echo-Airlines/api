import { Company, Member, Prisma, VirtualAirline } from "prisma/generated/prisma";
import { JobSchedulerService } from "../job-scheduler.service";
import { OnAirMember } from "@on-air/types";
import { eachSeries } from "async";
import { VirtualAirlineWithMembersWorld } from "@virtual-airline/dto/virtual-airline-with-relations";


export async function executeVirtualAirlinesMembersSync(scheduler: JobSchedulerService) {
    const virtualAirlines: VirtualAirlineWithMembersWorld[] = await scheduler.services.VirtualAirline.findAll({
        include: {
            Members: true,
            World: true,
        }
    }) as VirtualAirlineWithMembersWorld[];

    for (const virtualAirline of virtualAirlines) {
        await executeVirtualAirlineMembersSync(virtualAirline, scheduler);
        await deactivateVirtualAirlineMembers(virtualAirline, scheduler);
    }
}

async function executeVirtualAirlineMembersSync(virtualAirline: VirtualAirlineWithMembersWorld, scheduler: JobSchedulerService) {
    return new Promise(async (resolve, reject) => {
        // get the members for OnAir
        const oAMembers: OnAirMember[]|null = await scheduler.services.OnAir.getVirtualAirlineMembers(virtualAirline.Id);

        if (!oAMembers || oAMembers.length === 0) {
            scheduler.logger.warn(`No members found for virtual airline ${virtualAirline.Id}`);
            return resolve(null);
        }

        const results: Member[] = [];

        // loop through the OnAir members and upsert each member
        await eachSeries(oAMembers, async (oAMember: OnAirMember) => {
            // update the member by executing the executeVirtualAirlineMemberSync function
            const entity = await executeVirtualAirlineMemberSync(oAMember, virtualAirline, scheduler);

            // then push the results into the results array.
            results.push(entity);

            return true;
        }, (err) => {
            if (err) {
                scheduler.logger.error(`Error syncing members for virtual airline ${virtualAirline.Id}: ${err}`);
                return reject(err);
            }

            return resolve(results);
        });
    });
}

async function executeVirtualAirlineMemberSync(dto: OnAirMember, virtualAirline: VirtualAirlineWithMembersWorld, scheduler: JobSchedulerService) {
    // try to find the member inf the database
    let member = await scheduler.services.Member.findById(dto.Id, {
        include: {
            Company: true,
        },
    });

    if (!member) {
        const _dto: Prisma.MemberCreateInput = {
            Id: dto.Id,
            Company: {
                connectOrCreate: {
                    where: {
                        Id: dto.Company.Id,
                    },
                    create: {
                        Id: dto.Company.Id,
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
                    },
                },
            },
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
                connectOrCreate: {
                    where: {
                        Id: dto.VARoleId,
                    },
                    create: {
                        Id: dto.VARoleId,
                        Name: dto.VARole.Name,
                        Permission: dto.VARole.Permission,
                        IsDefaultNewRole: dto.VARole.IsDefaultNewRole,
                        Color: dto.VARole.Color,
                        PayPercent: dto.VARole.PayPercent,
                        IsHidden: dto.VARole.IsHidden,
                        RestrictLoadingVAJobsIntoNonVAAircraft: dto.VARole.RestrictLoadingVAJobsIntoNonVAAircraft,
                        RestrictLoadingNonVAJobsIntoVAAircraft: dto.VARole.RestrictLoadingNonVAJobsIntoVAAircraft,
                        PayWeekly: dto.VARole.PayWeekly,
                        PayPerFlightHour: dto.VARole.PayPerFlightHour,
                        LastRefresh: new Date(),
                        VirtualAirline: {
                            connect: {
                                Id: virtualAirline.Id,
                            },
                        },
                    },
                },
            }
        };

        member = await scheduler.services.Member.create(_dto);
    } else {
        const _dto: Prisma.MemberUpdateInput = {
            Id: dto.Id,
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
                connectOrCreate: {
                    where: {
                        Id: dto.VARoleId,
                    },
                    create: {
                        Id: dto.VARoleId,
                        Name: dto.VARole.Name,
                        Permission: dto.VARole.Permission,
                        IsDefaultNewRole: dto.VARole.IsDefaultNewRole,
                        Color: dto.VARole.Color,
                        PayPercent: dto.VARole.PayPercent,
                        IsHidden: dto.VARole.IsHidden,
                        RestrictLoadingVAJobsIntoNonVAAircraft: dto.VARole.RestrictLoadingVAJobsIntoNonVAAircraft,
                        RestrictLoadingNonVAJobsIntoVAAircraft: dto.VARole.RestrictLoadingNonVAJobsIntoVAAircraft,
                        PayWeekly: dto.VARole.PayWeekly,
                        PayPerFlightHour: dto.VARole.PayPerFlightHour,
                        LastRefresh: new Date(),
                        VirtualAirline: {
                            connect: {
                                Id: virtualAirline.Id,
                            },
                        },
                    },
                },
            },
        };

        member = await scheduler.services.Member.update(dto.Id, _dto);
    }
    
    return member;
}

async function deactivateVirtualAirlineMembers(virtualAirline: VirtualAirlineWithMembersWorld, scheduler: JobSchedulerService) {

    const oAMembers: OnAirMember[] = await scheduler.services.OnAir.getVirtualAirlineMembers(virtualAirline.Id) || [];
    const results: Member[] = [];
    
    if (virtualAirline.Members && virtualAirline.Members.length > 0) {
        for (const member of virtualAirline.Members) {
            if (!oAMembers.find((m) => m.Id === member.Id)) {
                const entity = await scheduler.services.VirtualAirline.Member_deactivate(member.Id);
                scheduler.logger.warn(`Member ${entity.Company.AirlineCode} is no longer an active OnAir member, marking as inactive in the database.`);

                // then push the results into the results array.
                results.push(entity);
            }
        }
    }

    return results;
}