import { DatabaseService } from './database/database.service';
export declare class AppService {
    private readonly prisma;
    constructor(prisma: DatabaseService);
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
