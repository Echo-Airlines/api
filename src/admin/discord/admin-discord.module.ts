import { Module } from "@nestjs/common";
import { PrismaModule } from "@prisma/prisma.module";
import { AdminDiscordController } from "./admin-discord.controller";
import { AdminDiscordService } from "./admin-discord.service";
import { DiscordService } from "@discord/discord.service";

@Module({
    imports: [PrismaModule],
    providers: [AdminDiscordService, DiscordService],
    exports: [AdminDiscordService],
    controllers: [AdminDiscordController],
})
export class AdminDiscordModule {}