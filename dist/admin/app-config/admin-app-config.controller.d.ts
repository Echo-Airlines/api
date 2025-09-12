import { AppConfig } from "prisma/generated/prisma";
import { AdminAppConfigService } from "./admin-app-config.service";
export declare class AdminAppConfigController {
    private readonly appConfigService;
    constructor(appConfigService: AdminAppConfigService);
    findLatest(req: Request): Promise<{
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
