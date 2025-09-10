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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminListenerController = void 0;
const common_1 = require("@nestjs/common");
const admin_listener_service_1 = require("./admin-listener.service");
const is_admin_guard_1 = require("../../auth/is-admin.guard");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
const CreateListenerSender_dto_1 = require("./dto/CreateListenerSender.dto");
const crypto = require("crypto");
let AdminListenerController = class AdminListenerController {
    listenerService;
    constructor(listenerService) {
        this.listenerService = listenerService;
    }
    async createSender(body) {
        const dto = {
            Name: body.Name,
            Slug: body.Slug,
            IsActive: body.IsActive,
            Token: crypto.randomBytes(32).toString('hex'),
            DiscordChannelWebhook: body.DiscordChannelWebhookId ? {
                connect: {
                    Id: body.DiscordChannelWebhookId,
                },
            } : undefined,
        };
        const sender = await this.listenerService.Sender_create(dto);
        if (!sender) {
            throw new common_1.BadRequestException({
                message: 'Failed to create sender',
                error: 'Failed to create sender',
                statusCode: 400,
                timestamp: new Date().toISOString(),
                path: '/admin/listener/sender/create',
                method: 'POST',
                body: body,
                dto: dto,
            });
        }
        return sender;
    }
    async getSenders() {
        const senders = await this.listenerService.Sender_getMany({
            include: {
                ListenerEvents: true,
            }
        });
        return senders;
    }
    async getSender(Id) {
        const sender = await this.listenerService.Sender_getOneById(Id, {
            include: {
                ListenerEvents: true,
                DiscordChannelWebhook: true,
            }
        });
        if (!sender) {
            throw new common_1.NotFoundException('Sender not found');
        }
        if (sender.ListenerEvents) {
            sender.ListenerEvents = sender.ListenerEvents.sort((a, b) => b.CreatedAt.getTime() - a.CreatedAt.getTime());
        }
        return sender;
    }
    async updateSender(Id, body) {
        const sender = await this.listenerService.Sender_update(Id, body);
        return sender;
    }
    async toggleSender(Id) {
        const sender = await this.listenerService.Sender_toggle(Id);
        return sender;
    }
    async regenerateToken(Id) {
        const sender = await this.listenerService.Sender_regenerateToken(Id);
        return sender;
    }
    async deleteSender(Id) {
        const sender = await this.listenerService.Sender_delete(Id);
        return sender;
    }
    async resendEvent(Id) {
        if (!Id) {
            throw new common_1.BadRequestException('Event ID is required');
        }
        if (!Number.isInteger(Id)) {
            Id = Number(Id);
        }
        const event = await this.listenerService.Event_resend(Id);
        return event;
    }
    async getEvents(senderSlug, variant, type) {
        let query = {
            where: {
                Sender: {
                    Slug: senderSlug
                }
            }
        };
        if (variant && type) {
            query = {
                where: {
                    ...query.where,
                    Variant: variant,
                    Type: type
                }
            };
        }
        else if (variant) {
            query = {
                where: {
                    ...query.where,
                    Variant: variant,
                }
            };
        }
        else if (type) {
            query = {
                where: {
                    ...query.where,
                    Type: type,
                }
            };
        }
        const events = await this.listenerService.getMany(query);
        return events;
    }
    async deleteEvent(Id) {
        const event = await this.listenerService.deleteOneById(parseInt(Id));
        if (!event) {
            throw new common_1.NotFoundException('FSHub event not found');
        }
        return event;
    }
};
exports.AdminListenerController = AdminListenerController;
__decorate([
    (0, common_1.Post)('sender/create'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateListenerSender_dto_1.CreateListenerSenderDto]),
    __metadata("design:returntype", Promise)
], AdminListenerController.prototype, "createSender", null);
__decorate([
    (0, common_1.Get)(['senders', 'sender']),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminListenerController.prototype, "getSenders", null);
__decorate([
    (0, common_1.Get)('sender/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminListenerController.prototype, "getSender", null);
__decorate([
    (0, common_1.Put)('sender/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, CreateListenerSender_dto_1.CreateListenerSenderDto]),
    __metadata("design:returntype", Promise)
], AdminListenerController.prototype, "updateSender", null);
__decorate([
    (0, common_1.Put)('sender/:id/toggle'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminListenerController.prototype, "toggleSender", null);
__decorate([
    (0, common_1.Post)('sender/:id/regenerate-token'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminListenerController.prototype, "regenerateToken", null);
__decorate([
    (0, common_1.Delete)('sender/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminListenerController.prototype, "deleteSender", null);
__decorate([
    (0, common_1.Post)('sender/event/:id/resend'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdminListenerController.prototype, "resendEvent", null);
__decorate([
    (0, common_1.Get)(':senderSlug/events'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    __param(0, (0, common_1.Param)('senderSlug')),
    __param(1, (0, common_1.Query)('variant')),
    __param(2, (0, common_1.Query)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], AdminListenerController.prototype, "getEvents", null);
__decorate([
    (0, common_1.Delete)(['sender/events/:id', 'sender/event/:id']),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminListenerController.prototype, "deleteEvent", null);
exports.AdminListenerController = AdminListenerController = __decorate([
    (0, common_1.Controller)('admin/listener'),
    __metadata("design:paramtypes", [admin_listener_service_1.AdminListenerService])
], AdminListenerController);
//# sourceMappingURL=admin-listener.controller.js.map