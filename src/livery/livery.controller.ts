import { Body, Controller, Get, InternalServerErrorException, NotFoundException, Param, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { Livery, Prisma } from 'prisma/generated/prisma';
import { LiveryService } from './livery.service';
import { JwtAuthGuard } from '@auth/jwt-auth.guard';
import { IsAdminGuard } from '@auth/is-admin.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import * as path from 'path';
import * as fs from 'fs';

@Controller(['livery', 'liveries'])
export class LiveryController {
    constructor(private readonly liveryService: LiveryService) {}
  
    @Get()
    async getAll() {
        const result: Livery[] = await this.liveryService.findAll();

        return result;
    }

    @Get(':id')
    async getById(@Param('id') id: string) {
        const result: Livery | null = await this.liveryService.findById(id);

        if (!result) {
            throw new NotFoundException('Livery not found');
        }

        return result;
    }

    @Post(':id/upload/:name')
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(@Param('id') id: string, @Param('name') name: string, @UploadedFile() file: Express.Multer.File) {
        const result = file;

        // look up the livery by the provided id
        let livery: Livery | null = await this.liveryService.findById(id);

        if (!livery) {
            throw new NotFoundException('Livery not found');
        }

        // store the file in the files/liveries/id directory with a randomly generated name
        const fileName = `${name}.${file.mimetype.split('/')[1]}`;
        const dirName = path.resolve(`${__dirname}/../../files/liveries`);
        const liveryDir = path.join(dirName, id);
        const filePath = path.join(liveryDir, fileName);
        
        // Create directories if they don't exist
        if (!fs.existsSync(dirName)) {
            fs.mkdirSync(dirName, { recursive: true });
        }
        if (!fs.existsSync(liveryDir)) {
            fs.mkdirSync(liveryDir, { recursive: true });
        }
        
        fs.writeFileSync(filePath, file.buffer);

        // update the livery with the new file name.
        const updatedLivery: Prisma.LiveryUpdateInput = {
            Id: livery.Id,
            [name]: fileName,
            UpdatedAt: new Date()
        };

        try {
            livery = await this.liveryService.update(id, updatedLivery);
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException('Failed to update livery');
        }

        return livery;
    }
    
}