import { Module } from '@nestjs/common';
import { LiveryController } from './livery.controller';
import { LiveryService } from './livery.service';
import { PrismaModule } from '@prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [LiveryService],
  exports: [LiveryService],
  controllers: [LiveryController],
})
export class LiveryModule {}
