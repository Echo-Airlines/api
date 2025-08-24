import { CronExpression, JobType } from "prisma/generated/prisma";

export default [
    {
        Name: 'Virtual Airline Sync',
        Description: 'Syncs virtual airline data from OnAir',
        CronExpression: CronExpression.EVERY_DAY_AT_MIDNIGHT,
        IsEnabled: true,
        Type: JobType.VIRTUAL_AIRLINE_SYNC,
    },
    {
        Name: 'Virtual Airline Members Sync',
        Description: 'Syncs virtual airline members data from OnAir',
        CronExpression: CronExpression.EVERY_HOUR,
        IsEnabled: true,
        Type: JobType.VIRTUAL_AIRLINE_MEMBERS_SYNC,
    },
    {
        Name: 'Virtual Airline Fleet Sync',
        Description: 'Syncs virtual airline fleet data from OnAir',
        CronExpression: CronExpression.EVERY_HOUR,
        IsEnabled: true,
        Type: JobType.VIRTUAL_AIRLINE_FLEET_SYNC,
    },
    {
        Name: 'Virtual Airline Flights Sync',
        Description: 'Syncs virtual airline flights data from OnAir',
        CronExpression: CronExpression.EVERY_MINUTE,
        IsEnabled: false,
        Type: JobType.VIRTUAL_AIRLINE_FLIGHTS_SYNC,
    }
];