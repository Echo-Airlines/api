import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.service';
import { Prisma, User as PrismaUser } from 'prisma/generated/prisma';
import { PublicUserDto, RawUser, User } from './dto/PublicUser.dto';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async findAllActive() {
        const entities = await this.prisma.user.findMany({
            where: {
                IsBanned: false,
            },
            select: {
                Id: true,
                Username: true,
                FirstName: true,
                LastName: true,
                FirstLoginCompleted: true,
                IsOnline: true,
                IsVerified: true,
                CreatedAt: true,
                UpdatedAt: true,
                Roles: true,
                PrivacySettings: true,
            }
        })

        const results = entities.map((e) => new PublicUserDto(e as RawUser));

        return results;
    }

    async findUserById(Id: string) {
        const entity = await this.prisma.user.findUnique({
            where: {
                Id,
                IsBanned: false,
            },
            select: {
                Id: true,
                Username: true,
                FirstName: true,
                LastName: true,
                FirstLoginCompleted: true,
                IsOnline: true,
                IsVerified: true,
                Roles: true,
                PrivacySettings: true,
                CreatedAt: true,
                UpdatedAt: true,
            }
        });

        const result = entity ? new PublicUserDto(entity as RawUser) : null;

        return result;
    }

    async findUserByUsername(username: string) {
        const entity = await this.prisma.user.findUnique({
            where: {
                Username: username,
                IsBanned: false,
            },
            select: {
                Id: true,
                Username: true,
                FirstName: true,
                LastName: true,
                FirstLoginCompleted: true,
                IsOnline: true,
                IsVerified: true,
                Roles: true,
                PrivacySettings: true,
                CreatedAt: true,
                UpdatedAt: true,
            }
        })
        .then((e) => new PublicUserDto(e as RawUser));

        return entity;
    }

    async setUserFirstLoginCompleted(UserId: string) {
        const result = await this.prisma.user.update({
            where: { Id: UserId },
            data: {
                FirstLoginCompleted: true,
            }
        });

        return result;
    }

    async updateById(Id: string, data: Prisma.UserUpdateInput) {
        const result = await this.prisma.user.update({
            where: { Id },
            data,
        });

        return result;
    }
}
