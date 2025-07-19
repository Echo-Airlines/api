import { Body, Controller, Get, Post, Req, UnauthorizedException, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { UserProfileDto } from '@user/dto/UserProfile.dto';
import { ChangePasswordDto } from './dto/ChangePasswordDto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Req() req) {
        return this.authService.login(req.user);
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
        const user: UserProfileDto = await this.authService.me(req.user.userId);
        return user;
    }
}
