import { UserService } from './user.service';
import { PublicUserDto } from './dto/PublicUser.dto';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import { UserProfileDto } from './dto/UserProfile.dto';
export declare class UserController {
    private readonly userService;
    private readonly configService;
    constructor(userService: UserService, configService: ConfigService);
    getAllActiveUsers(): Promise<PublicUserDto[]>;
    confirmEmail(token: string, res: Response): Promise<void>;
    me(req: any): Promise<UserProfileDto>;
}
