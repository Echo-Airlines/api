import { Body, Controller, Delete, Get, NotFoundException, Param, Post, UseGuards } from '@nestjs/common';
import { AdminUserService } from './admin-user.service';
import { InviteCode, Prisma, User } from 'prisma/generated/prisma';
import { JwtAuthGuard } from '@auth/jwt-auth.guard';
import { IsAdminGuard } from '@auth/is-admin.guard';
import { AdminAddUserDto } from './dto/AdminAddUserDto';
import { HashService } from '@hash/hash.service';

@Controller(['admin/user', 'admin/users', 'admin/u'])
export class AdminUserController {
    constructor(private readonly userService: AdminUserService, private readonly hashService: HashService) {}

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

    @Post()
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async createUser(@Body() body: AdminAddUserDto) {
        let user: User|null = null;
        const createData: Prisma.UserCreateInput = {
            Username: body.Username,
            Email: body.Email,
            FirstName: body.FirstName,
            LastName: body.LastName,
            Roles: {
                connect: body.Roles.map((role) => ({ Slug: role })),
            },
            PrivacySettings: {
                create: {
                    ShowOnlineStatus: body.PrivacySettings.ShowOnlineStatus,
                    ShowFirstName: body.PrivacySettings.ShowFirstName,
                    ShowLastName: body.PrivacySettings.ShowLastName,
                    ShowLastNameInitial: body.PrivacySettings.ShowLastNameInitial,
                    ShowLastLogin: body.PrivacySettings.ShowLastLogin,
                },
            },
            Password: this.hashService.hashSync(body.Password),
        };

        user = await this.userService.create(createData, {
            select: {
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
                DiscordId: true,
                DiscordUsername: true,
                DiscordAvatar: true,
                DiscordEmail: true,
                Roles: true,
                PrivacySettings: true,
                Members: true,
                InviteCode: true,
            },
        });
        // @TODO: if body.SendEmail is true, send an email to the user

        return user;
    }

    @Post(':id/unassign-role')
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async unassignRoleToUser(@Param('id') id: string, @Body() body: { roleSlug: string }) {
        const data: User|null = await this.userService.unassignRoleFromUser(id, body.roleSlug);

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
