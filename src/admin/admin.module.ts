import { Module } from "@nestjs/common";
import { AdminUserModule } from "./user/admin-user.module";
import { AdminVirtualAirlineModule } from "./virtual-airline/admin-virtual-airline.module";

@Module({
    imports: [AdminUserModule, AdminVirtualAirlineModule],
    providers: [],
    exports: [],
    controllers: [],
})
export class AdminModule {}