import { Member as PrismaMember, VirtualAirlineRole } from "prisma/generated/prisma";
import { MemberWithCompanyVARole } from "src/member/dto/member-witth-relations";
export type Member = PrismaMember & {
    VARole?: VirtualAirlineRole;
};
export declare class PublicVARole {
    Name: string;
    Permission: number;
    IsDefaultNewRole: boolean;
    Color: string;
    LastRefresh: Date | null;
    constructor(role: VirtualAirlineRole);
}
export declare class PublicMemberDto {
    Id: string;
    CompanyName: string;
    AirlineCode: string;
    Reputation: number;
    VARole?: PublicVARole;
    Flights: number;
    Hours: number;
    Earnings: number;
    LastVAFlightDate: Date | null;
    TotalCargosTransportedLbs: number;
    TotalPAXsTransported: number;
    TotalEarnedCredits: number;
    LastRefresh: Date | null;
    constructor(member: MemberWithCompanyVARole);
}
