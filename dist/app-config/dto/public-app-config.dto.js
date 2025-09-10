"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicAppConfigDto = void 0;
class PublicAppConfigDto {
    OnAirSyncEnabled;
    OnAirVASyncEnabled;
    OnAirVAMembersSyncEnabled;
    OnAirCompanySyncEnabled;
    DiscordServerInviteLink;
    DiscordServerInviteLinkEnabled;
    AcceptingNewMembers;
    DiscordAuthEnabled;
    DiscordAuthCreateUser;
    LocalAuthEnabled;
    VirtualAirlineInitiated;
    constructor(appConfig) {
        this.OnAirSyncEnabled = appConfig.OnAirSyncEnabled;
        this.OnAirVASyncEnabled = appConfig.OnAirVASyncEnabled;
        this.OnAirVAMembersSyncEnabled = appConfig.OnAirVAMembersSyncEnabled;
        this.OnAirCompanySyncEnabled = appConfig.OnAirCompanySyncEnabled;
        this.DiscordServerInviteLink = appConfig.DiscordServerInviteLink;
        this.DiscordServerInviteLinkEnabled = appConfig.DiscordServerInviteLinkEnabled;
        this.AcceptingNewMembers = appConfig.AcceptingNewMembers;
        this.DiscordAuthEnabled = appConfig.DiscordAuthEnabled;
        this.LocalAuthEnabled = appConfig.LocalAuthEnabled;
        this.VirtualAirlineInitiated = appConfig.VirtualAirlineInitiated ?? false;
        this.DiscordAuthCreateUser = appConfig.DiscordAuthCreateUser;
    }
}
exports.PublicAppConfigDto = PublicAppConfigDto;
//# sourceMappingURL=public-app-config.dto.js.map