import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { DatabaseModule } from '@database/database.module';
import { HashModule } from '@hash/hash.module';
import { UserController } from './user.controller';

@Module({
  imports: [DatabaseModule, HashModule],
  providers: [UserService],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}
