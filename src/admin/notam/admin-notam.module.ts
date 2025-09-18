import { Module } from '@nestjs/common';
import { DatabaseModule } from '@database/database.module';
import { AdminNotamService } from './admin-notam.service';
import { AdminNotamController } from './admin-notam.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [AdminNotamController],
  providers: [AdminNotamService],
  exports: [AdminNotamService],
})
export class AdminNotamModule {}
