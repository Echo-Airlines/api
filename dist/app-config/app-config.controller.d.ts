import { AppConfigService } from './app-config.service';
import { PublicAppConfigDto } from './dto/public-app-config.dto';
export declare class AppConfigController {
    private readonly appConfigService;
    constructor(appConfigService: AppConfigService);
    findLatest(req: Request): Promise<PublicAppConfigDto>;
}
