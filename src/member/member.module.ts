import { Module } from '@nestjs/common';
import { MemberService } from './member.service';
import { MemberController } from './member.controller';
import { DatabaseModule } from '@database/database.module';
import { UserModule } from '@user/user.module';

@Module({
  imports: [DatabaseModule, UserModule],
  providers: [MemberService],
  exports: [MemberService],
  controllers: [MemberController]
})
export class MemberModule {}
