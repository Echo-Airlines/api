import { Module } from "@nestjs/common";
import { DatabaseModule } from "@database/database.module";
import { AdminUserService } from "./admin-user.service";
import { AdminUserController } from "./admin-user.controller";
import { AdminRoleController } from "./admin-role.controller";
import { AdminInviteCodeController } from "./admin-invite-code.controller";
import { HashModule } from "@hash/hash.module";
import { EmailModule } from "@email/email.module";
import { EmailService } from "@email/email.service";

@Module({
    imports: [DatabaseModule, HashModule, EmailModule],
    providers: [AdminUserService, EmailService],
    exports: [AdminUserService],
    controllers: [AdminUserController, AdminRoleController, AdminInviteCodeController],
})
export class AdminUserModule {}