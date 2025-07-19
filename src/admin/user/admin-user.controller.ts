import { Controller, Get, NotFoundException, Param, UseGuards } from '@nestjs/common';
import { AdminUserService } from './admin-user.service';
import { User } from 'prisma/generated/prisma';
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
}
