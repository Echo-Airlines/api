import { Body, Controller, Get, NotFoundException, Param, Put, Request, UseGuards, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { AppConfigService } from './app-config.service';
import { AppConfig } from 'prisma/generated/prisma';
import { PublicAppConfigDto } from './dto/public-app-config.dto';
import { DiscordConfigDto } from './dto/DiscordConfigDto';

@Controller('config')
export class AppConfigController {
    constructor(private readonly appConfigService: AppConfigService) {}

    @Get()
    async findLatest(@Request() req: Request) {
        const config: AppConfig|null = await this.appConfigService.getLatest();

        if (!config) {
            throw new NotFoundException('Config not found');
        }

        return new PublicAppConfigDto(config);
    }
}
