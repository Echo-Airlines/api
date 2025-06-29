import { CronExpression, JobType, Prisma } from "generated/prisma";

export type SeedData = {
    // roles: CreateRoleDto[];
    // permissions: CreatePermissionDto[];
    // users: CreateUserDto[];
    liveries: Prisma.LiveryCreateInput[];
    jobs: Prisma.JobCreateInput[];
    appConfig: Prisma.AppConfigCreateInput;
};
/**
export const SeedData_Permissions: CreatePermissionDto[] = [
    {
        slug: 'my-profile-view',
        name: 'View My Profile',
        entity: 'user',
        action: 'view',
    },
    {
        slug: 'my-profile-update',
        name: 'Update My Profile',
        entity: 'user',
        action: 'update',
    },
];

export const SeedData_UserRoles: CreateRoleDto[] = [
    {
        slug: 'admin',
        name: 'Admin',
    },
    {
        slug: 'user',
        name: 'User',
        permissions: ['my-profile-view', 'my-profile-update'],
    },
    {
        slug: 'member',
        name: 'Member',
    },
    {
        slug: 'premium',
        name: 'Premium Member',
    },
];

export const SeedData_Users: CreateUserDto[] = [
    {
        username: 'admin',
        password: 'password',
        email: 'admin@echoairlines.com',
        firstName: 'Gordon',
        lastName: 'Freeman',
        firstLoginCompleted: true,
        roles: ['admin', 'user'],
    },
    {
        username: 'johndoe',
        password: 'password',
        email: 'johndoe@echoairlines.com',
        firstName: 'John',
        lastName: 'Doe',
        firstLoginCompleted: false,
        roles: ['user'],
    },
];
 */
export const SeedData_Liveries: Prisma.LiveryCreateInput[] = [
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
        // Url: 'https://flightsim.to/file/94360/echo-airlines-n7310x-flybywire-a320neo-8k',
        Description: 'A beautiful livery for the FlyByWire A320neo, with our signature whale design.',
        DownloadUrl: '/files/liveries/FlyByWire-A320neo-ECHO-Airlines.zip'
    }
];

export const SeedData_Jobs: Prisma.JobCreateInput[] = [
    {
        Name: 'Virtual Airline Sync',
        Description: 'Syncs virtual airline data from OnAir',
        CronExpression: CronExpression.EVERY_MINUTE,
        IsEnabled: false,
        Type: JobType.VIRTUAL_AIRLINE_SYNC,
    },
    // {
    //     Name: 'Virtual Airline Members Sync',
    //     Description: 'Syncs virtual airline members data from OnAir',
    //     CronExpression: CronExpression.EVERY_HOUR,
    //     IsEnabled: false,
    //     Type: JobType.VIRTUAL_AIRLINE_MEMBERS_SYNC,
    // },
];

export const SeedData_AppConfig: Prisma.AppConfigCreateInput = {
    OnAirSyncEnabled: false,
    OnAirVASyncEnabled: false,
    OnAirVAMembersSyncEnabled: false,
    DiscordServerInviteLinkEnabled: false,
    AcceptingNewMembers: false,
    DiscordAuthEnabled: false,
    LocalAuthEnabled: true,
};

const SeedData: SeedData = {
    // roles: SeedData_UserRoles,
    // permissions: SeedData_Permissions,
    // users: SeedData_Users,
    liveries: SeedData_Liveries,
    jobs: SeedData_Jobs,
    appConfig: SeedData_AppConfig,
};

export default SeedData