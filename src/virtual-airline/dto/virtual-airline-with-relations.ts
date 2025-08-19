import { VirtualAirline, Member, World, VirtualAirlineRole, Aircraft } from "prisma/generated/prisma";

export type VirtualAirlineWithRelations = VirtualAirline & {
    Members?: Member[];
    World?: World;
    VARoles?: VirtualAirlineRole[];
    Fleet?: Aircraft[];
}