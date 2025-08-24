import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.service';
import { Prisma } from 'prisma/generated/prisma';

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

    async findById(id: string, query?: Partial< Prisma.MemberFindUniqueArgs>) {
        const entity = await this.prisma.member.findUnique({
            where: {
                Id: id,
            },
            ...query,
        });

        return entity;
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

    async create(dto: Prisma.MemberCreateInput) {
        const result = await this.prisma.member.create({
            data: dto,
        });

        return result;
    }

    async update(Id: string, dto: Prisma.MemberUpdateInput) {
        const result = await this.prisma.member.update({
            where: {
                Id
            },
            data: dto,
        });

        return result;
    }
}
