import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AdminUserService } from './admin-user.service';
import { InviteCode, Prisma, User } from 'prisma/generated/prisma';
import { JwtAuthGuard } from '@auth/jwt-auth.guard';
import { IsAdminGuard } from '@auth/is-admin.guard';
import { AdminAddUserDto } from './dto/AdminAddUserDto';
import { HashService } from '@hash/hash.service';
import { CreateEmailDto } from '@email/create-email.dto';
import { ConfigService } from '@nestjs/config';
import { EmailService } from '@email/email.service';
import * as crypto from 'crypto';

@Controller(['admin/user', 'admin/users', 'admin/u'])
export class AdminUserController {
    constructor(private readonly userService: AdminUserService, private readonly hashService: HashService, private readonly configService: ConfigService, private readonly emailService: EmailService) {}

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
                EmailVerifiedAt: true,
                LastLogin: true,
                CreatedAt: true,
                UpdatedAt: true,
                Roles: true,
                WelcomeEmailSentAt: true,
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
        let createData: Prisma.UserCreateInput = {
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

        if (body.SendEmail) {
            createData.ConfirmEmailToken = crypto.randomUUID();
        }

        user = await this.userService.create(createData, {
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
                DiscordId: true,
                DiscordUsername: true,
                DiscordAvatar: true,
                DiscordEmail: true,
                Roles: true,
                PrivacySettings: true,
                Members: true,
                InviteCode: true,
                ConfirmEmailToken: true,
            },
        });

        if (!user || user === null) {
            throw new NotFoundException('User not found');
        }

        if (user.Email && body.SendEmail) {
            // if body.SendEmail is true, send an email to the user
            const urlBase = this.configService.get<string>('FRONTEND_URL') || 'http://localhost:3001';
            const welcomeEmail: CreateEmailDto = {
                to: user.Email,
                template: 'welcome',
                subject: 'Welcome to our Virtual Airline!',
                context: {
                    firstName: user.FirstName,
                    username: user.Username,
                    password: body.Password,
                    email: user.Email,
                    confirmLink: `${urlBase}/api/user/confirm-email?token=${user.ConfirmEmailToken}`,
                },
            }

            await this.emailService.sendWelcomeEmail(welcomeEmail);

            user.WelcomeEmailSentAt = new Date();

            user = await this.userService.update(user.Id, { WelcomeEmailSentAt: user.WelcomeEmailSentAt });
        }

        return user;
    }

    @Put(':username/send-reset-password-email')
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async sendResetPasswordEmail(@Param('username') username: string) {
        if (!username) {
            throw new BadRequestException('Username is required');
        }

        // find the user by username
        let user: User|null = await this.userService.findOne({ where: { Username: username }, select: {
            Id: true,
            Password: true,
            ResetPasswordEmailSentAt: true,
            ResetPasswordToken: true,
        }});
        
        if (!user) {
            throw new NotFoundException('User not found');
        }

        const urlBase = this.configService.get<string>('FRONTEND_URL') || 'http://localhost:3001';

        if (!user.Email || user.Email === null) {
            throw new BadRequestException('User email not found');
        }

        // update the user with a new reset password token and reset password email sent at
        user = await this.userService.update(user.Id, { ResetPasswordToken: crypto.randomUUID(), ResetPasswordEmailSentAt: new Date() }, {
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
                DiscordId: true,
                DiscordUsername: true,
                DiscordAvatar: true,
                DiscordEmail: true,
                Roles: true,
                PrivacySettings: true,
                Members: true,
                InviteCode: true,
                ConfirmEmailToken: true,
                EmailVerifiedAt: true,
                WelcomeEmailSentAt: true,
            }
        });   
        
        if (!user || user === null) {
            throw new NotFoundException('User not found');
        }

        if (!user) {
            throw new NotFoundException('User not found');
        }

        // send the reset password email
        await this.emailService.sendResetPasswordEmail({
            to: user.Email!,
            template: 'reset-password',
            subject: 'Reset your password',
            context: {
                resetPasswordLink: `${urlBase}/auth/reset-password?token=${user.ResetPasswordToken}`,
            },
        });   

        if (!user || user === null) {
            throw new NotFoundException('User not found');
        }

        user = await this.userService.update(user.Id, { ResetPasswordEmailSentAt: new Date() }, {
            select : {
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
                DiscordId: true,
                DiscordUsername: true,
                DiscordAvatar: true,
                DiscordEmail: true,
                Roles: true,
                PrivacySettings: true,
                Members: true,
                InviteCode: true,
                ConfirmEmailToken: true,
                EmailVerifiedAt: true,
                WelcomeEmailSentAt: true,
            }
        });

        return user;
    }

    @Put(':username/send-welcome-email')
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async sendWelcomeEmail(@Param('username') username: string) {
        let user: User|null = await this.userService.findOne({ where: { Username: username }, select: {
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
            DiscordId: true,
            DiscordUsername: true,
            DiscordAvatar: true,
            DiscordEmail: true,
            Roles: true,
            PrivacySettings: true,
            Members: true,
            InviteCode: true,
            ConfirmEmailToken: true,
            EmailVerifiedAt: true,
            WelcomeEmailSentAt: true,
        }, });
        
        const urlBase = this.configService.get<string>('FRONTEND_URL') || 'http://localhost:3001';

        if (!user || user === null) {
            throw new NotFoundException('User not found');
        }

        if (!user.Email) {
            throw new BadRequestException('User email not found');
        }

        if (!user.ConfirmEmailToken) {
            user = await this.userService.update(user.Id, { ConfirmEmailToken: crypto.randomUUID() },
            {
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
                    DiscordId: true,
                    DiscordUsername: true,
                    DiscordAvatar: true,
                    DiscordEmail: true,
                    Roles: true,
                    PrivacySettings: true,
                    Members: true,
                    InviteCode: true,
                    ConfirmEmailToken: true,
                    WelcomeEmailSentAt: true,
                },
            });
        }
        
        if (!user || user === null) {
            throw new NotFoundException('User not found');
        }

        await this.emailService.sendWelcomeEmail({
            to: user.Email!,
            template: 'welcome',
            subject: 'Welcome to our Virtual Airline!',
            context: {
                firstName: user.FirstName,
                username: user.Username,
                email: user.Email,
                confirmLink: `${urlBase}/api/user/confirm-email?token=${user.ConfirmEmailToken}`,
            },
        });

        user = await this.userService.update(user.Id, { WelcomeEmailSentAt: new Date() }, {
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
                DiscordId: true,
                DiscordUsername: true,
                DiscordAvatar: true,
                DiscordEmail: true,
                Roles: true,
                PrivacySettings: true,
                Members: true,
                InviteCode: true,
                ConfirmEmailToken: true,
                EmailVerifiedAt: true,
                WelcomeEmailSentAt: true,
            }
        });

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
