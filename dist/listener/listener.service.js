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
var ListenerService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListenerService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const prisma_1 = require("../../prisma/generated/prisma/index.js");
const discord_service_1 = require("../discord/discord.service");
const logger_service_1 = require("../logger/logger.service");
const websocket_gateway_1 = require("../websocket/websocket.gateway");
const notifier = require('node-notifier');
const handlebars_1 = require("handlebars");
let ListenerService = ListenerService_1 = class ListenerService {
    prisma;
    discordService;
    websocketGateway;
    logger = new logger_service_1.LoggerService(ListenerService_1.name);
    constructor(prisma, discordService, websocketGateway) {
        this.prisma = prisma;
        this.discordService = discordService;
        this.websocketGateway = websocketGateway;
    }
    async createListenerEvent(event) {
        const listenerEvent = await this.prisma.listenerEvent.create({
            data: event,
        });
        return listenerEvent;
    }
    async updateListenerEvent(Id, event) {
        const listenerEvent = await this.prisma.listenerEvent.update({
            where: {
                Id,
            },
            data: event,
        });
        return listenerEvent;
    }
    async updateListenerEventStatus(Id, Status) {
        const listenerEvent = await this.prisma.listenerEvent.update({
            where: {
                Id,
            },
            data: {
                Status,
            }
        });
        return listenerEvent;
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
    async processListenerEvent(sender, body) {
        let listenerEvent = null;
        switch (sender.Slug) {
            case 'fshub':
                listenerEvent = await this.processFSHubListenerEvent(sender, body);
                break;
            default:
                throw new Error('Invalid sender');
        }
        if (listenerEvent) {
            this.websocketGateway.emitEvent(listenerEvent.Type, {
                eventId: listenerEvent.Id,
                variant: listenerEvent.Variant,
                sender: sender.Slug,
                data: listenerEvent.Data,
                sentAt: listenerEvent.SentAt,
                status: listenerEvent.Status
            });
        }
        return listenerEvent;
    }
    async compileMessageTemplate(slug, data) {
        const messageTemplate = await this.discordService.MessageTemplate_findOneBySlug(slug);
        let content = '';
        if (!messageTemplate) {
            return '';
        }
        try {
            content = handlebars_1.default.compile(messageTemplate.Content)(data);
        }
        catch (error) {
            this.logger.error('Error compiling message template:', error);
            return '';
        }
        return content;
    }
    async processFSHubListenerEvent(sender, body) {
        let listenerEvent;
        try {
            let SentAt;
            if (typeof body._sent === 'number' &&
                Number.isFinite(body._sent) &&
                body._sent > 0) {
                const timestamp = new Date(body._sent);
                if (!isNaN(timestamp.getTime())) {
                    SentAt = timestamp;
                }
                else {
                    SentAt = new Date();
                }
            }
            else {
                SentAt = new Date();
            }
            if (SentAt > new Date()) {
                SentAt = new Date();
            }
            let listenerEvent;
            if (body.resend && body.event) {
                listenerEvent = body.event;
            }
            else {
                listenerEvent = await this.createListenerEvent({
                    Variant: body._variant,
                    Type: body._type,
                    SentAt: SentAt,
                    Data: body._data,
                    Sender: {
                        connect: {
                            Id: sender.Id
                        }
                    },
                    Status: 'PENDING'
                });
            }
            if (!sender.DiscordChannelWebhookId) {
                return listenerEvent;
            }
            listenerEvent = await this.updateListenerEventStatus(listenerEvent.Id, prisma_1.ListenerEventStatus.PROCESSING);
            const messageTemplate = await this.discordService.MessageTemplate_findOneBySlug(listenerEvent.Type);
            let content = '';
            switch (listenerEvent.Type) {
                case 'profile.updated':
                    const pilot = listenerEvent.Data;
                    if (!messageTemplate) {
                        content = `${pilot.name} has updated their profile.`;
                    }
                    else {
                        content = await this.compileMessageTemplate(messageTemplate.Slug, pilot);
                    }
                    this.logger.debug(`profile.updated: ${content}`);
                    break;
                case 'flight.departed':
                    const flightDeparted = listenerEvent.Data;
                    if (!messageTemplate) {
                        content = `${flightDeparted.airline.profile.abbreviation} ${flightDeparted.aircraft.name} #${flightDeparted.plan.flight_no} ${flightDeparted.plan.departure} to ${flightDeparted.plan.arrival} has departed.\n\`\`\``;
                    }
                    else {
                        content = await this.compileMessageTemplate(messageTemplate.Slug, flightDeparted);
                    }
                    this.logger.debug(`flight.departed: ${content}`);
                    break;
                case 'flight.arrived':
                    this.logger.debug('flight.arrived');
                    const flightArrived = listenerEvent.Data;
                    if (!messageTemplate) {
                        let msg = [];
                        if (flightArrived.landing_rate) {
                            msg.push(`Landing Rate: ${flightArrived.landing_rate} ft/min ${flightArrived.landing_rate > -200 ? '🧈' : ''}`);
                        }
                        if (flightArrived.pitch) {
                            msg.push(`Pitch: ${flightArrived.pitch} deg`);
                        }
                        if (flightArrived.bank) {
                            msg.push(`Bank: ${flightArrived.bank} deg`);
                        }
                        if (flightArrived.speed_tas) {
                            msg.push(`Speed: ${flightArrived.speed_tas} kts`);
                        }
                        if (flightArrived.wind) {
                            msg.push(`Wind: ${flightArrived.wind.speed} kts ${flightArrived.wind.direction}°`);
                        }
                        content = `${flightArrived.airline.profile.abbreviation} ${flightArrived.aircraft.name} ${(flightArrived.plan.flight_no) ? flightArrived.plan.flight_no : ''} ${flightArrived.plan.departure} to ${flightArrived.plan.arrival} flown by ${flightArrived.user.name}  has arrived.\n\`\`\`${msg.join('\n')}\`\`\``;
                    }
                    else {
                        content = await this.compileMessageTemplate(messageTemplate.Slug, flightArrived);
                    }
                    this.logger.debug(`flight.arrived: ${content}`);
                    break;
                case 'flight.completed':
                    const flightCompleted = listenerEvent.Data;
                    if (!messageTemplate) {
                        content = `${flightCompleted.airline.profile.abbreviation} ${flightCompleted.aircraft.name} ${flightCompleted.plan.callsign} ${flightCompleted.plan.icao_dep} to ${flightCompleted.plan.icao_arr} flown by ${flightCompleted.user.name} has completed.`;
                    }
                    else {
                        content = await this.compileMessageTemplate(messageTemplate.Slug, flightCompleted);
                    }
                    this.logger.debug(`flight.completed: ${content}`);
                    break;
                case 'flight.updated':
                    const flightUpdated = listenerEvent.Data;
                    if (!messageTemplate) {
                        content = `${flightUpdated.airline.profile.abbreviation} ${flightUpdated.aircraft.name} ${(flightUpdated.plan.flight_no) ? flightUpdated.plan.flight_no : ''} ${flightUpdated.plan.departure} to ${flightUpdated.plan.arrival} flown by ${flightUpdated.user.name} has updated.`;
                    }
                    else {
                        content = await this.compileMessageTemplate(messageTemplate.Slug, flightUpdated);
                    }
                    this.logger.debug(`flight.updated: ${content}`);
                    break;
                case 'website.test':
                    content = JSON.stringify(listenerEvent.Data, null, 2);
                    this.logger.debug(`website.test: ${content}`);
                    break;
            }
            const discordMessage = {
                content: content,
            };
            if (content === '') {
                this.logger.error(`${listenerEvent.Type} event has no content`);
                return listenerEvent;
            }
            const message = await this.discordService.ChannelWebhook_sendMessage(sender.DiscordChannelWebhookId, discordMessage);
            if (!message) {
                this.logger.error(`${listenerEvent.Type} event failed to send to Discord`);
                return listenerEvent;
            }
            listenerEvent = await this.updateListenerEvent(listenerEvent.Id, {
                DeliveredAt: message.DiscordMessageSentAt,
                Status: 'COMPLETED',
                DiscordMessage: {
                    connect: {
                        Id: message.Id
                    }
                }
            });
            notifier.notify(`'${listenerEvent.Type}' event sent to Discord`);
            return listenerEvent;
        }
        catch (error) {
            this.logger.error('Error sending discord message:', error);
            listenerEvent = await this.updateListenerEvent(listenerEvent.Id, {
                Status: 'FAILED',
                Error: error.message,
            });
            notifier.notify(`'${listenerEvent.Type}' event failed to send to Discord: ${error.message}`);
            return listenerEvent;
        }
    }
};
exports.ListenerService = ListenerService;
exports.ListenerService = ListenerService = ListenerService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        discord_service_1.DiscordService,
        websocket_gateway_1.WebsocketGateway])
], ListenerService);
//# sourceMappingURL=listener.service.js.map