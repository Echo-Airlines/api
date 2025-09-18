import { Module } from "@nestjs/common";
import { DatabaseModule } from "@database/database.module";
import { AdminDiscordController } from "./admin-discord.controller";
import { AdminDiscordService } from "./admin-discord.service";
import { DiscordService } from "@discord/discord.service";

@Module({
    imports: [DatabaseModule],
    providers: [AdminDiscordService, DiscordService],
    exports: [AdminDiscordService],
    controllers: [AdminDiscordController],
})
export class AdminDiscordModule {}