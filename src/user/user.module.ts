import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { PrismaModule } from '@prisma/prisma.module';
import { HashModule } from '@hash/hash.module';
import { UserController } from './user.controller';

@Module({
  imports: [PrismaModule, HashModule],
  providers: [UserService],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}
