"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminListenerService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const prisma_1 = require("../../../prisma/generated/prisma/index.js");
const crypto = require("crypto");
const listener_service_1 = require("../../listener/listener.service");
let AdminListenerService = class AdminListenerService {
    prisma;
    listenerService;
    constructor(prisma, listenerService) {
        this.prisma = prisma;
        this.listenerService = listenerService;
    }
    async createListenerEvent(event) {
        const listenerEvent = await this.prisma.listenerEvent.create({
            data: event,
        });
        return listenerEvent;
    }
    async getMany(query) {
        const events = await this.prisma.listenerEvent.findMany(query ?? {});
        return events;
    }
    async deleteOneById(Id) {
        const event = await this.prisma.listenerEvent.delete({
            where: {
                Id,
            },
        });
        return event;
    }
    async getSenderBySlug(Slug) {
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
    async Sender_getMany(query) {
        const senders = await this.prisma.listenerEventSender.findMany(query ?? {});
        return senders;
    }
    async Sender_getOneById(Id, queryOpts) {
        const sender = await this.prisma.listenerEventSender.findUnique({
            where: {
                Id,
            },
            ...queryOpts,
        });
        return sender;
    }
    async Sender_getOneBySlug(Slug, query) {
        const sender = await this.prisma.listenerEventSender.findUnique({
            where: {
                Slug,
            },
            ...query,
        });
        return sender;
    }
    async Sender_create(data) {
        const sender = await this.prisma.listenerEventSender.create({
            data,
        });
        return sender;
    }
    async Sender_update(Id, data) {
        const sender = await this.prisma.listenerEventSender.update({
            where: {
                Id,
            },
            data,
        });
        return sender;
    }
    async Sender_regenerateToken(Id) {
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
    async Sender_toggle(Id) {
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
    async Sender_delete(Id) {
        const sender = await this.prisma.listenerEventSender.delete({
            where: {
                Id,
            },
        });
        return sender;
    }
    async Event_resend(Id) {
        const event = await this.prisma.listenerEvent.update({
            where: {
                Id,
            },
            data: {
                Status: prisma_1.ListenerEventStatus.PENDING,
            },
            include: {
                Sender: true,
            },
        });
        const sentEvent = await this.listenerService.processListenerEvent(event.Sender, { event, resend: true, data: event.Data });
        return sentEvent;
    }
    async Event_markAsCompleted(Id) {
        const event = await this.prisma.listenerEvent.update({
            where: {
                Id,
            },
            data: {
                Status: prisma_1.ListenerEventStatus.COMPLETED,
            },
        });
        return event;
    }
};
exports.AdminListenerService = AdminListenerService;
exports.AdminListenerService = AdminListenerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, listener_service_1.ListenerService])
], AdminListenerService);
//# sourceMappingURL=admin-listener.service.js.map