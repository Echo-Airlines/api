import { Module } from "@nestjs/common";
import { AdminUserModule } from "./user/admin-user.module";
import { AdminVirtualAirlineModule } from "./virtual-airline/admin-virtual-airline.module";
import { AdminDiscordModule } from "./discord/admin-discord.module";
import { AdminListenerModule } from "./listener/admin-listener.module";
import { AdminAppConfigModule } from "./app-config/admin-app-config.module";

@Module({
    imports: [AdminUserModule, AdminVirtualAirlineModule, AdminDiscordModule, AdminListenerModule, AdminAppConfigModule],
    providers: [],
    exports: [],
    controllers: [],
})
export class AdminModule {}