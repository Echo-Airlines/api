"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedData_DiscordMessageTemplates = exports.SeedData_VirtualAirline = exports.SeedData_AppConfig = exports.SeedData_AircraftClasses = exports.SeedData_AircraftStatuses = exports.SeedData_Jobs = exports.SeedData_Liveries = exports.SeedData_Worlds = exports.SeedData_Users = exports.SeedData_UserRoles = exports.SeedData_Permissions = void 0;
const prisma_1 = require("../../prisma/generated/prisma/index.js");
exports.SeedData_Permissions = [
    {
        Slug: 'my-profile-view',
        Name: 'View My Profile',
        Entity: 'user',
        Action: 'view',
    },
    {
        Slug: 'my-profile-update',
        Name: 'Update My Profile',
        Entity: 'user',
        Action: 'update',
    },
];
exports.SeedData_UserRoles = [
    {
        Slug: 'admin',
        Name: 'Admin',
    },
    {
        Slug: 'user',
        Name: 'User',
        Permissions: {
            connect: [
                { Slug: 'my-profile-view' },
                { Slug: 'my-profile-update' }
            ]
        },
    },
    {
        Slug: 'member',
        Name: 'Member',
    },
    {
        Slug: 'premium',
        Name: 'Premium Member',
    },
    {
        Slug: 'owner',
        Name: 'Owner',
    },
    {
        Slug: 'manager',
        Name: 'Manager',
    }
];
exports.SeedData_Users = [
    {
        Username: 'admin',
        Password: 'password',
        Email: 'admin@echoairlines.com',
        FirstName: 'Gordon',
        LastName: 'Freeman',
        FirstLoginCompleted: true,
        IsVerified: true,
        Roles: {
            connect: [{ Slug: 'admin' }, { Slug: 'user' }]
        },
        PrivacySettings: {
            create: {
                ShowOnlineStatus: false,
                ShowFirstName: false,
                ShowLastNameInitial: false,
            }
        }
    },
    {
        Username: 'johndoe',
        Password: 'password',
        Email: 'johndoe@echoairlines.com',
        FirstName: 'John',
        LastName: 'Doe',
        FirstLoginCompleted: false,
        Roles: {
            connect: [{ Slug: 'user' }]
        },
        PrivacySettings: {
            create: {
                ShowOnlineStatus: true,
                ShowFirstName: true,
                ShowLastNameInitial: true,
            }
        }
    },
];
exports.SeedData_Worlds = [
    {
        Id: 'c83eb5d5-9dc5-452f-b261-69b45cb0951b',
        Name: 'Thunder',
        Slug: 'THUNDER',
        Description: 'Thunder is a challenging world without AI pilots, and a challenging world economy. Thunder is the final level, no adis, no payout multiplier and AI pilots may not fly without you at the controls. In this world every flight your company performs must be completed by you in a connected simulator. No fees applied for not using rented aircraft.',
    },
    {
        Id: 'be6ab20f-809f-4c57-aaa6-9e78a3022ba8',
        Name: 'Stratus',
        Slug: 'STRATUS',
        Description: 'Stratus is a challening world with AI pilots, and a challenging world economy. Stratus is the final step in difficulty, where you can still utilize AI employees to fly planes even when you are away from the controls. Otherwise, all the aids are disabled.',
    },
    {
        Id: 'ad3ec8a4-246e-4abb-84a9-9dbc43bb6ae6',
        Name: 'Cumulus',
        Slug: 'CUMULUS',
        Description: 'Cumulus is a Relaxed & Casual world with AI pilots, and a n easy world economy. Cumulus is the recommended world for first time CEOs as it features both the most forgiving rule set and providing for a relaxed and casual play style should you have only a few hours to invest in your company and wish to have access to additional helper features.',
    }
];
exports.SeedData_Liveries = [
    {
        Name: '(N487EA) Fenix A320',
        Image: 'https://cdn.flightsim.to/images/27/echo-airlines-n487ea-fenix-a320---8k-354567-1750957754-ZzIc8.jpg?width=1400',
        Url: 'https://flightsim.to/file/94338/echo-airlines-n487ea-fenix-a320-8k',
        Description: 'A beautiful livery for the Fenix A320, with our signature whale design.',
        DownloadUrl: '/files/liveries/fnx-aircraft-320-Echo-Airlines-N487EA_ZNSOW.zip'
    },
    {
        Name: '(N418EA) iFLY 737-8 Max',
        Image: 'https://cdn.flightsim.to/images/27/echo-airlines-n418ea-ifly-737-8-max---8k-354567-1750960117-sOFBx.jpg?width=1400',
        Url: 'https://flightsim.to/file/94344/echo-airlines-n418ea-ifly-737-8-max-8k',
        Description: 'A beautiful livery for the iFLY 737-8 Max, with our signature whale design.',
        DownloadUrl: '/files/liveries/ifly-aircraft-737max8-Echo-Airlines-N418EA_eX2p.zip'
    },
    {
        Name: '(N484EA) iniBuilds A350-900',
        Image: 'https://cdn.flightsim.to/images/27/echo-airlines-n484ea-inibuilds-a350-900---8k-354567-1750962973-Z0H1i.jpg?width=1400',
        Url: 'https://flightsim.to/file/94348/echo-airlines-n484ea-inibuilds-a350-900-8k',
        Description: 'A beautiful livery for the iniBuilds A350-900, with our signature whale design.',
        DownloadUrl: '/files/liveries/iniBuilds-a350-900-Echo-Airlines-N484EA_RCnQB.zip'
    },
    {
        Name: '(N283EA) iniBuilds A350-1000',
        Image: 'https://cdn.flightsim.to/images/27/echo-airlines-n283ea-inibuilds-a350-1000---8k-354567-1750967805-p2Uzh.jpg?width=1400',
        Url: 'https://flightsim.to/file/94350/echo-airlines-n283ea-inibuilds-a350-1000-8k',
        Description: 'A beautiful livery for the iniBuilds A350-1000, with our signature whale design.',
        DownloadUrl: '/files/liveries/iniBuilds-a350-1000-Echo-Airlines-N283EA_QA8Mm.zip'
    },
    {
        Name: '(N685EA) FlyByWire A380-800',
        Image: 'https://cdn.flightsim.to/images/27/echo-airlines-n685ea-fbw-a380-800---8k-354567-1750979922-Kc7fb.jpg?width=1400',
        Url: 'https://flightsim.to/file/94356/echo-airlines-n685ea-fbw-a380-800-8k',
        Description: 'A beautiful livery for the FlyByWire A380-800, with our signature whale design.',
        DownloadUrl: '/files/liveries/FBW380-Echo Airlines-N685EA_qciZe.zip'
    },
    {
        Name: '(N712EA) PMDG 777F',
        Image: 'https://cdn.flightsim.to/images/27/echo-airlines-n712ea-pmdg-777f---8k-354567-1750985295-2BuW_.jpg?width=1400',
        Url: 'https://flightsim.to/file/94358/echo-airlines-n712ea-pmdg-777f-8k',
        Description: 'A beautiful livery for the PMDG 777F, with our signature whale design.',
        DownloadUrl: '/files/liveries/PMDG-777F-Echo-Airlines-N712EA_hxG5A.zip'
    },
    {
        Name: 'FlyByWire A320neo',
        Image: 'https://www.echoairlines.com/files/liveries/FlyByWire-A320neo-ECHO-Airlines.jpg',
        Description: 'A beautiful livery for the FlyByWire A320neo, with our signature whale design.',
        DownloadUrl: '/files/liveries/FlyByWire-A320neo-ECHO-Airlines.zip'
    }
];
exports.SeedData_Jobs = [
    {
        Name: 'Virtual Airline Sync',
        Description: 'Syncs virtual airline data from OnAir',
        CronExpression: prisma_1.CronExpression.EVERY_DAY_AT_MIDNIGHT,
        IsEnabled: true,
        Type: prisma_1.JobType.VIRTUAL_AIRLINE_SYNC,
    },
    {
        Name: 'Virtual Airline Members Sync',
        Description: 'Syncs virtual airline members data from OnAir',
        CronExpression: prisma_1.CronExpression.EVERY_HOUR,
        IsEnabled: true,
        Type: prisma_1.JobType.VIRTUAL_AIRLINE_MEMBERS_SYNC,
    },
    {
        Name: 'Virtual Airline Fleet Sync',
        Description: 'Syncs virtual airline fleet data from OnAir',
        CronExpression: prisma_1.CronExpression.EVERY_HOUR,
        IsEnabled: true,
        Type: prisma_1.JobType.VIRTUAL_AIRLINE_FLEET_SYNC,
    },
    {
        Name: 'Virtual Airline Flights Sync',
        Description: 'Syncs virtual airline flights data from OnAir',
        CronExpression: prisma_1.CronExpression.EVERY_MINUTE,
        IsEnabled: false,
        Type: prisma_1.JobType.VIRTUAL_AIRLINE_FLIGHTS_SYNC,
    }
];
exports.SeedData_AircraftStatuses = [
    {
        Id: 0,
        Name: 'Idle',
    },
    {
        Id: 1,
        Name: 'Maintenance',
    },
    {
        Id: 2,
        Name: 'Apron Work',
    },
    {
        Id: 3,
        Name: 'In Flight',
    },
    {
        Id: 4,
        Name: 'Warp',
    },
    {
        Id: 5,
        Name: 'Ferry',
    },
];
exports.SeedData_AircraftClasses = [
    {
        Id: '3460504f-db41-4ea6-a765-2a6867a2f88d',
        ShortName: 'JET',
        Name: 'Jet',
    },
    {
        Id: "4d1ce4cb-9005-4c33-a919-cfe3697eaf5d",
        ShortName: "MEPS",
        Name: "Multi-engine Piston Sea",
    },
    {
        Id: "b4a35db6-f20a-4320-8f0c-ec9956da11a6",
        ShortName: "SETL",
        Name: "Single Engine TurboProp Land",
    },
];
exports.SeedData_AppConfig = {
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
    FSHubApiKey: process.env.FSHUBAPIKEY,
};
exports.SeedData_VirtualAirline = ((process.env.ONAIRVIRTUALAIRLINEID && process.env.ONAIRAPIKEY) ? {
    Id: process.env.ONAIRVIRTUALAIRLINEID,
    ApiKey: process.env.ONAIRAPIKEY,
    IsPrimary: true
} : undefined);
exports.SeedData_DiscordMessageTemplates = [
    {
        Slug: 'flight.departed',
        Name: 'Flight Departed',
        Description: 'Flight Departed',
        Content: '[{{airline.profile.abbreviation}}] {{airline.name}} 🧑‍✈️**{{user.name}}**{{#if plan}} flight {{plan.flight_no}} has departed **{{plan.departure}}** for **{{plan.arrival}}**{{else}} has departed{{#if airport}} {{airport.icao}}{{/if}}{{/if}} via {{#if aircraft.user_conf.tail}}{{aircraft.user_conf.tail}}{{else}}{{aircraft.icao}} {{aircraft.icao_name}}{{/if}}.',
    },
    {
        Slug: 'flight.arrived',
        Name: 'Flight Arrived',
        Description: 'Flight Arrived',
        Content: '[{{airline.profile.abbreviation}}] {{airline.name}}{{#if plan}} flight {{plan.flight_no}} has arrived{{#if airport}} at **{{airport.icao}}**{{/if}}{{#if plan.departure}} from **{{plan.departure}}**{{/if}}{{else}} has arrived{{#if airport}} {{airport.icao}}{{/if}}{{/if}} via {{#if aircraft.user_conf.tail}}{{aircraft.user_conf.tail}}{{else}}{{aircraft.icao}} {{aircraft.icao_name}}{{/if}}.\n{{#if user.name}}\n**Pilot:** {{user.name}}{{/if}}{{#if landing_rate}}\n**Landing Rate:** {{landing_rate}}{{/if}}{{#if speed_tas}}\n**Speed:** {{speed_tas}} kts{{/if}}{{#if wind}}\n**Wind:** {{wind.speed}}@{{wind.direction}}°{{/if}}'
    },
    {
        Slug: 'flight.updated',
        Name: 'Flight Updated',
        Description: 'Flight Updated',
        Content: '{{airline}} {{aircraft}} #{{flight_no}} {{departure}} to {{arrival}} has been updated.\n```{{pitch}} deg {{bank}} deg {{speed_tas}} kts {{wind}} {{heading}}°```'
    }
];
const SeedData = {
    roles: exports.SeedData_UserRoles,
    permissions: exports.SeedData_Permissions,
    users: exports.SeedData_Users,
    worlds: exports.SeedData_Worlds,
    liveries: exports.SeedData_Liveries,
    jobs: exports.SeedData_Jobs,
    appConfig: exports.SeedData_AppConfig,
    aircraftStatuses: exports.SeedData_AircraftStatuses,
    aircraftClasses: exports.SeedData_AircraftClasses,
    virtualAirline: exports.SeedData_VirtualAirline,
    discordMessageTemplates: exports.SeedData_DiscordMessageTemplates,
};
exports.default = SeedData;
//# sourceMappingURL=SeederData.js.map