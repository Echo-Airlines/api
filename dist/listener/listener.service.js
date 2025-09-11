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
        const query = {
            data: event,
        };
        const listenerEvent = await this.prisma.listenerEvent.create(query);
        return listenerEvent;
    }
    async updateListenerEvent(Id, event) {
        const query = {
            where: {
                Id,
            },
            data: event,
        };
        const listenerEvent = await this.prisma.listenerEvent.update(query);
        return listenerEvent;
    }
    async updateListenerEventStatus(Id, Status) {
        const query = {
            where: {
                Id,
            },
            data: {
                Status,
            }
        };
        const listenerEvent = await this.prisma.listenerEvent.update(query);
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
        let listenerEvent = undefined;
        switch (sender.Slug) {
            case 'fshub':
                listenerEvent = await this._processFSHubListenerEvent(sender, body);
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
    async _compileMessageTemplate(slug, data) {
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
    async _processFSHubListenerEvent(sender, body) {
        let listenerEvent = undefined;
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
            let message = {
                content: ' ',
                embeds: [],
                footer: {
                    text: `Powered By 🐬ECHO Localizer | #${listenerEvent.Id}`
                }
            };
            switch (listenerEvent.Type) {
                case 'flight.departed':
                    const flightDeparted = listenerEvent.Data;
                    this.logger.debug(`flight.departed | #${flightDeparted.id} - https://fshub.io/flight/${flightDeparted.id}/report`);
                    message.embeds = this._processFSHubFlightDeparted(flightDeparted, listenerEvent.Id);
                    break;
                case 'flight.completed':
                    const flightCompleted = listenerEvent.Data;
                    this.logger.debug(`flight.completed | #${flightCompleted.id} - https://fshub.io/flight/${flightCompleted.id}/report`);
                    message.embeds = this._processFSHubFlightCompleted(flightCompleted, listenerEvent.Id);
                    break;
                case 'website.test':
                    message.content = JSON.stringify(listenerEvent.Data, null, 2);
                    this.logger.debug(`website.test | ${message.content}`);
                    break;
            }
            if (message.content === '') {
                this.logger.error(`${listenerEvent.Type} event has no content`);
                return listenerEvent;
            }
            const discordMessage = await this.discordService.ChannelWebhook_sendMessage(sender.DiscordChannelWebhookId, message);
            if (!message) {
                this.logger.error(`${listenerEvent.Type} event failed to send to Discord`);
                return listenerEvent;
            }
            listenerEvent = await this.updateListenerEvent(listenerEvent.Id, {
                DeliveredAt: discordMessage.DiscordMessageSentAt,
                Status: 'COMPLETED',
                DiscordMessage: {
                    connect: {
                        Id: discordMessage.Id
                    }
                }
            });
            notifier.notify(`'${listenerEvent.Type}' event sent to Discord`);
            return listenerEvent;
        }
        catch (error) {
            this.logger.error(`Error sending discord message:\n${error.message}`);
            let _listenerEvent = listenerEvent;
            if (_listenerEvent) {
                listenerEvent = await this.updateListenerEvent(_listenerEvent.Id, {
                    Status: 'FAILED',
                    Error: error.message,
                });
                notifier.notify(`'${listenerEvent.Type}' event failed to send to Discord: ${error.message}`);
            }
            return listenerEvent;
        }
    }
    _processFSHubFlightDeparted(flightDeparted, listenerEventId) {
        const embeds = [];
        const departureAtDate = new Date(flightDeparted.departure_at);
        const formattedDepartureAt = departureAtDate.toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
        });
        const baseEmbed = {
            title: '**Flight Departed**',
            description: `A flight (#${flightDeparted.id}) has departed from [${flightDeparted.airport.name} (${flightDeparted.airport.icao})](https://skyvector.com/airport/${flightDeparted.airport.icao}) at ${formattedDepartureAt}!`,
            fields: [
                {
                    name: 'Pilot',
                    value: `${flightDeparted.user.name}`,
                },
            ],
            footer: {
                text: `Powered By 🐬ECHO Localizer | #${flightDeparted.id} | ${listenerEventId}`
            }
        };
        if (flightDeparted.airline) {
            let airlineName = '🏢 ';
            if (flightDeparted.airline.handles.website) {
                airlineName += `[${flightDeparted.airline.name} (${flightDeparted.airline.profile.abbreviation})](${flightDeparted.airline.handles.website})`;
            }
            else {
                airlineName += `${flightDeparted.airline.name} (${flightDeparted.airline.profile.abbreviation})`;
            }
            baseEmbed.fields?.push({
                name: 'Airline',
                value: airlineName,
            });
        }
        if (flightDeparted.plan) {
            let flightPlanValues = [];
            if (flightDeparted.plan.flight_no) {
                flightPlanValues.push(`🆔 Flight No: ${flightDeparted.plan.flight_no}`);
            }
            if (flightDeparted.plan.departure) {
                flightPlanValues.push(`🛫 Departure: [${flightDeparted.plan.departure}](https://skyvector.com/airport/${flightDeparted.plan.departure}) | 🛬 Arrival: [${flightDeparted.plan.arrival}](https://skyvector.com/airport/${flightDeparted.plan.arrival})`);
            }
            if (flightDeparted.plan.route) {
                flightPlanValues.push(`Route: ${flightDeparted.plan.route}`);
            }
            if (flightDeparted.plan.cruise_lvl) {
                flightPlanValues.push(`Cruise Level: FL${flightDeparted.plan.cruise_lvl}`);
            }
            if (flightPlanValues.length > 0) {
                baseEmbed.fields?.push({
                    name: 'Flight Plan',
                    value: flightPlanValues.join('\n'),
                });
            }
        }
        if (flightDeparted.aircraft) {
            let aircraftValues = [];
            if (flightDeparted.aircraft.name) {
                aircraftValues.push(`✈️ Name: ${flightDeparted.aircraft.name} (${flightDeparted.aircraft.icao})`);
            }
            if (flightDeparted.aircraft.user_conf.tail) {
                aircraftValues.push(`🆔 Tail: ${flightDeparted.aircraft.user_conf.tail}`);
            }
            if (aircraftValues.length > 0) {
                baseEmbed.fields?.push({
                    name: 'Aircraft',
                    value: aircraftValues.join('\n'),
                });
            }
        }
        embeds.push(baseEmbed);
        return embeds;
    }
    _processFSHubFlightCompleted(flightCompleted, listenerEventId) {
        const embeds = [];
        const baseEmbed = {
            title: '**Pilot Flight Completed**',
            description: `A flight ([#${flightCompleted.id}](${`https://fshub.io/flight/${flightCompleted.id}/report`})) from [${flightCompleted.departure.airport.name} (${flightCompleted.departure.airport.icao})](https://skyvector.com/airport/${flightCompleted.departure.airport.icao}) to [${flightCompleted.arrival.airport.name} (${flightCompleted.arrival.airport.icao})](https://skyvector.com/airport/${flightCompleted.arrival.airport.icao}) has been completed by 🧑‍✈️ ${flightCompleted.user.name}!`,
            fields: [],
            footer: {
                text: `Powered By 🐬ECHO Localizer | #${flightCompleted.id} | ${listenerEventId}`
            }
        };
        if (flightCompleted.airline) {
            let airlineName = '🏢 ';
            if (flightCompleted.airline.handles.website) {
                airlineName += `[${flightCompleted.airline.name} (${flightCompleted.airline.profile.abbreviation})](${flightCompleted.airline.handles.website})`;
            }
            else {
                airlineName += `${flightCompleted.airline.name} (${flightCompleted.airline.profile.abbreviation})`;
            }
            baseEmbed.fields?.push({
                name: 'Airline',
                value: airlineName,
            });
        }
        if (flightCompleted.plan) {
            let flightPlanValues = [];
            if (flightCompleted.plan.callsign) {
                flightPlanValues.push(`🆔 Flight No: ${flightCompleted.plan.callsign}`);
            }
            if (flightCompleted.plan.icao_dep) {
                flightPlanValues.push(`🛫 Departure: [${flightCompleted.plan.icao_dep}](https://skyvector.com/airport/${flightCompleted.plan.icao_dep}) | 🛬 Arrival: [${flightCompleted.plan.icao_arr}](https://skyvector.com/airport/${flightCompleted.plan.icao_arr})`);
            }
            if (flightCompleted.plan.route) {
                flightPlanValues.push(`Route: ${flightCompleted.plan.route}`);
            }
            if (flightCompleted.plan.cruise_lvl) {
                flightPlanValues.push(`Cruise Level: FL${flightCompleted.plan.cruise_lvl}`);
            }
            if (flightPlanValues.length > 0) {
                baseEmbed.fields?.push({
                    name: 'Flight Plan',
                    value: flightPlanValues.join('\n'),
                });
            }
        }
        if (flightCompleted.aircraft) {
            let aircraftValues = [];
            if (flightCompleted.aircraft.name) {
                aircraftValues.push(`✈️ Name: ${flightCompleted.aircraft.name} (${flightCompleted.aircraft.icao})`);
            }
            if (flightCompleted.aircraft.user_conf.tail) {
                aircraftValues.push(`🆔 Tail: ${flightCompleted.aircraft.user_conf.tail}`);
            }
            let fuelValue = [];
            if (flightCompleted.departure.weight.fuel) {
                fuelValue.push(`🔋 Fuel on Departure: **${flightCompleted.departure.weight.fuel} lbs**`);
            }
            if (flightCompleted.arrival.weight.fuel) {
                fuelValue.push(` Fuel on Arrival: **${flightCompleted.arrival.weight.fuel} lbs**`);
            }
            if (flightCompleted.fuel_burnt) {
                fuelValue.push(`🔥 Burned: **${flightCompleted.fuel_burnt} lbs**`);
            }
            if (fuelValue.length > 0) {
                aircraftValues.push(fuelValue.join(' | '));
            }
            if (aircraftValues.length > 0) {
                baseEmbed.fields?.push({
                    name: 'Aircraft',
                    value: aircraftValues.join('\n'),
                });
            }
        }
        if (flightCompleted.arrival) {
            let landingInformation = [];
            if (flightCompleted.arrival.landing_rate) {
                if (flightCompleted.arrival.landing_rate > -150) {
                    landingInformation.push(`Landing Rate: **${flightCompleted.arrival.landing_rate} FPM** 🧈`);
                }
                else {
                    landingInformation.push(`Landing Rate: **${flightCompleted.arrival.landing_rate} FPM** (Too Fast)`);
                }
            }
            if (flightCompleted.arrival.pitch && flightCompleted.arrival.bank) {
                landingInformation.push(`Pitch: **${flightCompleted.arrival.pitch}°** / Bank: **${flightCompleted.arrival.bank}°**`);
            }
            if (flightCompleted.arrival.speed_tas) {
                landingInformation.push(`Speed: **${flightCompleted.arrival.speed_tas} KTS TAS**`);
            }
            if (flightCompleted.arrival.wind) {
                landingInformation.push(`Wind: **${flightCompleted.arrival.wind.direction}° @ ${flightCompleted.arrival.wind.speed} KTS**`);
            }
            else {
                landingInformation.push(`Wind: **Unknown**`);
            }
            if (landingInformation.length > 0) {
                baseEmbed.fields?.push({
                    name: 'Landing Information',
                    value: landingInformation.join('\n'),
                });
            }
        }
        embeds.push(baseEmbed);
        return embeds;
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