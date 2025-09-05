import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth() {
    const uptimeInSeconds = process.uptime();
    const uptime = `${Math.floor(uptimeInSeconds / 3600)}h ${Math.floor((uptimeInSeconds % 3600) / 60)}m ${Math.floor(uptimeInSeconds % 60)}s`;

    return {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime,
      environment: process.env.NODE_ENV || 'development',
      version: process.env.npm_package_version || '1.0.0',
    };
  }
}
