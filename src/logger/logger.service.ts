import {
  Injectable,
  LoggerService as _LoggerService,
  Scope,
  ConsoleLogger,
  LogLevel,
  ConsoleLoggerOptions,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable({ scope: Scope.TRANSIENT })
export class LoggerService extends ConsoleLogger implements _LoggerService {
  private readonly configService: ConfigService = new ConfigService();

  constructor(context: string, options?: ConsoleLoggerOptions) {
    super(context, {
      ...options,
    });

    const logLevels: LogLevel[] = this.configService.get<string>('LOG_LEVELS')?.split(',') as LogLevel[] || ['log', 'error', 'warn', 'debug', 'verbose', 'fatal'];
    
    if (!this.options) {
      this.options = {};
    }

    this.options.logLevels = logLevels;
  }

  public printStartupBanner(apiUrl: string, adminUser?: string, adminPassword?: string) {
    const padString = (str: string, length: number) => str.padEnd(length, ' ');
    const bannerWidth = 60;
    const borderLine = '#'.repeat(bannerWidth);
    const dashLine = '-'.repeat(bannerWidth - 4);

    console.log(''); // Empty line for spacing
    console.log(borderLine);
    console.log(`#${' '.repeat(bannerWidth - 2)}#`);
    console.log(`#         ${padString('ECHO Airlines API Started Successfully', bannerWidth - 12)} #`);
    console.log(`# ${dashLine} #`);
    console.log(`#${' '.repeat(bannerWidth - 2)}#`);
    console.log(`# ${padString(`API Base URL: ${apiUrl}`, bannerWidth - 4)} #`);
    
    if (adminUser && adminPassword) {
      console.log(`# ${padString(`Admin Username: ${adminUser}`, bannerWidth - 4)} #`);
      console.log(`# ${padString(`Admin Password: ${adminPassword}`, bannerWidth - 4)} #`);
    }
    
    console.log(`#${' '.repeat(bannerWidth - 2)}#`);
    console.log(borderLine);
    console.log(''); // Empty line for spacing
  }
}

