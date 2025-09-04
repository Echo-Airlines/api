import { Module } from '@nestjs/common';
import { ListenerService } from './listener.service';
import { ListenerController } from './listener.controller';
import { PrismaModule } from '@prisma/prisma.module';
import { DiscordModule } from '@discord/discord.module';
import { WebsocketModule } from '@websocket/websocket.module';

@Module({
  imports: [PrismaModule, DiscordModule, WebsocketModule],
  providers: [ListenerService],
  controllers: [ListenerController],
  exports: [ListenerService],
})
export class ListenerModule {}
