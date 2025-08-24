import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { PrismaModule } from '@prisma/prisma.module';
import { AppConfigModule } from '@app-config/app-config.module';

@Module({
  imports: [PrismaModule, AppConfigModule],
  providers: [CompanyService],
  exports: [CompanyService],
})
export class CompanyModule {}
