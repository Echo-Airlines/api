import { AppConfigService } from './app-config.service';
import { Response } from 'express';
import { PublicLiveryDto } from './dto/public-livery.dto';
export declare class LiveryController {
    private readonly appConfigService;
    constructor(appConfigService: AppConfigService);
    findAllActive(): Promise<PublicLiveryDto[]>;
    downloadLivery(id: string, res: Response): Promise<void>;
}
