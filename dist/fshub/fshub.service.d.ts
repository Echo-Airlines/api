import { AppConfigService } from '@app-config/app-config.service';
import { type Screenshot, type Flight, FSHubResponse } from 'fshub-api';
export type FSHubScreenshot = Screenshot;
export type FSHubFlight = Flight;
export declare class FSHubService {
    private readonly appConfigService;
    private fshubApi;
    constructor(appConfigService: AppConfigService);
    private initializeFSHubApi;
    getFlightScreenshotsById(id: number): Promise<Screenshot[]>;
    getFlightById(id: number): Promise<FSHubResponse<Flight>>;
}
