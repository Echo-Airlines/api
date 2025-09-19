import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from 'prisma/generated/prisma';

@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    const omitConfig = {
      user: { Password: true, Email: true, FSHubPilotId: true },
      virtualAirline: { ApiKey: true },
    } as const;

    super({
      omit: omitConfig,
    });
  }
  
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}