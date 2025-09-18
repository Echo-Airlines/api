import { Module } from '@nestjs/common';
import { LiveryController } from './livery.controller';
import { LiveryService } from './livery.service';
import { DatabaseModule } from '@database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [LiveryService],
  exports: [LiveryService],
  controllers: [LiveryController],
})
export class LiveryModule {}
