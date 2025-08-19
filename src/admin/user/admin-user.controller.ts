import { Body, Controller, Delete, Get, NotFoundException, Param, Post, UseGuards } from '@nestjs/common';
import { AdminUserService } from './admin-user.service';
import { InviteCode, User } from 'prisma/generated/prisma';
import { JwtAuthGuard } from '@auth/jwt-auth.guard';
import { IsAdminGuard } from '@auth/is-admin.guard';

@Controller(['admin/user', 'admin/users', 'admin/u'])
export class AdminUserController {
    constructor(private readonly userService: AdminUserService) {}

    @Get()
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async getAll() {
        const data: User[] = await this.userService.findAll({
            select: {
                Id: true,
                Username: true,
                Email: true,
                FirstName: true,
                LastName: true,
                FirstLoginCompleted: true,
                IsOnline: true,
                IsBanned: true,
                BanReason: true,
                BanExpiresAt: true,
                IsVerified: true,
                LastLogin: true,
                CreatedAt: true,
                UpdatedAt: true,
                DiscordId: true,
                DiscordUsername: true,
                Roles: true,
            }
        });

        return data;
    }

    @Get(':username')
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async getOneByUsername(@Param('username') username: string) {
        const data: User|null = await this.userService.findOne({
            where: {
                Username: username,
            },
            select: {
                Id: true,
                Username: true,
                Email: true,
                FirstName: true,
                LastName: true,
                FirstLoginCompleted: true,
                IsOnline: true,
                IsBanned: true,
                BanReason: true,
                BanExpiresAt: true,
                IsVerified: true,
                LastLogin: true,
                CreatedAt: true,
                UpdatedAt: true,
                Roles: true,
            }
        });

        if (!data) {
            throw new NotFoundException('User not found');
        }

        return data;
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async deleteUserById(@Param('id') id: string) {
        const data: User|null = await this.userService.deleteOneById(id);

        return data;
    }

    @Post(':id/assign-role')
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async assignRoleToUser(@Param('id') id: string, @Body() body: { roleSlug: string }) {
        const data: User|null = await this.userService.assignRoleToUser(id, body.roleSlug);

        return data;
    }

    @Get('invite-codes')
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async getInviteCodes() {
        const data: InviteCode[] = await this.userService.findManyInviteCodes();

        return data;
    }

    @Post('invite-codes')
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async generateInviteCode() {
        const data: InviteCode = await this.userService.createInviteCode();

        return data;
    }
}
