import { AppConfigService } from '@/app-config/app-config.service';
import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import OnAirApi from 'onair-api';
import { OnAirCompany, OnAirMember, OnAirVirtualAirline, OnAirVirtualAirlineRole } from './types';
import { AppConfig } from 'generated/prisma';

@Injectable()
export class OnAirApiService implements OnModuleInit {
    private readonly logger = new Logger(OnAirApiService.name);
    private onAirApi: OnAirApi|null = null;
    private config: AppConfig|null = null;
    
    constructor(
        private readonly appConfigService: AppConfigService
    ) {
        this._initialize();
    }

    async onModuleInit() {
        await this._initialize();
        
        // this should also run an interval to check if there are any jobs that are now active and should be scheduled
        setInterval(async () => {
            if (!this.onAirApi) {
                this._initialize();
            }
        }, 60000); // run every 60 seconds
    }
    
    private async _initialize() {
        this.config = await this.appConfigService.getLatest();

        if (!this.config?.ApiKey || !this.config?.VirtualAirlineId) {
            this.logger.warn('Missing required OnAir configuration. Please set the config in the admin panel.');
            return;
        }

        if (!this.config.OnAirSyncEnabled) {
            this.logger.warn('OnAir sync is not enabled. Please enable it in the admin panel.');
            return;
        }
    
        this.onAirApi = new OnAirApi({
            apiKey: this.config.ApiKey,
            companyId: this.config.VirtualAirlineId,
            vaId: this.config.VirtualAirlineId
        });
    }

    public async getCompany(companyId?: string) {
        if (!this.onAirApi) {
            this.logger.warn('OnAir API not initialized. Please set the config in the admin panel.');
            return;
        }

        const result: OnAirCompany|null = await this.onAirApi.getCompany(companyId);

        return result;
    }

    public async getVirtualAirline(virtualAirlineId?: string) {
        if (!this.onAirApi) {
            this.logger.warn('OnAir API not initialized. Please set the config in the admin panel.');
            return null;
        }

        const result: OnAirVirtualAirline|null = await this.onAirApi.getVirtualAirline(virtualAirlineId);
        
        return result;
    }

    public async getVirtualAirlineMembers(virtualAirlineId?: string) {
        if (!this.onAirApi) {
            this.logger.warn('OnAir API not initialized. Please set the config in the admin panel.');
            return null;
        }

        const result: OnAirMember[] = await this.onAirApi.getVirtualAirlineMembers(virtualAirlineId);

        return result;
    }

    public async getVirtualAirlineRoles(virtualAirlineId?: string) {
        if (!this.onAirApi) {
            this.logger.warn('OnAir API not initialized. Please set the config in the admin panel.');
            return null;
        }

        const result: OnAirVirtualAirlineRole[] = await this.onAirApi.getVirtualAirlineRoles(virtualAirlineId);

        return result;
    }
}
