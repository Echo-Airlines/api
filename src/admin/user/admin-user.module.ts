import { Module } from "@nestjs/common";
import { PrismaModule } from "@prisma/prisma.module";
import { AdminUserService } from "./admin-user.service";
import { AdminUserController } from "./admin-user.controller";
import { AdminRoleController } from "./admin-role.controller";
import { AdminInviteCodeController } from "./admin-invite-code.controller";

@Module({
    imports: [PrismaModule],
    providers: [AdminUserService],
    exports: [AdminUserService],
    controllers: [AdminUserController, AdminRoleController, AdminInviteCodeController],
})
export class AdminUserModule {}