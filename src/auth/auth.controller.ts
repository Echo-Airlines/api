import { Body, Controller, Get, Post, Req, UnauthorizedException, UseGuards, Res, Param, BadRequestException, NotFoundException } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { UserProfileDto } from '@user/dto/UserProfile.dto';
import { ChangePasswordDto } from './dto/ChangePasswordDto';
import { DiscordAuthGuard } from './guards/discord-auth.guard';
import { Response } from 'express';
import { AppConfig, InviteCode, User } from 'prisma/generated/prisma';
import { RegisterUserDto } from './dto/RegisterUserDto';
import { AppConfigService } from '@app-config/app-config.service';
import { ForgotPasswordDto } from './dto/ForgotPasswordDto';
import { ResetPasswordDto } from './dto/ResetPasswordDto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService, private appConfigService: AppConfigService) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Req() req) {
        const result = await this.authService.login(req.user);
        
        return result;
    }

    @UseGuards(LocalAuthGuard)
    @Post('logout')
    async logout(@Req() req) {
        return req.logout();
    }

    @UseGuards(JwtAuthGuard)
    @Post('change-password')
    async changePassword(@Req() req, @Body() body: ChangePasswordDto) {
        if (req.user.username !== body.Username) {
            throw new UnauthorizedException('Invalid identity');
        }

        return this.authService.changePassword(body);
    }

    @UseGuards(JwtAuthGuard)
    @Get('session')
    async session(@Req() req) {
        const user: UserProfileDto|null = await this.authService.me(req.user.userId);

        if (!user) {
            throw new UnauthorizedException('Invalid session');
        }

        return user;
    }

    @Post('forgot-password')
    async forgotPassword(@Body() body: ForgotPasswordDto) {
        const result = await this.authService.forgotPassword(body);

        return result;
    }

    @Post('reset-password')
    async resetPassword(@Body() body: ResetPasswordDto) {
        const data = await this.authService.resetPassword(body);

        return data;
    }

    // Discord OAuth2 endpoints
    @Get('discord')
    @UseGuards(DiscordAuthGuard)
    async discordAuth(@Req() req, @Res() res: Response) {
        // This endpoint initiates Discord OAuth2 flow
        // Handle Discord OAuth2 callback
        const user = req.user;
        
        if (!user) {
            const redirectUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
            return res.redirect(`${redirectUrl}/auth/login?error=discord_auth_failed`);
        }

        // The guard will redirect to Discord
    }

    @Post('register')
    async register(@Body() body: RegisterUserDto) {
        // check if the app is allowing new users to register
        const appConfig: AppConfig|null = await this.appConfigService.getLatest();

        let inviteCode: InviteCode|null = await this.authService.getInviteCode(body.Code);

        if (!inviteCode) {
            throw new NotFoundException('Invite code not found');
        }

        if (inviteCode.IsUsed) {
            throw new BadRequestException('Invite code already used');
        }

        if (!appConfig?.AcceptingNewMembers && (!inviteCode.IsUsed || !inviteCode)) {
            throw new BadRequestException('New members are not allowed to register');
        }

        // check if the username is already taken
        const user: User|null = await this.authService.getUserByUsername(body.Username);

        if (user) {
            throw new BadRequestException('Username already taken');
        }

        if (body.Email) {
            // check if the email is already taken
            const emailUser: User|null = await this.authService.getUserByEmail(body.Email);

            if (emailUser) {
                throw new BadRequestException('Email already taken');
            }
        }

        // create the user
        const newUser: UserProfileDto = await this.authService.createUser(body);

        // mark the invite code as used
        inviteCode = await this.authService.markInviteCodeAsUsed(inviteCode.Id);

        const result = await this.authService.login(newUser);

        return {
            user: newUser,
            token: result.access_token
        };
    }

    @Get('discord/callback')
    @UseGuards(DiscordAuthGuard)
    async discordAuthCallback(@Req() req, @Res() res: Response) {
        // Handle Discord OAuth2 callback
        const user = req.user;
        
        if (!user) {
            const redirectUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
            return res.redirect(`${redirectUrl}/auth/login?error=discord_auth_failed`);
        }

        // Generate JWT token
        const result = await this.authService.login(user);
        
        // Redirect to frontend with token
        const redirectUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
        return res.redirect(`${redirectUrl}/auth/discord/callback?token=${result.access_token}`);
    }
}
