import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from '@prisma/prisma.module';
import { VirtualAirlineModule } from '@virtual-airline/virtual-airline.module';
import { OnAirModule } from '@on-air/on-air.module';
import { AppConfigModule } from './app-config/app-config.module';
import { JobsModule } from './jobs/jobs.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoggerService } from '@logger/logger.service';
import { LoggerModule } from '@logger/logger.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { MemberModule } from './member/member.module';
import { AircraftModule } from './aircraft/aircraft.module';
import { AirportModule } from './airport/airport.module';
import { FlightModule } from './flight/flight.module';
import { DiscordModule } from './discord/discord.module';
import { ListenerModule } from './listener/listener.module';
import { FshubModule } from './fshub/fshub.module';
import { NotifierModule } from './notifier/notifier.module';
import { CompanyModule } from './company/company.module';
import { LiveryModule } from './livery/livery.module';
import { WebsocketModule } from './websocket/websocket.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MulterModule } from '@nestjs/platform-express';
import { EmailModule } from './email/email.module';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailerModule } from '@nestjs-modules/mailer';
import { NotamModule } from './notam/notam.module';

const emailTemplatesDirectory = join(__dirname, 'email/templates');
console.log('emailTemplatesDirectory:', emailTemplatesDirectory);

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '.env.local'],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..'),
      serveStaticOptions: {
        fallthrough: false,
      },
    }),
    MulterModule.registerAsync({
      useFactory: () => ({
        dest: join(__dirname, '..', 'files'),
      }),
      inject: [ConfigService],
    }),
    MailerModule.forRoot({
      transport: {
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT ? parseInt(process.env.MAIL_PORT) : 587,
        auth: {
          user: process.env.MAIL_USERNAME,
          pass: process.env.MAIL_PASSWORD,
        },
      },
      defaults: {
        from: process.env.MAIL_FROM || '"noreply" <noreply@azsupras.club>',
      },
      template: {
        dir: emailTemplatesDirectory,
        adapter: new HandlebarsAdapter(),
        options: {
          strict: false,
        },
      },
    }),
    PrismaModule,
    OnAirModule,
    VirtualAirlineModule,
    AppConfigModule,
    JobsModule,
    LoggerModule,
    UserModule,
    AuthModule,
    AdminModule,
    MemberModule,
    AircraftModule,
    AirportModule,
    FlightModule,
    DiscordModule,
    ListenerModule,
    FshubModule,
    NotifierModule,
    CompanyModule,
    LiveryModule,
    WebsocketModule,
    EmailModule,
    NotamModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {
  private readonly logger = new LoggerService(AppModule.name);
  constructor(
  ) {}
}