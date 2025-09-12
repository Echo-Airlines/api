import { AppConfigService } from './app-config.service';
import { AppConfig } from 'prisma/generated/prisma';
import { PublicAppConfigDto } from './dto/public-app-config.dto';
export declare class AppConfigController {
    private readonly appConfigService;
    constructor(appConfigService: AppConfigService);
    findLatest(req: Request): Promise<PublicAppConfigDto>;
    upsert(req: any, dto: AppConfig): Promise<{
        Id: number;
        CreatedAt: Date;
        UpdatedAt: Date;
        OnAirSyncEnabled: boolean;
        OnAirVASyncEnabled: boolean;
        OnAirVAMembersSyncEnabled: boolean;
        OnAirCompanySyncEnabled: boolean;
        DiscordServerInviteLink: string | null;
        DiscordServerInviteLinkEnabled: boolean;
        AcceptingNewMembers: boolean;
        DiscordAuthEnabled: boolean;
        DiscordAuthCreateUser: boolean;
        LocalAuthEnabled: boolean;
        VirtualAirlineInitiated: boolean;
        FSHubApiKey: string;
    }>;
}
