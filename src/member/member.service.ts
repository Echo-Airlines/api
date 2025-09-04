import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.service';
import { Member, Prisma } from 'prisma/generated/prisma';

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

    async findAllActive() {
        const result: Member[] = await this.prisma.member.findMany({
            where: {
                IsActive: true,
            },
        });

        return result;
    }

    async findByCompanyId(companyId: string) {
        return this.prisma.member.findFirst({
            where: {
                CompanyId: companyId,
            },
            include: {
                User: {
                    select: {
                        Id: true,
                        FirstName: true,
                        LastName: true,
                        Username: true,
                        PrivacySettings: true,
                    },
                },
                Company: true,
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
                Company: true,
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
