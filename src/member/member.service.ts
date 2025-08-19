import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.service';
import { CreateMemberDto } from './dto/create-member.dto';

@Injectable()
export class MemberService {
    constructor(private readonly prisma: PrismaService) {}

    // async create(dto: CreateMemberDto, userId: string) {
    //     const member = await this.prisma.member.create({
    //         data: {
    //             ...dto,
    //             User: {
    //                 connect: {
    //                     Id: dto.userId,
    //                 },
    //             },
    //         },
    //     });
    // }

    async findByCompanyId(companyId: string) {
        return this.prisma.member.findFirst({
            where: {
                CompanyId: companyId,
            },
            include: {
                User: true,
            },
        });
    }

    async findByUserId(userId: string) {
        return this.prisma.member.findFirst({
            where: {
                UserId: userId,
            },
            include: {
                User: true,
            },
        });
    }

    async associateMemberToUser(memberId: string, userId: string) {
        const result = await this.prisma.member.update({
            where: {
                Id: memberId,
            },
            data: {
                User: {
                    connect: {
                        Id: userId,
                    },
                },
            },
        });

        return result;
    }
}
