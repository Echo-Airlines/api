import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHealth(): Promise<{
        status: string;
        timestamp: string;
        uptime: string;
        environment: string;
        version: string;
        memoryUsage: {
            rss: number;
            heapTotal: number;
            heapUsed: number;
        };
        cpuUsage: {
            total: number;
            user: number;
            system: number;
        };
        databaseStats: import("prisma/generated/prisma/runtime/library").Metrics;
    }>;
}
