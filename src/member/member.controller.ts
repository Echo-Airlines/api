import { JwtAuthGuard } from '@auth/jwt-auth.guard';
import { BadRequestException, Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { MemberService } from './member.service';
import { Member } from 'prisma/generated/prisma';
import { UserService } from '@user/user.service';

@Controller('member')
export class MemberController {
    constructor(
        private readonly memberService: MemberService,
        private readonly userService: UserService
    ) {}

    @UseGuards(JwtAuthGuard)
    @Post()
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
        member = await this.memberService.associateMemberToUser(member.Id, req.user.userId);
        
        // update the user's first name, last name, and set first login completed to true
        await this.userService.updateById(req.user.userId, {
            FirstName: body.firstName || null,
            LastName: body.lastName || null,
            FirstLoginCompleted: true,
            Roles: {
                connect: [
                    {
                        Slug: 'user'
                    },
                    {
                        Slug: 'member'
                    }
                ]
            }
        });

        member = await this.memberService.findByUserId(req.user.userId);

        return member;
    }
}
