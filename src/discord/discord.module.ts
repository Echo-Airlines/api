import { Module } from '@nestjs/common';
import { DiscordService } from './discord.service';
import { PrismaModule } from '@prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [],
  providers: [DiscordService],
  exports: [DiscordService]
})
export class DiscordModule {}
