import { Module } from '@nestjs/common';
import { SeederService } from './seeder.service';
import { LoggerModule } from '@/logger/logger.module';
import { PrismaModule } from '@prisma/prisma.module';

@Module({
  imports: [
    LoggerModule,
    PrismaModule,
  ],
  providers: [SeederService],
  exports: [SeederService],
})
export class SeederModule {}
