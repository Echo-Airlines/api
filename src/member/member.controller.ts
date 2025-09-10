import { JwtAuthGuard } from '@auth/jwt-auth.guard';
import { BadRequestException, Body, Controller, Param, Post, Put, Get, Req, UseGuards } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { MemberService } from './member.service';
import { Member, User } from 'prisma/generated/prisma';
import { UserService } from '@user/user.service';
import { PublicUserDto } from '@user/dto/PublicUser.dto';

@Controller('member')
export class MemberController {
    constructor(
        private readonly memberService: MemberService,
        private readonly userService: UserService
    ) {}

    @Get()
    async findAll() {
        return await this.memberService.findAllActive();
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    async create(@Req() req, @Body() body: CreateMemberDto) {
        // first check if the member already exists by the provided companyId
        let member: Member|null = await this.memberService.findByCompanyId(body.companyId);
        
        if (!member) {
            // throw an error
            throw new BadRequestException('Member Company ID not found');
        }

        // if the member exists, check if the member has a UserId already.
        if (member.UserId) {
            // throw an error
            throw new BadRequestException('Member already has a UserId');
        }

        // if the member does not have a UserId, associate the current user to the member
        member = await this.memberService.associateMemberToUser(member.Id, body.userId);
        
        // update the user's first name, last name, and set first login completed to true
        await this.userService.updateById(req.user.userId, {
            FirstName: body.firstName || null,
            LastName: body.lastName || null,
            FirstLoginCompleted: true,
            PrivacySettings: {
                create: {
                    ShowOnlineStatus: body.privacySettings.showOnlineStatus,
                    ShowFirstName: body.privacySettings.showFirstName,
                    ShowLastName: body.privacySettings.showLastName,
                    ShowLastNameInitial: body.privacySettings.showLastNameInitial,
                    ShowLastLogin: body.privacySettings.showLastLogin,
                }
            },
        });

        member = await this.memberService.findByUserId(body.userId);

        return member;
    }

    @Put(':id')
    @UseGuards(JwtAuthGuard)
    async update(@Param('id') Id: string, @Req() req, @Body() body: CreateMemberDto) {
        // first check if the user exists
        let user: PublicUserDto|null = await this.userService.findUserById(Id);

        if (!user) {
            // throw an error
            throw new BadRequestException('User not found');
        }

        // first check if the member already exists by the provided companyId
        let member: Member|null = await this.memberService.findByCompanyId(body.companyId);
        
        if (!member) {
            // throw an error
            throw new BadRequestException('Member Company ID not found');
        }

        // if the member exists, check if the member has a UserId already.
        if (member.UserId && member.CompanyId && !user.FirstLoginCompleted) {
            await this.userService.updateById(user.Id, {
                FirstLoginCompleted: true,
            });

            member = await this.memberService.findByUserId(user.Id);

            return member;
        } else if (member.UserId) {
            // throw an error
            throw new BadRequestException('Member already has a UserId');
        }
            

        // if the member does not have a UserId, associate the current user to the member
        member = await this.memberService.associateMemberToUser(member.Id, user.Id);
        
        // update the user's first name, last name, and set first login completed to true
        await this.userService.updateById(user.Id, {
            FirstName: body.firstName || null,
            LastName: body.lastName || null,
            FirstLoginCompleted: true,
        });

        member = await this.memberService.findByUserId(user.Id);

        return member;
    }
}
