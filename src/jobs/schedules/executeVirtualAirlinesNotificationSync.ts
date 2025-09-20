import { JobSchedulerService } from "@jobs/job-scheduler.service";
import { OnAirNotification } from "@on-air/types";
import { Notification, Prisma, VirtualAirline } from "prisma/generated/prisma";
import { eachSeries } from "async";
import { SendDiscordMessageDto } from "@discord/dto/SendDiscordMessageDto";

export async function executeVirtualAirlinesNotificationsSync(scheduler: JobSchedulerService) {
    const virtualAirlines: VirtualAirline[] = await scheduler.services.VirtualAirline.findAll();

    if (virtualAirlines.length === 0) {
        scheduler.logger.warn('No virtual airlines found to sync');
        return [];
    }

    const results: Notification[] = [];
    await eachSeries(virtualAirlines, async (va: VirtualAirline) => {
        const entities: Notification[] = await executeVirtualAirlineNotificationsSync(va, scheduler);

        results.push(...entities);
    });

    return results;
}

export async function executeVirtualAirlineNotificationsSync(va: VirtualAirline, scheduler: JobSchedulerService): Promise<Notification[]> {
    return new Promise(async (resolve, reject) => {
        // Get data from OnAir
        scheduler.logger.debug(`Executing virtual airline notification sync for virtual airline ${va.Id}`);

        const onAirData: OnAirNotification[] | null = await scheduler.services.OnAir.getVirtualAirlineNotifications(va.Id);

        if (!onAirData) {
            throw new Error('Failed to fetch virtual airline notifications from OnAir');
        }

        if (onAirData.length === 0) {
            scheduler.logger.warn(`No virtual airline notifications found for virtual airline ${va.Id}`);
            return;
        }

        const results: Notification[] = [];

        await eachSeries(onAirData, async (onAirData: OnAirNotification) => {
            // update the member by executing the executeVirtualAirlineMemberSync function
            const entity: Notification|null = await executeVirtualAirlineNotificationSync(onAirData, va, scheduler);

            if (!entity) {
                // scheduler.logger.warn(`Notification ${onAirData.Id} not found, skipping`);
                return true;
            }

            // then push the results into the results array.
            results.push(entity);

            return true;
        }, (err) => {
            if (err) {
                scheduler.logger.error(`Error syncing Notifications for virtual airline ${va.Id}: ${err}`);
                return reject(err);
            }

            return resolve(results);
        });
    });
}

async function executeVirtualAirlineNotificationSync(onAirData: OnAirNotification, va: VirtualAirline, scheduler: JobSchedulerService): Promise<Notification|null> {
    return new Promise(async (resolve, reject) => {
        try {
            // if (onAirData.IsRead) {
            //     return resolve(null);
            // }

            if (!onAirData.Description.includes('proposed an application to your Virtual Airline')) {
                return resolve(null);
            }
            
            let entity: Notification|null = await scheduler.services.Notification.findOne({
                where: {
                    Id: onAirData.Id,
                },
            });

            if (!entity) {
                scheduler.logger.debug(`Notification ${onAirData.Id} not found, creating new one`);

                const dto: Prisma.NotificationCreateInput = {
                    Id: onAirData.Id,
                    Description: onAirData.Description,
                    IsRead: onAirData.IsRead,
                    IsNotification: onAirData.IsNotification,
                    ZuluEventTime: new Date(onAirData.ZuluEventTime),
                    Category: onAirData.Category,
                    Action: onAirData.Action,
                    VirtualAirline: {
                        connect: { Id: va.Id },
                    }
                };

                entity = await scheduler.services.Notification.create(dto);

                await sendDiscordNotification(entity, va, scheduler);

                entity = await scheduler.services.Notification.updateById(entity.Id, {
                    IsRead: true,
                    DiscordMessageSentAt: new Date(),
                    DiscordMessageSent: true,
                });
            }


            return resolve(entity);
        } catch (error) {
            scheduler.logger.error(`Error syncing Notification ${onAirData.Id}: ${error}`);
            return reject(error);
        }
    }); 
}

async function sendDiscordNotification(entity: Notification, va: VirtualAirline, scheduler: JobSchedulerService) {
    if (!va.VAManagerDiscordWebhookId) {
        return;
    }

    const discordWebhook = await scheduler.services.Discord.ChannelWebhook_findById(va.VAManagerDiscordWebhookId);

    if (!discordWebhook) {
        return;
    }

    const message: SendDiscordMessageDto = {
        username: "ECHO Notifier",
        avatar_url: 'https://www.echoairlines.com/echo-localizer-logo.png',
        content: entity.Description,
    };

    await scheduler.services.Discord.ChannelWebhook_sendMessage(discordWebhook.Id, message);
}