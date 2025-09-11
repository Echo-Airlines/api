import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.service';
import { DiscordMessage, DiscordMessageTemplate, ListenerEvent, ListenerEventSender, ListenerEventStatus, Prisma } from 'prisma/generated/prisma';
import * as crypto from 'crypto';
import { Airport, Flight, Owner, Pilot } from 'fshub-api/dist/types';
import { DiscordService } from '@discord/discord.service';
import { DiscordMessageEmbedDto, SendDiscordMessageDto } from '@discord/dto/SendDiscordMessageDto';
import { FSHubEventDto } from './dto/FSHubEvent.dto';
import { LoggerService } from '@logger/logger.service';
import { WebsocketGateway } from '@websocket/websocket.gateway';
const notifier = require('node-notifier');
import Handlebars from "handlebars";
import { FSHubFlightDepartedEvent } from './type/FSHubFlightDepartedEvent';
import { FSHubFlightCompletedEvent } from './type/FSHubFlightCompletedEvent';


@Injectable()
export class ListenerService {
    private readonly logger = new LoggerService(ListenerService.name);

    constructor(
        private prisma: PrismaService, 
        private readonly discordService: DiscordService,
        private readonly websocketGateway: WebsocketGateway
    ) {}

    async createListenerEvent(event: Prisma.ListenerEventCreateInput) {

        const query: Prisma.ListenerEventCreateArgs = {
            data: event,
        };

        const listenerEvent = await this.prisma.listenerEvent.create(query);

        return listenerEvent;
    }

    async updateListenerEvent(Id: string, event: Prisma.ListenerEventUpdateInput) {
        const query: Prisma.ListenerEventUpdateArgs = {
            where: {
                Id,
            },
            data: event,
        };

        const listenerEvent = await this.prisma.listenerEvent.update(query);

        return listenerEvent;
    }

