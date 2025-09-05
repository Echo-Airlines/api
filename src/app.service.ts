import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  async getHealth() {
    const uptimeInSeconds = process.uptime();
    const uptime = `${Math.floor(uptimeInSeconds / 3600)}h ${Math.floor((uptimeInSeconds % 3600) / 60)}m ${Math.floor(uptimeInSeconds % 60)}s`;

    const memoryUsage = process.memoryUsage();
    const memoryUsageInMB = {
      rss: Math.round(memoryUsage.rss / 1024 / 1024),
      heapTotal: Math.round(memoryUsage.heapTotal / 1024 / 1024),
      heapUsed: Math.round(memoryUsage.heapUsed / 1024 / 1024),
    };

    const cpuUsage = process.cpuUsage();
    const cpuUsageInPercent = {
      total: Math.round((cpuUsage.user + cpuUsage.system) / 1000),
      user: Math.round((cpuUsage.user / 1000) * 100),
      system: Math.round((cpuUsage.system / 1000) * 100),
    };

    // database stats
    const databaseStats = await this.prisma.$metrics.json();
    
    return {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime,
      environment: process.env.NODE_ENV || 'development',
      version: process.env.npm_package_version || '1.0.0',
      memoryUsage: memoryUsageInMB,
      cpuUsage: cpuUsageInPercent,
      databaseStats,
    };
  }
}
