export default {
    OnAirSyncEnabled: process.env.ONAIRSYNCENABLED === 'true',
    OnAirVASyncEnabled: process.env.ONAIRVASYNCENABLED === 'true',
    OnAirVAMembersSyncEnabled: process.env.ONAIRVAMEMBERSSYNCENABLED === 'true',
    OnAirCompanySyncEnabled: process.env.ONAIRCOMPANYSYNCENABLED === 'true',
    DiscordServerInviteLink: process.env.DISCORDSERVERINVITELINK,
    DiscordServerInviteLinkEnabled: process.env.DISCORDSERVERINVITELINKENABLED === 'true',
    AcceptingNewMembers: process.env.ACCEPTINGNEWMEMBERS === 'true',
    DiscordAuthEnabled: process.env.DISCORDAUTHENABLED === 'true',
    LocalAuthEnabled: process.env.LOCALAUTHENABLED === 'true',
    DiscordAuthCreateUser: process.env.DISCORDAUTHCREATEUSER === 'true',
};