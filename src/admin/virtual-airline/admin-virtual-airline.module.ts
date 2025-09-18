import { Module } from "@nestjs/common";
import { DatabaseModule } from "@database/database.module";
import { AdminVirtualAirlineService } from "./admin-virtual-airline.service";
import { AdminVirtualAirlineController } from "./admin-virtual-airline.controller";

@Module({
    imports: [DatabaseModule],
    providers: [AdminVirtualAirlineService],
    exports: [AdminVirtualAirlineService],
    controllers: [AdminVirtualAirlineController],
})
export class AdminVirtualAirlineModule {}