import { BadRequestException, Controller, Get, NotFoundException, Query, Req, Res, UnauthorizedException, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { PublicUserDto, User } from './dto/PublicUser.dto';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import { UserProfileDto } from './dto/UserProfile.dto';
import { JwtAuthGuard } from '@auth/jwt-auth.guard';

@Controller(['user', 'users', 'u'])
export class UserController {
    constructor(private readonly userService: UserService, private readonly configService: ConfigService) {}

    @Get()
    async getAllActiveUsers() {
        const data: PublicUserDto[] = await this.userService.findAllActive();

        return data;
    }

    @Get('confirm-email')
    async confirmEmail(@Query('token') token: string, @Res() res: Response) {
        if (!token) {
            throw new BadRequestException('Token is required');
        }

        const data = await this.userService.confirmEmail(token);

        if (!data) {
            throw new NotFoundException('User not found');
        }

        const baseUrl = this.configService.get<string>('FRONTEND_URL') || 'http://localhost:3001';

        return res.redirect(`${baseUrl}/email-confirmed`);
    }

    @Get('me')
    @UseGuards(JwtAuthGuard)
    async me(@Req() req) {
        const user: UserProfileDto|null = await this.userService.me(req.user.userId);

        if (!user) {
            throw new UnauthorizedException('Invalid session');
        }

        return user;
    }
}
