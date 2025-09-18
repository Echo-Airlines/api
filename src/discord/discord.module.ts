import { Module } from '@nestjs/common';
import { DiscordService } from './discord.service';
import { DatabaseModule } from '@database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [DiscordService],
  exports: [DiscordService]
})
export class DiscordModule {}
