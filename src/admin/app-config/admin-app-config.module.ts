import { DatabaseModule } from "@database/database.module";
import { AdminAppConfigService } from "./admin-app-config.service";
import { AdminAppConfigController } from "./admin-app-config.controller";
import { Module } from "@nestjs/common";

@Module({
    imports: [DatabaseModule],
    exports: [AdminAppConfigService],
    providers: [AdminAppConfigService],
    controllers: [AdminAppConfigController],
})
export class AdminAppConfigModule {}