    async updateListenerEventStatus(Id: string, Status: ListenerEventStatus) {
        const query: Prisma.ListenerEventUpdateArgs = {
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

    public async processListenerEvent(sender: ListenerEventSender, body: any) {
        let listenerEvent: ListenerEvent|null = null;

        switch (sender.Slug) {
            case 'fshub':
                listenerEvent = await this._processFSHubListenerEvent(sender, body as FSHubEventDto);
                break;
            default:
                throw new Error('Invalid sender');
        }

        // Emit WebSocket event to all connected clients
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

    private async _compileMessageTemplate(slug: string, data: any) {
        const messageTemplate = await this.discordService.MessageTemplate_findOneBySlug(slug);
        let content = '';

        if (!messageTemplate) {
            return '';
        }

        try {
            content = Handlebars.compile(messageTemplate.Content)(data);
        } catch (error) {
            this.logger.error('Error compiling message template:', error);
            return '';
        }

        return content;
    }

    private async _processFSHubListenerEvent(sender: ListenerEventSender, body: FSHubEventDto) {
        let listenerEvent: ListenerEvent;

        try {
            let SentAt: Date;

            if (typeof body._sent === 'number' && 
                Number.isFinite(body._sent) && 
                body._sent > 0) {
                
                const timestamp = new Date(body._sent);
                
                // Check if the date is valid
                if (!isNaN(timestamp.getTime())) {
                    SentAt = timestamp;
                } else {
                    SentAt = new Date();
                }
            } else {
                SentAt = new Date();
            }
            
            // Ensure it's not in the future
            if (SentAt > new Date()) {
                SentAt = new Date();
            }

            let listenerEvent: ListenerEvent;

            if (body.resend && body.event) {
                listenerEvent = body.event;
            } else {
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

            listenerEvent = await this.updateListenerEventStatus(listenerEvent.Id, ListenerEventStatus.PROCESSING);

            // check if the message template exists
            const messageTemplate: DiscordMessageTemplate|null = await this.discordService.MessageTemplate_findOneBySlug(listenerEvent.Type);

            let message: SendDiscordMessageDto = {
                content: ' ',
                embeds: [],
                footer: {
                    text: `Powered By 🐬ECHO Localizer | #${listenerEvent.Id}`
                }
            };

            switch (listenerEvent.Type) {
                // case 'profile.updated':
                //     message.content = '**Pilot Profile Updated**';
                //     const pilot = listenerEvent.Data as Pilot
                //     if (!messageTemplate) {
                //         message.content = `${pilot.name} has updated their profile.`;
                //     } else {
                //         message.content = await this._compileMessageTemplate(messageTemplate.Slug, pilot);
                //     }

                //     this.logger.debug(`profile.updated: ${message.content}`);
                //     break;
                case 'flight.departed':
                    const flightDeparted = listenerEvent.Data as FSHubFlightDepartedEvent
                    this.logger.debug(`flight.departed | #${flightDeparted.id} - https://fshub.io/flight/${flightDeparted.id}/report`);
                    message.embeds = this._processFSHubFlightDeparted(flightDeparted, listenerEvent.Id);
                    
                    break;
                // case 'flight.arrived':
                //     const flightArrived = listenerEvent.Data as FlightEvent
                //     this.logger.debug(`flight.arrived | #${flightArrived.id} - https://fshub.io/flight/${flightArrived.id}/report`);
                //     message.embeds = this._processFSHubFlightArrived(flightArrived);

                //     break;
                case 'flight.completed':
                    const flightCompleted = listenerEvent.Data as FSHubFlightCompletedEvent
                    this.logger.debug(`flight.completed | #${flightCompleted.id} - https://fshub.io/flight/${flightCompleted.id}/report`);
                    message.embeds = this._processFSHubFlightCompleted(flightCompleted, listenerEvent.Id);

                    break;
                // case 'flight.updated':
                //     const flightUpdated = listenerEvent.Data as FlightEvent
                //     if (!messageTemplate) {
                //         message.content = `${flightUpdated.airline.profile.abbreviation} ${flightUpdated.aircraft.name} ${(flightUpdated.plan.flight_no) ? flightUpdated.plan.flight_no : ''} ${flightUpdated.plan.departure} to ${flightUpdated.plan.arrival} flown by ${flightUpdated.user.name} has updated.`;
                //     } else {
                //         message.content = await this.compileMessageTemplate(messageTemplate.Slug, flightUpdated);
                //     }

                //     this.logger.debug(`flight.updated: ${message.content}`);
                //     break;
                case 'website.test':
                    message.content = JSON.stringify(listenerEvent.Data, null, 2) as string;
                    this.logger.debug(`website.test | ${message.content}`);
                    break;
            }


            if (message.content === '') {
                this.logger.error(`${listenerEvent.Type} event has no content`);
                return listenerEvent;
            }

            const discordMessage: DiscordMessage = await this.discordService.ChannelWebhook_sendMessage(sender.DiscordChannelWebhookId, message);

            if (!message) {
                this.logger.error(`${listenerEvent.Type} event failed to send to Discord`);
                return listenerEvent;
            }

            // update the listener event
            listenerEvent = await this.updateListenerEvent(listenerEvent.Id, {
                DeliveredAt: discordMessage.DiscordMessageSentAt,
                Status: 'COMPLETED',
                DiscordMessage: {
                    connect: {
                        Id: discordMessage.Id
                    }
                }
            });

            // notify the server that the event was sent
            notifier.notify(`'${listenerEvent.Type}' event sent to Discord`);

            return listenerEvent;
        } catch (error) {
            this.logger.error('Error sending discord message:', error);

            listenerEvent = await this.updateListenerEvent(listenerEvent!.Id, {
                Status: 'FAILED',
                Error: error.message,
            });

            notifier.notify(`'${listenerEvent.Type}' event failed to send to Discord: ${error.message}`);

            return listenerEvent;
        }
    }

    private _processFSHubFlightDeparted(flightDeparted: FSHubFlightDepartedEvent, listenerEventId: string) {
        const embeds: DiscordMessageEmbedDto[] = [];

        const departureAtDate = new Date(flightDeparted.departure_at);
        // Format: Tuesday, August 30, 2022 9:59 PM
        const formattedDepartureAt = departureAtDate.toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
        });

        const baseEmbed: DiscordMessageEmbedDto = {
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
        }

        if (flightDeparted.airline) {
            let airlineName = '🏢 ';
            if (flightDeparted.airline.handles.website) {
                airlineName += `[${flightDeparted.airline.name} (${flightDeparted.airline.profile.abbreviation})](${flightDeparted.airline.handles.website})`;
            } else {
                airlineName += `${flightDeparted.airline.name} (${flightDeparted.airline.profile.abbreviation})`;
            }

            baseEmbed.fields?.push({
                name: 'Airline',
                value: airlineName,
            })
        }

        if (flightDeparted.plan) {
            let flightPlanValues: string[] = [];
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
                })
            }
        }

