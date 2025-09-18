import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { HashModule } from 'src/hash/hash.module';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { DatabaseModule } from '@database/database.module';
import { jwtConstants } from './constants';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { DiscordStrategy } from './discord.strategy';
import { AppConfigModule } from '../app-config/app-config.module';
import { EmailModule } from '@email/email.module';

@Module({
  imports: [HashModule, DatabaseModule, PassportModule, AppConfigModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '30d' },
    }),
    EmailModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy, DiscordStrategy],
  exports: [AuthService, PassportModule],
})
export class AuthModule {}
