import { Module } from "@nestjs/common";
import { PrismaModule } from "@prisma/prisma.module";
import { AdminVirtualAirlineService } from "./admin-virtual-airline.service";
import { AdminVirtualAirlineController } from "./admin-virtual-airline.controller";

@Module({
    imports: [PrismaModule],
    providers: [AdminVirtualAirlineService],
    exports: [AdminVirtualAirlineService],
    controllers: [AdminVirtualAirlineController],
})
export class AdminVirtualAirlineModule {}