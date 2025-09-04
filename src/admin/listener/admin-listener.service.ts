import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.service';
import { ListenerEventStatus, Prisma } from 'prisma/generated/prisma';
import * as crypto from 'crypto';
import { ListenerService } from 'src/listener/listener.service';

@Injectable()
export class AdminListenerService {
    constructor(private prisma: PrismaService, private readonly listenerService: ListenerService) {}

    async createListenerEvent(event: Prisma.ListenerEventCreateInput) {
        const listenerEvent = await this.prisma.listenerEvent.create({
            data: event,
        });

        return listenerEvent;
    }

    async getMany(query?: Prisma.ListenerEventFindManyArgs) {
        const events = await this.prisma.listenerEvent.findMany(query ?? {});

        return events;
    }

    async deleteOneById(Id: number) {
        const event = await this.prisma.listenerEvent.delete({
            where: {
                Id,
            },
        });

        return event;
    }

    async getSenderBySlug(Slug: string) {
        const sender = await this.prisma.listenerEventSender.findUnique({
            where: {
                Slug,
            },
            include: {
                DiscordChannelWebhook: true,
            },
        });

        return sender;
    }

    async Sender_getMany(query?: Prisma.ListenerEventSenderFindManyArgs) {
        const senders = await this.prisma.listenerEventSender.findMany(query ?? {});

        return senders;
    }

    async Sender_getOneById(Id: string, queryOpts?: {
        select?: Prisma.ListenerEventSenderSelect | null;
        omit?: Prisma.ListenerEventSenderOmit | null;
        include?: Prisma.ListenerEventSenderInclude | null;
    }) {
        const sender = await this.prisma.listenerEventSender.findUnique({
            where: {
                Id,
            },
            ...queryOpts,
        });

        return sender;
    }

    async Sender_getOneBySlug(Slug: string, query?: Prisma.ListenerEventSenderFindUniqueArgs) {
        const sender = await this.prisma.listenerEventSender.findUnique({
            where: {
                Slug,
            },
            ...query,
        });

        return sender;
    }

    async Sender_create(data: Prisma.ListenerEventSenderCreateInput) {
        const sender = await this.prisma.listenerEventSender.create({
            data,
        });

        return sender;
    }

    async Sender_update(Id: string, data: Prisma.ListenerEventSenderUpdateInput) {
        const sender = await this.prisma.listenerEventSender.update({
            where: {
                Id,
            },
            data,
        });

        return sender;
    }
    
    async Sender_regenerateToken(Id: string) {
        const sender = await this.prisma.listenerEventSender.update({
            where: {
                Id,
            },
            data: {
                Token: crypto.randomBytes(32).toString('hex'),
            },
        });

        return sender;
    }


    async Sender_toggle(Id: string) {
        const entity = await this.prisma.listenerEventSender.findUnique({
            where: {
                Id
            },
        });

        if (!entity) {
            throw new Error('Sender not found');
        }

        return await this.prisma.listenerEventSender.update({
            where: {
                Id
            },
            data: {
                IsActive: !entity.IsActive
            }
        });
    }

    async Sender_delete(Id: string) {
        const sender = await this.prisma.listenerEventSender.delete({
            where: {
                Id,
            },
        });

        return sender;
    }

    
    async Event_resend(Id: number) {
        const event = await this.prisma.listenerEvent.update({
            where: {
                Id,
            },
            data: {
                Status: ListenerEventStatus.PENDING,
            },
            include: {
                Sender: true,
            },
        });

        const sentEvent = await this.listenerService.processListenerEvent(event.Sender, { event, resend: true, data: event.Data});

        return sentEvent;
    }
}
