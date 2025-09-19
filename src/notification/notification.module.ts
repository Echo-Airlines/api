import { Module } from '@nestjs/common';
import { DatabaseModule } from '@database/database.module';
import { DiscordModule } from '@discord/discord.module';
import { NotificationService } from './notification.service';

@Module({
  imports: [DatabaseModule, DiscordModule],
  providers: [NotificationService],
  exports: [NotificationService],
})
export class NotificationModule {}
