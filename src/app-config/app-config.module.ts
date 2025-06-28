import { Module } from '@nestjs/common';
import { AppConfigService } from './app-config.service';
import { AppConfigController } from './app-config.controller';
import { PrismaModule } from '@prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [AppConfigService],
  exports: [AppConfigService],
  controllers: [AppConfigController],
})
export class AppConfigModule {}
