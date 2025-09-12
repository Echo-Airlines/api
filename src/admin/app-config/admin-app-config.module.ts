import { PrismaModule } from "@prisma/prisma.module";
import { AdminAppConfigService } from "./admin-app-config.service";
import { AdminAppConfigController } from "./admin-app-config.controller";
import { Module } from "@nestjs/common";

@Module({
    imports: [PrismaModule],
    exports: [AdminAppConfigService],
    providers: [AdminAppConfigService],
    controllers: [AdminAppConfigController],
})
export class AdminAppConfigModule {}