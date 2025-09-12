import { Injectable } from '@nestjs/common';
import { AppConfigService } from '@app-config/app-config.service';
import FSHubApi, { type Screenshot, type Flight } from 'fshub-api';

export type FSHubScreenshot = Screenshot;
export type FSHubFlight = Flight;

@Injectable()
export class FSHubService {
    private fshubApi: FSHubApi;
    constructor(private readonly appConfigService: AppConfigService) {}

    private async initializeFSHubApi() {
        const appConfig = await this.appConfigService.getLatest();

        if (!appConfig) {
            throw new Error('No app config found. Please ensure the app config is set.');
        }

        if (!appConfig.FSHubApiKey || appConfig.FSHubApiKey === '') {
            throw new Error('FSHUB_API_KEY is not set. Please ensure the FSHUB_API_KEY is set.');
        }

        this.fshubApi = new FSHubApi({ apiKey: appConfig.FSHubApiKey });
    }

    public async getFlightScreenshotsById(id: number) {
        if (!id) {
            throw new Error('Flight ID is required');
        }

        if (!this.fshubApi) {
            await this.initializeFSHubApi();
        }

        if (!this.fshubApi) {
            throw new Error('FSHub API is not initialized');
        }


        const screenshots: FSHubScreenshot[] = await this.fshubApi.Flight_getFlightScreenshotsById(id);

        return screenshots;
    }

    public async getFlightById(id: number) {
        if (!id) {
            throw new Error('Flight ID is required');
        }

        if (!this.fshubApi) {
            await this.initializeFSHubApi();
        }

        if (!this.fshubApi) {
            throw new Error('FSHub API is not initialized');
        }

        const flight: FSHubFlight = await this.fshubApi.Flight_getFlightById(id);

        return flight;
    }
}
