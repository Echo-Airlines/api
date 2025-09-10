import { PrismaService } from '@prisma/prisma.service';
import { ListenerEventSender, ListenerEventStatus, Prisma } from 'prisma/generated/prisma';
import { DiscordService } from '@discord/discord.service';
import { WebsocketGateway } from '@websocket/websocket.gateway';
export type FlightEvent = {
    id: number;
    user: FlightEventUser;
    aircraft: FlightEventAircraft;
    airline: FlightEventAirline;
    plan: FlightEventPlan;
    schedule: FlightEventSchedule;
    airport: FlightEventAirport;
    speed_tas: number;
    heading: FlightEventHeading;
    wind: FlightEventWind;
    weight: FlightEventWeight;
    gps: FlightEventGps;
    datetime: string;
    departure_at: string;
    landing_rate?: number;
    pitch?: number;
    bank?: number;
    country?: string;
    country_emoji?: string;
};
export type FlightEventUser = {
    id: number;
    name: string;
    email: string;
    profile: FlightEventProfile;
    locations: FlightEventLocations;
    handles: FlightEventHandles;
    timezone: string;
    country: string;
};
export type FlightEventProfile = {
    avatar_url: string;
    bio: string;
};
export type FlightEventLocations = {
    base: string;
    locale: string;
};
export type FlightEventHandles = {
    website: any;
    twitter: string;
    facebook: any;
    vatsim: string;
    ivao: string;
};
export type FlightEventAircraft = {
    icao: string;
    icao_name: string;
    name: string;
    type: string;
    user_conf: FlightEventUserConf;
};
export type FlightEventUserConf = {
    tail: string;
    icao: string;
};
export type FlightEventAirline = {
    id: number;
    owner: FlightEventOwner;
    name: string;
    profile: FlightEventAirlineProfile;
    handles: FlightEventHandles;
};
export type FlightEventAirlineProfile = {
    abbreviation: string;
    bio?: string;
};
export type FlightEventOwner = {
    id: number;
    name: string;
    email: string;
    profile: FlightEventProfile;
    locations: FlightEventLocations;
    handles: FlightEventHandles;
    timezone: string;
    country: string;
};
export type FlightEventPlan = {
    callsign: any;
    icao_arr: any;
    icao_dep: any;
    flight_no: string;
    cruise_lvl: number;
    departure: string;
    arrival: string;
};
export type FlightEventSchedule = {
    status: string;
    time: string;
};
export type FlightEventAirport = {
    icao: string;
    iata: string;
    name: string;
    locale: FlightEventLocale;
};
export type FlightEventLocale = {
    city: string;
    state: any;
    country: string;
    gps: FlightEventGps;
};
export type FlightEventGps = {
    lat: number;
    lng: number;
};
export type FlightEventHeading = {
    true: number;
    magnetic: number;
};
export type FlightEventWind = {
    speed: number;
    direction: number;
};
export type FlightEventWeight = {
    fuel: number;
    zfw: number;
};
export declare class ListenerService {
    private prisma;
    private readonly discordService;
    private readonly websocketGateway;
    private readonly logger;
    constructor(prisma: PrismaService, discordService: DiscordService, websocketGateway: WebsocketGateway);
    createListenerEvent(event: Prisma.ListenerEventCreateInput): Promise<{
        Id: number;
        CreatedAt: Date;
        UpdatedAt: Date;
        Type: string;
        Status: import("prisma/generated/prisma").$Enums.ListenerEventStatus;
        Variant: string;
        SentAt: Date;
        SenderId: string;
        Error: string | null;
        Data: Prisma.JsonValue | null;
        DiscordMessageId: string | null;
        DeliveredAt: Date | null;
    }>;
    updateListenerEvent(Id: number, event: Prisma.ListenerEventUpdateInput): Promise<{
        Id: number;
        CreatedAt: Date;
        UpdatedAt: Date;
        Type: string;
        Status: import("prisma/generated/prisma").$Enums.ListenerEventStatus;
        Variant: string;
        SentAt: Date;
        SenderId: string;
        Error: string | null;
        Data: Prisma.JsonValue | null;
        DiscordMessageId: string | null;
        DeliveredAt: Date | null;
    }>;
    updateListenerEventStatus(Id: number, Status: ListenerEventStatus): Promise<{
        Id: number;
        CreatedAt: Date;
        UpdatedAt: Date;
        Type: string;
        Status: import("prisma/generated/prisma").$Enums.ListenerEventStatus;
        Variant: string;
        SentAt: Date;
        SenderId: string;
        Error: string | null;
        Data: Prisma.JsonValue | null;
        DiscordMessageId: string | null;
        DeliveredAt: Date | null;
    }>;
    getSenderBySlug(Slug: string): Promise<({
        DiscordChannelWebhook: {
            Id: string;
            CreatedAt: Date;
            UpdatedAt: Date;
            Name: string;
            Description: string | null;
            IsActive: boolean;
            WebhookUrl: string;
            ChannelId: string;
            Token: string;
        } | null;
    } & {
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Name: string;
        Description: string | null;
        Slug: string;
        IsActive: boolean;
        Token: string;
        DiscordChannelWebhookId: string | null;
    }) | null>;
    processListenerEvent(sender: ListenerEventSender, body: any): Promise<{
        Id: number;
        CreatedAt: Date;
        UpdatedAt: Date;
        Type: string;
        Status: import("prisma/generated/prisma").$Enums.ListenerEventStatus;
        Variant: string;
        SentAt: Date;
        SenderId: string;
        Error: string | null;
        Data: Prisma.JsonValue | null;
        DiscordMessageId: string | null;
        DeliveredAt: Date | null;
    }>;
    private compileMessageTemplate;
    private processFSHubListenerEvent;
}
