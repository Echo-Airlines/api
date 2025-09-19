import { OnModuleInit } from '@nestjs/common';
import { OnAirAircraft, OnAirAirport, OnAirFlight } from './types';
import { VirtualAirlineService } from '@/virtual-airline/virtual-airline.service';
export declare class OnAirApiService implements OnModuleInit {
    private readonly virtualAirlineService;
    private readonly logger;
    private onAirApi;
    private config;
    constructor(virtualAirlineService: VirtualAirlineService);
    onModuleInit(): Promise<void>;
    initialize(): Promise<void>;
    getCompany(companyId?: string): Promise<import("onair-api").Company | null | undefined>;
    getVirtualAirline(virtualAirlineId?: string): Promise<import("onair-api").VirtualAirline | null>;
    getVirtualAirlineMembers(virtualAirlineId?: string): Promise<import("onair-api").Member[] | null>;
    getVirtualAirlineRoles(virtualAirlineId?: string): Promise<import("onair-api").VARole[] | null>;
    getVirtualAirlineFleet(virtualAirlineId?: string): Promise<OnAirAircraft[]>;
    getVirtualAirlineFlights(virtualAirlineId?: string): Promise<OnAirFlight[]>;
    getAirportByICAO(icao: string): Promise<OnAirAirport | null>;
    getVirtualAirlineNotifications(virtualAirlineId: string): Promise<import("onair-api").Notification[]>;
}
