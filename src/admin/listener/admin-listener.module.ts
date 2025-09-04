import { Module } from '@nestjs/common';
import { AdminListenerService } from './admin-listener.service';
import { AdminListenerController } from './admin-listener.controller';
import { PrismaModule } from '@prisma/prisma.module';
import { ListenerModule } from 'src/listener/listener.module';

@Module({
  imports: [PrismaModule, ListenerModule],
  providers: [AdminListenerService],
  controllers: [AdminListenerController],
  exports: [AdminListenerService],
})
export class AdminListenerModule {}
