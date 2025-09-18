import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { DatabaseModule } from '@database/database.module';
import { AppConfigModule } from '@app-config/app-config.module';
import { CompanyController } from './company.controller';

@Module({
  imports: [DatabaseModule, AppConfigModule],
  providers: [CompanyService],
  exports: [CompanyService],
  controllers: [CompanyController],
})
export class CompanyModule {}
