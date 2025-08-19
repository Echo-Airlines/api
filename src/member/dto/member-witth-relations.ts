import { Company, Flight, Member as PrismaMember, Member, User, VirtualAirline, VirtualAirlineRole, FlightRoute } from "prisma/generated/prisma";

export type MemberWithRelations = PrismaMember & {
    Company?: Company;
    VARole?: VirtualAirlineRole;
    VirtualAirline?: VirtualAirline;
    Flights?: Flight[];
    User?: User;
    FlightRoutes?: FlightRoute[];
}