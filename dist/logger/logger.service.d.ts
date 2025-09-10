import { LoggerService as _LoggerService, ConsoleLogger, LogLevel, ConsoleLoggerOptions } from '@nestjs/common';
export declare class LoggerService extends ConsoleLogger implements _LoggerService {
    private readonly configService;
    constructor(context: string, options?: ConsoleLoggerOptions);
    setLogLevels(levels: LogLevel[]): void;
    printStartupBanner(apiUrl: string, adminUser?: string, adminPassword?: string): void;
}
