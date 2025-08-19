import { Decimal } from "@prisma/client/runtime/library";
import { Member as PrismaMember, VirtualAirlineRole } from "prisma/generated/prisma";
import { MemberWithRelations } from "src/member/dto/member-witth-relations";

export type Member = PrismaMember & {
    VARole?: VirtualAirlineRole;
}

export class PublicMemberDto {
    Id: string;
    CompanyName: string;
    AirlineCode: string;
    Reputation: number;
    VARole?: string;
    Flights: number;
    Hours: number;
    Earnings: number;
    LastVAFlightDate: Date|null;
    TotalCargosTransportedLbs: number;
    TotalPAXsTransported: number;
    TotalEarnedCredits: number;
    LastRefresh: Date|null;

    constructor(member: MemberWithRelations) {
        this.Id = member.Id;
        this.CompanyName = member.Company?.Name ?? '';
        this.AirlineCode = member.Company?.AirlineCode ?? '';
        this.Reputation = member.Company?.Reputation?.toNumber() ?? 0;
        this.VARole = member.VARole?.Name;
        this.Flights = member.NumberOfFlights;
        this.Hours = member.FlightHours.toNumber();
        this.Earnings = member.TotalEarnedCredits.toNumber();
        this.LastVAFlightDate = (member.LastVAFlightDate) ? new Date(member.LastVAFlightDate) : null;
        this.TotalCargosTransportedLbs = member.TotalCargosTransportedLbs;
        this.TotalPAXsTransported = member.TotalPAXsTransported;
        this.TotalEarnedCredits = member.TotalEarnedCredits.toNumber();
        this.LastRefresh = (member.LastRefresh) ? new Date(member.LastRefresh) : null;
    }
}