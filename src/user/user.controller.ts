import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { PublicUserDto } from './dto/PublicUser.dto';

@Controller(['user', 'users', 'u'])
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async getAllActiveUsers() {
        const data: PublicUserDto[] = await this.userService.findAllActive();

        return data;
    }
}
