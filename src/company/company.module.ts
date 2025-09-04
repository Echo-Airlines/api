import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { PrismaModule } from '@prisma/prisma.module';
import { AppConfigModule } from '@app-config/app-config.module';
import { CompanyController } from './company.controller';

@Module({
  imports: [PrismaModule, AppConfigModule],
  providers: [CompanyService],
  exports: [CompanyService],
  controllers: [CompanyController],
})
export class CompanyModule {}
