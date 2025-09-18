import { Module } from '@nestjs/common';
import { AppConfigService } from './app-config.service';
import { AppConfigController } from './app-config.controller';
import { DatabaseModule } from '@database/database.module';
import { LiveryController } from './livery.controller';

@Module({
  imports: [DatabaseModule],
  providers: [AppConfigService],
  exports: [AppConfigService],
  controllers: [AppConfigController, LiveryController],
})
export class AppConfigModule {}
