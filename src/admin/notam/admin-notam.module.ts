import { Module } from '@nestjs/common';
import { PrismaModule } from '@prisma/prisma.module';
import { AdminNotamService } from './admin-notam.service';
import { AdminNotamController } from './admin-notam.controller';

@Module({
  imports: [PrismaModule],
  controllers: [AdminNotamController],
  providers: [AdminNotamService],
  exports: [AdminNotamService],
})
export class AdminNotamModule {}
