import { Prisma } from "prisma/generated/prisma";

export type MemberWithRelations = Prisma.MemberGetPayload<{
    include: {
        Company: true,
        VirtualAirline: true,
        VARole: true,
        Flights: true,
        User: true,
        FlightRoutes: true,
    }
}>;

export type MemberWithCompanyVARole = Prisma.MemberGetPayload<{
    include: {
        Company: true,
        VARole: true,
    }
}>;