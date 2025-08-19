import { Body, Controller, Get, Param, Put, UseGuards } from '@nestjs/common';
import { AdminUserService } from './admin-user.service';
import { Role, } from 'prisma/generated/prisma';
import { JwtAuthGuard } from '@auth/jwt-auth.guard';
import { IsAdminGuard } from '@auth/is-admin.guard';

@Controller(['admin/role', 'admin/roles', 'admin/r'])
export class AdminRoleController {
    constructor(private readonly userService: AdminUserService) {}

    @Get()
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async getAll() {
        const data: Role[] = await this.userService.findAllRoles();

        return data;
    }

    @Get(':slug')
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async getRoleBySlug(@Param('slug') slug: string) {
        const data: Role | null = await this.userService.getRoleBySlug(slug);

        return data;
    }

    @Put(':id/link')
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async linkRoleToVirtualAirlineRole(@Param('id') id: number, @Body() body: { virtualAirlineRoleId: string }) {
        const data: Role = await this.userService.linkRoleToVirtualAirlineRole(id, body.virtualAirlineRoleId);

        return data;
    }
}