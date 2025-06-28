import { Body, Controller, Get, NotFoundException, Param, Put, Request, UseGuards, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { AppConfigService } from './app-config.service';
import { AppConfig, Livery } from 'generated/prisma';
import { AppConfigWithLiveriesDto } from './dto/app-config-with-livery';

@Controller('config')
export class AppConfigController {
    constructor(private readonly appConfigService: AppConfigService) {}

    @Get()
    async findLatest(@Request() req: Request) {
        const config: AppConfig|null = await this.appConfigService.getLatest();

        const liveries = await this.appConfigService.Livery_findAllActive();

        const dto = new AppConfigWithLiveriesDto(config, liveries);

        return dto;
    }

    @Put('upsert')
    async upsert(@Request() req, @Body() dto: AppConfig) {
        const config: AppConfig|null = await this.appConfigService.upsert(dto);

        return config;
    }

    @Get('liveries/:id/download')
    async downloadLivery(@Param('id') id: string, @Res() res: Response) {
        const livery: Livery|null = await this.appConfigService.Livery_findOneById(id);

        if (!livery) {
            throw new NotFoundException('Livery not found');
        }

        if (!livery.DownloadUrl) {
            throw new NotFoundException('Download URL not available for this livery');
        }

        // Increment download count
        await this.appConfigService.Livery_incrementDownloadCount(id);

        // Redirect to the actual file URL
        return res.redirect(HttpStatus.FOUND, livery.DownloadUrl);
    }
}
