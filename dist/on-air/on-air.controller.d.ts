import { OnAirApiService } from './on-air-api.service';
export declare class OnAirController {
    private readonly onAirApiService;
    constructor(onAirApiService: OnAirApiService);
    getVirtualAirlines(): Promise<import("onair-api").VirtualAirline>;
    getVirtualAirlineMembers(): Promise<import("onair-api").Member[]>;
    getVirtualAirlineById(id: string): Promise<import("onair-api").VirtualAirline | null>;
    getVirtualAirlineMembersById(id: string): Promise<import("onair-api").Member[] | null>;
}
