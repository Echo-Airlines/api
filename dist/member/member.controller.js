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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberController = void 0;
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const common_1 = require("@nestjs/common");
const create_member_dto_1 = require("./dto/create-member.dto");
const member_service_1 = require("./member.service");
const user_service_1 = require("../user/user.service");
let MemberController = class MemberController {
    memberService;
    userService;
    constructor(memberService, userService) {
        this.memberService = memberService;
        this.userService = userService;
    }
    async findAll() {
        return await this.memberService.findAllActive();
    }
    async create(req, body) {
        let member = await this.memberService.findByCompanyId(body.companyId);
        if (!member) {
            throw new common_1.BadRequestException('Member Company ID not found');
        }
        if (member.UserId) {
            throw new common_1.BadRequestException('Member already has a UserId');
        }
        member = await this.memberService.associateMemberToUser(member.Id, body.userId);
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
    async update(Id, req, body) {
        let user = await this.userService.findUserById(Id);
        if (!user) {
            throw new common_1.BadRequestException('User not found');
        }
        let member = await this.memberService.findByCompanyId(body.companyId);
        if (!member) {
            throw new common_1.BadRequestException('Member Company ID not found');
        }
        if (member.UserId && member.CompanyId && !user.FirstLoginCompleted) {
            await this.userService.updateById(user.Id, {
                FirstLoginCompleted: true,
            });
            member = await this.memberService.findByUserId(user.Id);
            return member;
        }
        else if (member.UserId) {
            throw new common_1.BadRequestException('Member already has a UserId');
        }
        member = await this.memberService.associateMemberToUser(member.Id, user.Id);
        await this.userService.updateById(user.Id, {
            FirstName: body.firstName || null,
            LastName: body.lastName || null,
            FirstLoginCompleted: true,
        });
        member = await this.memberService.findByUserId(user.Id);
        return member;
    }
};
exports.MemberController = MemberController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MemberController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_member_dto_1.CreateMemberDto]),
    __metadata("design:returntype", Promise)
], MemberController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, create_member_dto_1.CreateMemberDto]),
    __metadata("design:returntype", Promise)
], MemberController.prototype, "update", null);
exports.MemberController = MemberController = __decorate([
    (0, common_1.Controller)('member'),
    __metadata("design:paramtypes", [member_service_1.MemberService,
        user_service_1.UserService])
], MemberController);
//# sourceMappingURL=member.controller.js.map