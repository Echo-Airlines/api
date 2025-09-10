"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicMemberDto = exports.PublicVARole = void 0;
class PublicVARole {
    Name;
    Permission;
    IsDefaultNewRole;
    Color;
    LastRefresh;
    constructor(role) {
        this.Name = role.Name;
        this.Permission = role.Permission;
        this.IsDefaultNewRole = role.IsDefaultNewRole;
        this.Color = role.Color;
        this.LastRefresh = role.LastRefresh;
    }
}
exports.PublicVARole = PublicVARole;
class PublicMemberDto {
    Id;
    CompanyName;
    AirlineCode;
    Reputation;
    VARole;
    Flights;
    Hours;
    Earnings;
    LastVAFlightDate;
    TotalCargosTransportedLbs;
    TotalPAXsTransported;
    TotalEarnedCredits;
    LastRefresh;
    constructor(member) {
        this.Id = member.Id;
        this.CompanyName = member.Company?.Name ?? '';
        this.AirlineCode = member.Company?.AirlineCode ?? '';
        this.Reputation = member.Company?.Reputation?.toNumber() ?? 0;
        this.VARole = (member.VARole) ? new PublicVARole(member.VARole) : undefined;
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
exports.PublicMemberDto = PublicMemberDto;
//# sourceMappingURL=public-member.dto.js.map