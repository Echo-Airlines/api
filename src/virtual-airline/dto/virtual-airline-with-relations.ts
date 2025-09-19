import { Prisma } from "prisma/generated/prisma";

export type VirtualAirlineWithRelations = Prisma.VirtualAirlineGetPayload<{
    include: {
        Members: true;
        World: true;
        VARoles: true;
        Fleet: true;
    }
}>;

export type VirtualAirlineWithWorld = Prisma.VirtualAirlineGetPayload<{
    include: {
        World: true;
    }
}>;

export type VirtualAirlineWithMembersWorld = Prisma.VirtualAirlineGetPayload<{
    include: {
        Members: true,
        World: true;
    }
}>;