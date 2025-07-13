import { AppConfig } from "prisma/generated/prisma";

export type PublicAppConfig = Omit<AppConfig, 'ApiKey' | 'VirtualAirlineId' | 'CreatedAt' | 'UpdatedAt'> & {
    ApiKey: undefined;
    VirtualAirlineId: undefined;
    CreatedAt: undefined;
    UpdatedAt: undefined;
};

export class PublicAppConfigDto {
    OnAirSyncEnabled: boolean;
    OnAirVASyncEnabled: boolean;
    OnAirVAMembersSyncEnabled: boolean;
    OnAirCompanySyncEnabled: boolean;
    DiscordServerInviteLink: string|null;
    DiscordServerInviteLinkEnabled: boolean;
    AcceptingNewMembers: boolean;
    DiscordAuthEnabled: boolean;
    LocalAuthEnabled: boolean;  

    constructor(appConfig: AppConfig) {
        this.OnAirSyncEnabled = appConfig.OnAirSyncEnabled;
        this.OnAirVASyncEnabled = appConfig.OnAirVASyncEnabled;
        this.OnAirVAMembersSyncEnabled = appConfig.OnAirVAMembersSyncEnabled;
        this.OnAirCompanySyncEnabled = appConfig.OnAirCompanySyncEnabled;
        this.DiscordServerInviteLink = appConfig.DiscordServerInviteLink;
        this.DiscordServerInviteLinkEnabled = appConfig.DiscordServerInviteLinkEnabled;
        this.AcceptingNewMembers = appConfig.AcceptingNewMembers;
        this.DiscordAuthEnabled = appConfig.DiscordAuthEnabled;
        this.LocalAuthEnabled = appConfig.LocalAuthEnabled;
    }
}