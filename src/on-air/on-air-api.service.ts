import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import OnAirApi from 'onair-api';
import { OnAirCompany, OnAirMember, OnAirVirtualAirline, OnAirVirtualAirlineRole } from './types';
import { AppConfig, VirtualAirline } from 'prisma/generated/prisma';
import { VirtualAirlineService } from '@/virtual-airline/virtual-airline.service';

@Injectable()
export class OnAirApiService implements OnModuleInit {
    private readonly logger = new Logger(OnAirApiService.name);
    private onAirApi: OnAirApi|null = null;
    private config: AppConfig|null = null;
    
    constructor(
        private readonly virtualAirlineService: VirtualAirlineService,
    ) {
        this.initialize();
    }

    async onModuleInit() {
        await this.initialize();
        // this should also run an interval to check if there are any jobs that are now active and should be scheduled
        // setInterval(async () => {
        //     if (!this.onAirApi) {
        //         this.initialize();
        //     }
        // }, 60000); // run every 60 seconds
    }
    
    public async initialize() {
        const virtualAirline: VirtualAirline|null = await this.virtualAirlineService.getPrimaryVirtualAirline();

        if (!virtualAirline) {
            this.logger.warn('Missing required virtual airline configuration. Please create a virtual airline in the admin panel.');
            return;
        }
        
        this.onAirApi = new OnAirApi({
            apiKey: virtualAirline.ApiKey,
            companyId: virtualAirline.Id,
            vaId: virtualAirline.Id
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
