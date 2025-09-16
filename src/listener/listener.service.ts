import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.service';
import { DiscordMessage, DiscordMessageTemplate, ListenerEvent, ListenerEventSender, ListenerEventStatus, Prisma } from 'prisma/generated/prisma';
import { DiscordService } from '@discord/discord.service';
import { DiscordMessageEmbedDto, SendDiscordMessageDto } from '@discord/dto/SendDiscordMessageDto';
import { FSHubEventDto } from './dto/FSHubEvent.dto';
import { LoggerService } from '@logger/logger.service';
import { WebsocketGateway } from '@websocket/websocket.gateway';
const notifier = require('node-notifier');
import Handlebars from "handlebars";
import { FSHubFlightDepartedEvent } from './type/FSHubFlightDepartedEvent';
import { FSHubFlightCompletedEvent } from './type/FSHubFlightCompletedEvent';
import { Colors } from 'discord.js';
import { FSHubScreenshot, FSHubService } from '@fshub/fshub.service';


@Injectable()
export class ListenerService {
    private readonly logger = new LoggerService(ListenerService.name);

    constructor(
        private prisma: PrismaService, 
        private readonly discordService: DiscordService,
        private readonly websocketGateway: WebsocketGateway,
        private readonly fshubService: FSHubService
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
        let listenerEvent: ListenerEvent|undefined = undefined;

        switch (sender.Slug) {
            case 'fshub':
                const fshubBody: FSHubEventDto = body as FSHubEventDto;
                if (fshubBody._data.speed_tas && fshubBody._data.speed_tas > 20) {
                    listenerEvent = await this._processFSHubListenerEvent(sender, fshubBody);
                } else {
                    this.logger.warn(`Speed is too low to process '${fshubBody._type}' event for flight #${fshubBody._data.id}`);
                }
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
        let listenerEvent: ListenerEvent|undefined = undefined;

        try {
            let SentAt: Date;
            if (body._data.speed_tas && body._data.speed_tas <= 20 || !body._data.speed_tas) {
                throw new Error('Speed is too low to process flight.departed event');
            }

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
            // const messageTemplate: DiscordMessageTemplate|null = await this.discordService.MessageTemplate_findOneBySlug(listenerEvent.Type);

            let message: SendDiscordMessageDto = {
                content: null,
                avatar_url: 'https://www.echoairlines.com/echo-localizer-logo.png',
                embeds: [],
                username: "ECHO Localizer 🐋",
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
                    message.embeds = await this._processFSHubFlightDeparted(flightDeparted, listenerEvent.Id);
                    
                    break;
                // case 'flight.arrived':
                //     const flightArrived = listenerEvent.Data as FlightEvent
                //     this.logger.debug(`flight.arrived | #${flightArrived.id} - https://fshub.io/flight/${flightArrived.id}/report`);
                //     message.embeds = this._processFSHubFlightArrived(flightArrived);

                //     break;
                case 'flight.completed':
                    const flightCompleted = listenerEvent.Data as FSHubFlightCompletedEvent
                    this.logger.debug(`flight.completed | #${flightCompleted.id} - https://fshub.io/flight/${flightCompleted.id}/report`);
                    message.embeds = await this._processFSHubFlightCompleted(flightCompleted, listenerEvent.Id);

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
        } catch (error: any) {
            this.logger.error(`Error sending discord message:\n${error.message}`);
            let _listenerEvent: ListenerEvent|undefined = listenerEvent as ListenerEvent | undefined;

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

    private async _processFSHubFlightDeparted(flightDeparted: FSHubFlightDepartedEvent, listenerEventId: string) {
        // Build the description for the embed
        let airlineName = '';
        const description: string[] = [];
        const flightPlanValues: string[] = [];
        const aircraftValues: string[] = [];
        const embeds: DiscordMessageEmbedDto[] = [];

        try {
            const departureAtDate = new Date(flightDeparted.departure_at || '');
            
            const formattedDepartureAt = departureAtDate.toLocaleString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: '2-digit',
                hour12: true,
            });

            description.push(`Flight (#${flightDeparted.id}) has departed`);

            if (flightDeparted.airport) {
                description.push(`from [${flightDeparted.airport.name} (${flightDeparted.airport.icao})](https://skyvector.com/airport/${flightDeparted.airport.icao})`);
            } else if (flightDeparted.plan) {
                description.push(`from [${flightDeparted.plan.departure}](https://skyvector.com/airport/${flightDeparted.plan.departure})`);
            }

            description.push(` at ${formattedDepartureAt}!`);
        } catch (error) {
            this.logger.error(`Error formatting description for flight.departed event ${listenerEventId}: ${error.message}`);
        }

        const baseEmbed: DiscordMessageEmbedDto = {
            title: '**Flight Departed**',
            description: description.join(' '),
            color: this._scheduleColorCode(flightDeparted.schedule.status),
            fields: [],
            author: {
                name: 'Echo 🐋',
                icon_url: 'https://www.echoairlines.com/echo-localizer-logo.png',
            },
            footer: {
                text: `Powered By 🐋 ECHO Localizer | #${flightDeparted.id} | ${listenerEventId}`
            }
        }

        if (flightDeparted.user) {
            this.logger.debug(`Adding pilot to embed for flight.departed event ${listenerEventId}: ${flightDeparted.user.name}`);
            baseEmbed.fields?.push({
                name: 'Pilot',
                value: `[${flightDeparted.user.name}](https://fshub.io/pilot/${flightDeparted.user.id}/profile)`,
            });
            this.logger.debug(`Added pilot to embed for flight.departed event ${listenerEventId}: ${flightDeparted.user.name}`);
        }

        // Add the airline to the embed
        if (flightDeparted.airline) {
            this.logger.debug(`Adding airline to embed for flight.departed event ${listenerEventId}: ${flightDeparted.airline.name}`);
            if (flightDeparted.airline.handles.website) {
                airlineName += `🏢 [${flightDeparted.airline.name} (${flightDeparted.airline.profile.abbreviation})](${flightDeparted.airline.handles.website})`;
            } else {
                airlineName += `🏢 ${flightDeparted.airline.name} (${flightDeparted.airline.profile.abbreviation})`;
            }

            baseEmbed.fields?.push({
                name: 'Airline',
                value: airlineName,
            })

            this.logger.debug(`Added airline to embed for flight.departed event ${listenerEventId}: ${flightDeparted.airline.name}`);
        }

        // Add the flight plan to the embed
        if (flightDeparted.plan) {
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

                this.logger.debug(`Added flight plan to embed for flight.departed event ${listenerEventId}: ${flightDeparted.plan.flight_no}`);
            }
        }

        // Add the aircraft to the embed
        if (flightDeparted.aircraft) {
            if (flightDeparted.aircraft.name) {
                aircraftValues.push(`✈️ Name: ${flightDeparted.aircraft.icao_name}${flightDeparted.aircraft.icao && flightDeparted.aircraft.icao != '' ? ` (${flightDeparted.aircraft.icao})` : ''}`);
            }

            if (flightDeparted.aircraft.name && flightDeparted.aircraft.name.length > 0) {
                aircraftValues.push(`🎨 Livery: ${flightDeparted.aircraft.name}`);
            }

            aircraftValues.push(`🆔 Tail: ${flightDeparted.aircraft.user_conf.tail !== '' ? flightDeparted.aircraft.user_conf.tail : 'N/A'}`);

            if (aircraftValues.length > 0) {
                baseEmbed.fields?.push({
                    name: 'Aircraft',
                    value: aircraftValues.join('\n'),
                })

                this.logger.debug(`Added aircraft to embed for flight.departed event ${listenerEventId}: ${flightDeparted.aircraft.name}`);
            }
        }

        let takeoffInformation: string[] = [];

        if (flightDeparted.pitch) {
            takeoffInformation.push(`Pitch: **${flightDeparted.pitch}°** / Bank: **${flightDeparted.bank}°**`);
        }

        if (flightDeparted.speed_tas && flightDeparted.speed_tas > 10) {
            takeoffInformation.push(`Speed: **${flightDeparted.speed_tas} KTS TAS**`);
        }

        if (flightDeparted.wind) {
            takeoffInformation.push(`Wind: **${flightDeparted.wind.direction}° @ ${flightDeparted.wind.speed} KTS**`);
        }

        if (takeoffInformation.length > 0) {
            baseEmbed.fields?.push({
                name: 'Takeoff Information',
                value: takeoffInformation.join('\n'),
            })
        }

        // Add the embed to the array
        embeds.push(baseEmbed);
        this.logger.debug(`Added embed to array for flight.departed event ${listenerEventId}`);

        return embeds;
    }

    private _scheduleColorCode(status: string|null): number {
        switch (status) {
            case 'CANCELLED':
                return Colors.Red;
            case 'ON_TIME':
                return Colors.Green;
            case 'LATE':
                return Colors.Orange;
            case 'ARRIVED':
                return Colors.Blue;
            default:
                return Colors.Default;
        }
    }

    private async _processFSHubFlightCompleted(flightCompleted: FSHubFlightCompletedEvent, listenerEventId: string) {
        const embeds: DiscordMessageEmbedDto[] = [];

        let baseEmbed: DiscordMessageEmbedDto = {
            title: '**Pilot Flight Completed**',
            description: `A flight ([#${flightCompleted.id}](${`https://fshub.io/flight/${flightCompleted.id}/report`})) from [${flightCompleted.departure.airport.name} (${flightCompleted.departure.airport.icao})](https://skyvector.com/airport/${flightCompleted.departure.airport.icao}) to [${flightCompleted.arrival.airport.name} (${flightCompleted.arrival.airport.icao})](https://skyvector.com/airport/${flightCompleted.arrival.airport.icao}) has been completed by 🧑‍✈️ [${flightCompleted.user.name}](https://fshub.io/pilot/${flightCompleted.user.id}/profile)!`,
            url: `https://fshub.io/flight/${flightCompleted.id}/report`,
            fields: [],
            color: this._scheduleColorCode(flightCompleted.schedule_status),
            timestamp: new Date().toISOString(),
            footer: {
                text: `Powered By 🐋 ECHO Localizer | #${flightCompleted.id} | ${listenerEventId}`
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

        try {
            // build the screenshots by fetching the screenshots from the fshub service
            let screenshots: FSHubScreenshot[] = await this.fshubService.getFlightScreenshotsById(flightCompleted.id);
            
            // if there are screenshots, add the first one to the baseEmbed
            if (screenshots.length <= 0) {
                embeds.push(baseEmbed);
                return embeds;
            }

            if (screenshots.length > 4) {
                screenshots = screenshots.slice(0, 4);
            }

            let screenshotTitleField = '';

            if (screenshots.length > 4) {
                screenshotTitleField += `Here are the last ${screenshots.length} screenshots of the flight.\n`;
            }

            screenshotTitleField += `[You can click here to view all screenshots.](https://fshub.io/flight/${flightCompleted.id}/media)`;
            
            baseEmbed.fields?.push({
                name: 'Flight Screenshots',
                value: screenshotTitleField,
            })

            baseEmbed.image = {
                url: screenshots[0].urls.fullsize,
            }

            // baseEmbed.fields?.push({
            //     name: 'Flight Screenshots',
            //     value: 'Here are the last 4 screenshots of the flight',
            // })

            embeds.push(baseEmbed);
            // then loop through the screenshots and add them to the embeds array, skipping the first one
            // let count = 0;
            // let max = 4; // max 4 screenshots per embed
            // let screenshotEmbed: DiscordMessageEmbedDto = {
            //     url: `https://fshub.io/flight/${flightCompleted.id}/report`,
            //     image: {
            //         url: screenshots[0].urls.fullsize,
            //     }
            // }

            // embeds.push(screenshotEmbed);

            for (const screenshot of screenshots.slice(1)) {
                const imgEmbed: DiscordMessageEmbedDto = {
                    url: `https://fshub.io/flight/${flightCompleted.id}/report`,
                    image: {
                        url: screenshot.urls.fullsize,
                    }
                }

                embeds.push(imgEmbed)
            }
        } catch (error) {
            if (error.message === 'No screenshots found') {
                embeds.push(baseEmbed);
                return embeds;
            }

            this.logger.error(`Error fetching screenshots for flight.completed event ${listenerEventId}: ${error.message}`);
            embeds.push(baseEmbed);
            return embeds;
        }

        return embeds;
    }
}
