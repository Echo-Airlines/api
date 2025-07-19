import { Controller, Get, NotFoundException, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '@auth/jwt-auth.guard';
import { IsAdminGuard } from '@auth/is-admin.guard';
import { AdminVirtualAirlineService } from './admin-virtual-airline.service';
import { VirtualAirline } from 'prisma/generated/prisma';

@Controller(['admin/va', 'admin/vas'])
export class AdminVirtualAirlineController {
    constructor(private readonly virtualAirlineService: AdminVirtualAirlineService) {}

    @Get()
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async getAll() {
        const data: VirtualAirline[] = await this.virtualAirlineService.findAll();

        return data;
    }
}