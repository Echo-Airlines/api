import { AppConfig } from "prisma/generated/prisma";
export type PublicAppConfig = Omit<AppConfig, 'ApiKey' | 'VirtualAirlineId' | 'CreatedAt' | 'UpdatedAt'> & {
    ApiKey: undefined;
    VirtualAirlineId: undefined;
    CreatedAt: undefined;
    UpdatedAt: undefined;
};
export declare class PublicAppConfigDto {
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
    constructor(appConfig: AppConfig);
}
