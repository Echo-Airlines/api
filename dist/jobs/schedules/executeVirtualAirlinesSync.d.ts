import { type JobSchedulerService } from "../job-scheduler.service";
import { VirtualAirline, VirtualAirlineRole } from "prisma/generated/prisma";
export declare function executeAllVirtualAirlinesSync(scheduler: JobSchedulerService): Promise<VirtualAirline[]>;
export declare function executeVirtualAirlineSync(entity: VirtualAirline, scheduler: JobSchedulerService): Promise<VirtualAirline>;
export declare function executeVirtualAirlineRolesSync(va: VirtualAirline, scheduler: JobSchedulerService): Promise<VirtualAirlineRole[]>;
