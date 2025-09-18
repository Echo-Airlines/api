import { Module } from '@nestjs/common';
import { NotamService } from './notam.service';
import { NotamController } from './notam.controller';
import { DatabaseModule } from '@database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [NotamController],
  providers: [NotamService],
})
export class NotamModule {}
