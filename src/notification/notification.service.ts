import { Injectable } from '@nestjs/common';
import { DatabaseService } from '@database/database.service';
import { DiscordService } from '@discord/discord.service';
import { Notification, Prisma } from 'prisma/generated/prisma';

@Injectable()
export class NotificationService {
    constructor(
        private readonly databaseService: DatabaseService,
        private readonly discordService: DiscordService,
    ) {}

    async findMany(query?: Prisma.NotificationFindManyArgs) {
        const _query: Prisma.NotificationFindManyArgs = {
            ...query,
        };

        const entities: Notification[] = await this.databaseService.notification.findMany(_query);

        return entities;
    }

    async findOne(query: Prisma.NotificationFindUniqueArgs) {
        const _query: Prisma.NotificationFindUniqueArgs = {
            ...query,
        };

        const entity: Notification | null = await this.databaseService.notification.findUnique(_query);

        return entity;
    }
    
    async create(data: Prisma.NotificationCreateInput, query?: Prisma.NotificationCreateArgs) {
        const _query: Prisma.NotificationCreateArgs = {
            ...query,
            data: data,
        };

        const entity: Notification|null = await this.databaseService.notification.create(_query);

        return entity;
    }

    async update(query: Prisma.NotificationUpdateArgs, data: Prisma.NotificationUpdateInput) {
        const _query: Prisma.NotificationUpdateArgs = {
            ...query,
            data: data,
        };

        const entity: Notification|null = await this.databaseService.notification.update(_query);

        return entity;
    }

    async delete(query: Prisma.NotificationDeleteArgs) {
        const _query: Prisma.NotificationDeleteArgs = {
            ...query,
        };

        const entity: Notification|null = await this.databaseService.notification.delete(_query);

        return entity;
    }

    async updateById(Id: string, data: Prisma.NotificationUpdateInput) {
        const query: Prisma.NotificationUpdateArgs = {
            where: { Id: Id },
            data: data,
        };

        const entity: Notification|null = await this.databaseService.notification.update(query);

        return entity;
    }

    async upsertById(input: Prisma.NotificationCreateInput) {
        const _query: Prisma.NotificationUpsertArgs = {
            where: { Id: input.Id },
            create: input,
            update: input,
        };

        const entity: Notification|null = await this.databaseService.notification.upsert(_query);

        return entity;
    }
}
