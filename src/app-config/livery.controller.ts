
import { Controller, Get, HttpStatus, NotFoundException, Param, Post, Res } from '@nestjs/common';
import { AppConfigService } from './app-config.service';
import { Livery } from 'prisma/generated/prisma';
import { Response } from 'express';
import { PublicLiveryDto } from './dto/public-livery.dto';

@Controller(['livery', 'liveries'])
export class LiveryController {
    constructor(private readonly appConfigService: AppConfigService) {}

    @Get()
    async findAllActive() {
        const liveries: Livery[] = await this.appConfigService.Livery_findAllActive();

        return liveries.map(livery => new PublicLiveryDto(livery));
    }

    @Get(':id/download')
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
        const downloadUrl = `${process.env.FILE_URL}${livery.DownloadUrl}`;
        console.log(downloadUrl);
        return res.redirect(downloadUrl);
    }
}