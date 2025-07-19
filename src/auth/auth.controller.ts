import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { UserProfileDto } from '@user/dto/UserProfile.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Req() req) {
        return this.authService.login(req.user);
    }

    @UseGuards(LocalAuthGuard)
    @Post('auth/logout')
    async logout(@Req() req) {
        return req.logout();
    }

    @UseGuards(JwtAuthGuard)
    @Get('session')
    async session(@Req() req) {
        const user: UserProfileDto = await this.authService.me(req.user.userId);
        return user;
    }
}
