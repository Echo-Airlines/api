import { Decimal } from "@prisma/client/runtime/library";
import { Member as PrismaMember, VirtualAirlineRole } from "prisma/generated/prisma";

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

    constructor(member: Member) {
        this.Id = member.Id;
        this.CompanyName = member.CompanyName;
        this.AirlineCode = member.AirlineCode;
        this.Reputation = member.Reputation.toNumber();
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