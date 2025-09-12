import { IsAdminGuard } from "@auth/is-admin.guard";
import { JwtAuthGuard } from "@auth/jwt-auth.guard";
import { Request, Controller, Get, Put, NotFoundException, Body, UseGuards } from "@nestjs/common";
import { AppConfig } from "prisma/generated/prisma";
import { AdminAppConfigService } from "./admin-app-config.service";

@Controller('admin/config')
export class AdminAppConfigController {
    constructor(private readonly appConfigService: AdminAppConfigService) {}

    @Get()
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async findLatest(@Request() req: Request) {
        const config: AppConfig|null = await this.appConfigService.getLatest();

        if (!config) {
            throw new NotFoundException('Config not found');
        }

        return config;
    }

    @Put('upsert')
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async upsert(@Request() req, @Body() dto: AppConfig) {
        const config: AppConfig|null = await this.appConfigService.upsert(dto);

        return config;
    }
}