import { Module } from '@nestjs/common';
import { AdminListenerService } from './admin-listener.service';
import { AdminListenerController } from './admin-listener.controller';
import { PrismaModule } from '@prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [AdminListenerService],
  controllers: [AdminListenerController],
  exports: [AdminListenerService],
})
export class AdminListenerModule {}
