import { Module } from '@nestjs/common';
import { ListenerService } from './listener.service';
import { ListenerController } from './listener.controller';
import { PrismaModule } from '@prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ListenerService, ListenerService],
  controllers: [ListenerController],
  exports: [ListenerService],
})
export class ListenerModule {}
