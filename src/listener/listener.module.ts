import { Module } from '@nestjs/common';
import { ListenerService } from './listener.service';
import { ListenerController } from './listener.controller';
import { PrismaModule } from '@prisma/prisma.module';
import { DiscordModule } from '@discord/discord.module';

@Module({
  imports: [PrismaModule, DiscordModule],
  providers: [ListenerService],
  controllers: [ListenerController],
  exports: [ListenerService],
})
export class ListenerModule {}
