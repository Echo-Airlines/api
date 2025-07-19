import { Module } from "@nestjs/common";
import { PrismaModule } from "@prisma/prisma.module";
import { AdminUserService } from "./admin-user.service";
import { AdminUserController } from "./admin-user.controller";

@Module({
    imports: [PrismaModule],
    providers: [AdminUserService],
    exports: [AdminUserService],
    controllers: [AdminUserController],
})
export class AdminUserModule {}