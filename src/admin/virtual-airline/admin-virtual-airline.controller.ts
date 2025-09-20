import { Controller, Get, NotFoundException, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '@auth/guards/jwt-auth.guard';
import { IsAdminGuard } from '@auth/guards/is-admin.guard';
import { AdminVirtualAirlineService } from './admin-virtual-airline.service';
import { VirtualAirline, VirtualAirlineRole } from 'prisma/generated/prisma';

@Controller(['admin/va', 'admin/vas'])
export class AdminVirtualAirlineController {
    constructor(private readonly virtualAirlineService: AdminVirtualAirlineService) {}

    @Get()
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async getAll() {
        const data: VirtualAirline[] = await this.virtualAirlineService.findAll();

        return data;
    }

    @Get('roles')
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async getVARoles() {
        const data: VirtualAirlineRole[] = await this.virtualAirlineService.getPrimaryVARoles();

        return data;
    }

    @Get('roles/unlinked')
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async getUnlinkedVARoles() {
        const data: VirtualAirlineRole[] = await this.virtualAirlineService.getUnlinkedVARoles();

        return data;
    }
}