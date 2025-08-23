import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.service';
import { DiscordMessage, DiscordMessageTemplate, ListenerEvent, ListenerEventSender, ListenerEventStatus, Prisma } from 'prisma/generated/prisma';
import * as crypto from 'crypto';
import { Airport, Flight, Owner, Pilot } from 'fshub-api/dist/types';
import { DiscordService } from '@discord/discord.service';
import { SendDiscordMessageDto } from '@discord/dto/SendDiscordMessageDto';
import { FSHubEventDto } from './dto/FSHubEvent.dto';
import { LoggerService } from '@logger/logger.service';
const notifier = require('node-notifier');
import Handlebars from "handlebars";

export type FlightEvent = {
    id: number
    user: FlightEventUser
    aircraft: FlightEventAircraft
    airline: FlightEventAirline
    plan: FlightEventPlan
    schedule: FlightEventSchedule
    airport: FlightEventAirport
    speed_tas: number
    heading: FlightEventHeading
    wind: FlightEventWind
    weight: FlightEventWeight
    gps: FlightEventGps
    datetime: string
    departure_at: string
    landing_rate?: number
    pitch?: number
    bank?: number
}

export type FlightEventUser = {
    id: number
    name: string
    email: string
    profile: FlightEventProfile
    locations: FlightEventLocations
    handles: FlightEventHandles
    timezone: string
    country: string
}
  
export type FlightEventProfile = {
    avatar_url: string
    bio: string
}
  
export type FlightEventLocations = {
    base: string
    locale: string
}
  
export type FlightEventHandles = {
    website: any
    twitter: string
    facebook: any
    vatsim: string
    ivao: string
}
  
export type FlightEventAircraft = {
    icao: string
    icao_name: string
    name: string
    type: string
    user_conf: FlightEventUserConf
}
  
export type FlightEventUserConf = {
    tail: string
    icao: string
}
  
export type FlightEventAirline = {
    id: number
    owner: FlightEventOwner
    name: string
    profile: FlightEventAirlineProfile
    handles: FlightEventHandles
}

export type FlightEventAirlineProfile = {
    abbreviation: string
    bio?: string
  }
  
export type FlightEventOwner = {
    id: number
    name: string
    email: string
    profile: FlightEventProfile
    locations: FlightEventLocations
    handles: FlightEventHandles
    timezone: string
    country: string
}
  
export type FlightEventPlan = {
    callsign: any;
    icao_arr: any;
    icao_dep: any;
    flight_no: string
    cruise_lvl: number
    departure: string
    arrival: string
}
  
export type FlightEventSchedule = {
    status: string
    time: string
}
  
export type FlightEventAirport = {
    icao: string
    iata: string
    name: string
    locale: FlightEventLocale
}
  
export type FlightEventLocale = {
    city: string
    state: any
    country: string
    gps: FlightEventGps
}
  
export type FlightEventGps = {
    lat: number
    lng: number
}
  
export type FlightEventHeading = {
    true: number
    magnetic: number
}
  
export type FlightEventWind = {
    speed: number
    direction: number
}
  
export type FlightEventWeight = {
    fuel: number
    zfw: number
}

@Injectable()
export class ListenerService {
    private readonly logger = new LoggerService(ListenerService.name);

    constructor(private prisma: PrismaService, private readonly discordService: DiscordService) {}

    async createListenerEvent(event: Prisma.ListenerEventCreateInput) {
        const listenerEvent = await this.prisma.listenerEvent.create({
            data: event,
        });

        return listenerEvent;
    }

    async updateListenerEvent(Id: number, event: Prisma.ListenerEventUpdateInput) {
        const listenerEvent = await this.prisma.listenerEvent.update({
            where: {
                Id,
            },
            data: event,
        });

        return listenerEvent;
    }

    async updateListenerEventStatus(Id: number, Status: ListenerEventStatus) {
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
                listenerEvent = await this.processFSHubListenerEvent(sender, body as FSHubEventDto);
                break;
            default:
                throw new Error('Invalid sender');
        }

        return listenerEvent;
    }

    private async compileMessageTemplate(slug: string, data: any) {
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

    private async processFSHubListenerEvent(sender: ListenerEventSender, body: FSHubEventDto) {
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
            
            let listenerEvent = await this.createListenerEvent({
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

            if (!sender.DiscordChannelWebhookId) {
                return listenerEvent;
            }
            listenerEvent = await this.updateListenerEventStatus(listenerEvent.Id, ListenerEventStatus.PROCESSING);
            const messageTemplates: DiscordMessageTemplate[] = await this.discordService.MessageTemplate_findMany();

            let content = '';
            switch (listenerEvent.Type) {
                case 'profile.updated':
                    const pilot = listenerEvent.Data as Pilot
                    content = `${pilot.name} has updated their profile.`;
                    console.log('profile.updated:', content);
                    break;
                case 'flight.departed':
                    this.logger.debug('flight.departed');
                    const flightDeparted = listenerEvent.Data as FlightEvent
                    content = await this.compileMessageTemplate('flight.departed', flightDeparted);
                    if (content === '') {
                        content = `${flightDeparted.airline.profile.abbreviation} ${flightDeparted.aircraft.name} #${flightDeparted.plan.flight_no} ${flightDeparted.plan.departure} to ${flightDeparted.plan.arrival} has departed.\n\`\`\``;
                    }

                    break;
                case 'flight.arrived':
                    this.logger.debug('flight.arrived');
                    const flightArrived = listenerEvent.Data as FlightEvent
                    content = await this.compileMessageTemplate('flight.arrived', flightArrived);
                    if (content === '') {
                        let msg: string[] = [];
                        if (flightArrived.landing_rate) {
                            msg.push(`Landing Rate: ${flightArrived.landing_rate} ft/min ${flightArrived.landing_rate > -200 ? '🧈': ''}`);
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
                    break;
                case 'flight.completed':
                    this.logger.debug('flight.completed');
                    const flightCompleted = listenerEvent.Data as FlightEvent
                    content = await this.compileMessageTemplate('flight.completed', flightCompleted);
                    if (content === '') {
                        content = `${flightCompleted.airline.profile.abbreviation} ${flightCompleted.aircraft.name} ${flightCompleted.plan.callsign} ${flightCompleted.plan.icao_dep} to ${flightCompleted.plan.icao_arr} flown by ${flightCompleted.user.name} has completed.`;
                    }
                    
                    break;
                case 'flight.updated':
                    this.logger.debug('flight.updated');
                    const flightUpdated = listenerEvent.Data as FlightEvent
                    content = await this.compileMessageTemplate('flight.updated', flightUpdated);
                    if (content === '') {
                        content = `${flightUpdated.airline.profile.abbreviation} ${flightUpdated.aircraft.name} ${(flightUpdated.plan.flight_no) ? flightUpdated.plan.flight_no : ''} ${flightUpdated.plan.departure} to ${flightUpdated.plan.arrival} flown by ${flightUpdated.user.name} has updated.`;
                    }

                    break;
                case 'website.test':
                    this.logger.debug('website.test');
                    content = JSON.stringify(listenerEvent.Data, null, 2) as string;
                    this.logger.debug('website.test');
                    break;
            }

            const discordMessage: SendDiscordMessageDto = {
                content: content,
            };

            const message: DiscordMessage = await this.discordService.ChannelWebhook_sendMessage(sender.DiscordChannelWebhookId, discordMessage);

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

}
