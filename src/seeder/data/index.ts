import SeedData_Permissions from "./permissions";
import SeedData_Roles from "./roles";
import SeedData_Users from "./users";
import SeedData_Worlds from "./worlds";
import SeedData_Liveries from "./liveries";
import SeedData_Jobs from "./jobs";
import SeedData_AppConfig from "./appConfig";
import SeedData_AircraftStatuses from "./aircraftStatuses";
import SeedData_AircraftClasses from "./aircraftClasses";
import SeedData_VirtualAirline from "./virtualAirline";
import { Prisma } from "prisma/generated/prisma";

export default {
    Permission: SeedData_Permissions,
    Role: SeedData_Roles,
    User: SeedData_Users,
    World: SeedData_Worlds,
    Livery: SeedData_Liveries,
    Job: SeedData_Jobs,
    AppConfig: SeedData_AppConfig,
    AircraftStatus: SeedData_AircraftStatuses,
    AircraftClass: SeedData_AircraftClasses,
    VirtualAirline: SeedData_VirtualAirline,
};

export type SeedData = {
    Role: Prisma.RoleCreateInput[];
    Permission: Prisma.PermissionCreateInput[];
    User: Prisma.UserCreateInput[];
    World: Prisma.WorldCreateInput[];
    Livery: Prisma.LiveryCreateInput[];
    Job: Prisma.JobCreateInput[];
    AppConfig: Prisma.AppConfigCreateInput;
    AircraftStatus: Prisma.AircraftStatusCreateInput[];
    AircraftClass: Prisma.AircraftClassCreateInput[];
    VirtualAirline: Prisma.VirtualAirlineCreateInput|undefined;
};