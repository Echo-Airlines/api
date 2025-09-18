"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
const PublicUser_dto_1 = require("./dto/PublicUser.dto");
const UserProfile_dto_1 = require("./dto/UserProfile.dto");
let UserService = class UserService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async me(userId) {
        const user = await this.prisma.user.findUnique({
            where: { Id: userId },
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
                Email: true,
                IsBanned: true,
                BanReason: true,
                BanExpiresAt: true,
                LastLogin: true,
                Members: {
                    select: {
                        Id: true,
                        VARole: true,
                        TotalCargosTransportedLbs: true,
                        TotalPAXsTransported: true,
                        VirtualAirline: true,
                        Company: true,
                    },
                },
            }
        });
        if (!user) {
            return null;
        }
        const result = new UserProfile_dto_1.UserProfileDto(user);
        return result;
    }
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
        });
        const results = entities.map((e) => new PublicUser_dto_1.PublicUserDto(e));
        return results;
    }
    async findUserById(Id) {
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
        const result = entity ? new PublicUser_dto_1.PublicUserDto(entity) : null;
        return result;
    }
    async findUserByUsername(username) {
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
            .then((e) => new PublicUser_dto_1.PublicUserDto(e));
        return entity;
    }
    async setUserFirstLoginCompleted(UserId) {
        const result = await this.prisma.user.update({
            where: { Id: UserId },
            data: {
                FirstLoginCompleted: true,
            }
        });
        return result;
    }
    async updateById(Id, data) {
        const result = await this.prisma.user.update({
            where: { Id },
            data,
        });
        return result;
    }
    async confirmEmail(token) {
        let user = await this.prisma.user.findUnique({
            where: { ConfirmEmailToken: token },
            select: {
                Id: true,
                Username: true,
                Email: true,
                FirstName: true,
                LastName: true,
                FirstLoginCompleted: true,
                IsOnline: true,
                IsBanned: true,
                BanReason: true,
                BanExpiresAt: true,
                IsVerified: true,
                LastLogin: true,
                DiscordId: true,
                DiscordUsername: true,
                DiscordAvatar: true,
                DiscordEmail: true,
                Roles: true,
                PrivacySettings: true,
                Members: true,
                InviteCode: true,
                ConfirmEmailToken: true,
                EmailVerifiedAt: true,
            },
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        if (!user.IsVerified) {
            user.IsVerified = true;
        }
        user = await this.prisma.user.update({
            where: { Id: user.Id },
            data: {
                IsVerified: true,
                ConfirmEmailToken: null,
                EmailVerifiedAt: new Date(),
            },
            select: {
                Id: true,
                Username: true,
                Email: true,
                FirstName: true,
                LastName: true,
                FirstLoginCompleted: true,
                IsOnline: true,
                IsBanned: true,
                BanReason: true,
                BanExpiresAt: true,
                IsVerified: true,
                LastLogin: true,
                DiscordId: true,
                DiscordUsername: true,
                DiscordAvatar: true,
                DiscordEmail: true,
                Roles: true,
                PrivacySettings: true,
                Members: true,
                InviteCode: true,
                ConfirmEmailToken: true,
                EmailVerifiedAt: true,
            },
        });
        return user;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], UserService);
//# sourceMappingURL=user.service.js.map