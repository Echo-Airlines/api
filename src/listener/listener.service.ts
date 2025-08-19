import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.service';
import { Prisma } from 'prisma/generated/prisma';

@Injectable()
export class ListenerService {
    constructor(private prisma: PrismaService) {}

    async createListenerEvent(event: Prisma.ListenerEventCreateInput) {
        const listenerEvent = await this.prisma.listenerEvent.create({
            data: event,
        });

        return listenerEvent;
    }
}