        if (flightDeparted.aircraft) {
            let aircraftValues: string[] = [];
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
                })
            }
        }

        embeds.push(baseEmbed);

        return embeds;
    }

    // private _processFSHubFlightArrived(flightArrived: FlightEvent) {
    //     const embeds: DiscordMessageEmbedDto[] = [];

    //     return embeds;
    // }

    private _processFSHubFlightCompleted(flightCompleted: FSHubFlightCompletedEvent, listenerEventId: string) {
        const embeds: DiscordMessageEmbedDto[] = [];

        const baseEmbed: DiscordMessageEmbedDto = {
            title: '**Pilot Flight Completed**',
            description: `A flight ([#${flightCompleted.id}](${`https://fshub.io/flight/${flightCompleted.id}/report`})) from [${flightCompleted.departure.airport.name} (${flightCompleted.departure.airport.icao})](https://skyvector.com/airport/${flightCompleted.departure.airport.icao}) to [${flightCompleted.arrival.airport.name} (${flightCompleted.arrival.airport.icao})](https://skyvector.com/airport/${flightCompleted.arrival.airport.icao}) has been completed by 🧑‍✈️ ${flightCompleted.user.name}!`,
            fields: [],
            footer: {
                text: `Powered By 🐬ECHO Localizer | #${flightCompleted.id} | ${listenerEventId}`
            }
        }

        if (flightCompleted.airline) {
            let airlineName = '🏢 ';
            if (flightCompleted.airline.handles.website) {
                airlineName += `[${flightCompleted.airline.name} (${flightCompleted.airline.profile.abbreviation})](${flightCompleted.airline.handles.website})`;
            } else {
                airlineName += `${flightCompleted.airline.name} (${flightCompleted.airline.profile.abbreviation})`;
            }

            baseEmbed.fields?.push({
                name: 'Airline',
                value: airlineName,
            })
        }

        if (flightCompleted.plan) {
            let flightPlanValues: string[] = [];
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
                })
            }
        }

        if (flightCompleted.aircraft) {
            let aircraftValues: string[] = [];
            if (flightCompleted.aircraft.name) {
                aircraftValues.push(`✈️ Name: ${flightCompleted.aircraft.name} (${flightCompleted.aircraft.icao})`);
            }

            if (flightCompleted.aircraft.user_conf.tail) {
                aircraftValues.push(`🆔 Tail: ${flightCompleted.aircraft.user_conf.tail}`);
            }

            let fuelValue: string[] = [];
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
                })
            }
        }

        if (flightCompleted.arrival) {
            let landingInformation: string[] = [];
            if (flightCompleted.arrival.landing_rate) {
                if (flightCompleted.arrival.landing_rate > -150) {
                    landingInformation.push(`Landing Rate: **${flightCompleted.arrival.landing_rate} FPM** 🧈`);
                } else {
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
            } else {
                landingInformation.push(`Wind: **Unknown**`);
            }

            if (landingInformation.length > 0) {
                baseEmbed.fields?.push({
                    name: 'Landing Information',
                    value: landingInformation.join('\n'),
                })
            }
        }

        embeds.push(baseEmbed);

        return embeds;
    }
}
