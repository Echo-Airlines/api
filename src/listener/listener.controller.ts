import { BadRequestException, Body, Controller, NotFoundException, Param, Post, Query } from '@nestjs/common';
import { ListenerService } from './listener.service';
import { FSHubEventDto } from './dto/FSHubEvent.dto';
import { ListenerEvent, ListenerEventSender } from 'prisma/generated/prisma';

@Controller('listener')
export class ListenerController {
    constructor(private readonly listenerService: ListenerService) {}

    @Post(':senderSlug')
    async sendEvent(@Body() body: any, @Query('token') token: string, @Param('senderSlug') senderSlug: string) {
        const sender: ListenerEventSender|null= await this.listenerService.getSenderBySlug(senderSlug);

        if (!sender) {
            throw new NotFoundException('Sender not found');
        }

        if (sender.Token !== token) {
            throw new BadRequestException('Invalid token');
        }

        if (!sender.IsActive) {
            throw new BadRequestException('Sender is not active');
        }

        let listenerEvent: ListenerEvent|null = null;
        switch (sender.Slug) {
            case 'fshub':
                listenerEvent = await this.listenerService.processListenerEvent(sender, body as FSHubEventDto);
                break;
            default:
                throw new BadRequestException('Invalid sender');
        }

        return {
            success: true,
            message: 'Listener event created',
            listenerEvent
        };
    }
}
 