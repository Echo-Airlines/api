import { Module } from '@nestjs/common';
import { MemberService } from './member.service';
import { MemberController } from './member.controller';
import { PrismaModule } from '@prisma/prisma.module';
import { UserModule } from '@user/user.module';

@Module({
  imports: [PrismaModule, UserModule],
  providers: [MemberService],
  exports: [MemberService],
  controllers: [MemberController]
})
export class MemberModule {}
