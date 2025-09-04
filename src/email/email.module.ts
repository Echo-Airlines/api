import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from '@user/user.module';

@Module({
  imports: [MailerModule, ConfigModule, UserModule],
  providers: [EmailService],
  exports: [EmailService],
})
export class EmailModule {}
