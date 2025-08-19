import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { ListenerService } from './listener.service';
import { IsAdminGuard } from '@auth/is-admin.guard';
import { JwtAuthGuard } from '@auth/jwt-auth.guard';
import { FSHubEventDto } from './dto/FSHubEvent.dto';

@Controller('listener')
export class ListenerController {
    constructor(private readonly listenerService: ListenerService) {}

    @Post('fshub')
    async fshub(@Body() body: FSHubEventDto) {
        const listenerEvent = await this.listenerService.createListenerEvent({
            Variant: body._variant,
            Type: body._type,
            SentAt: new Date(body._sent),
            Data: body._data,
        });

        console.log(`Listener event created: ${listenerEvent.Id}`);

        return {
            success: true,
            message: 'Listener event created',
            data: listenerEvent,
        };
    }
}
