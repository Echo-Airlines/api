import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { AdminUserService } from "./admin-user.service";
import { InviteCode } from "prisma/generated/prisma";
import { IsAdminGuard } from "@auth/guards/is-admin.guard";
import { JwtAuthGuard } from "@auth/guards/jwt-auth.guard";

@Controller(['admin/invite-code', 'admin/invite-codes'])
export class AdminInviteCodeController {
    constructor(private readonly userService: AdminUserService) {}

    @Get()
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async getInviteCodes() {
        const data: InviteCode[] = await this.userService.findManyInviteCodes();

        return data;
    }

    @Post('generate')
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async generateInviteCode(@Body() body: { quantity: number }) {
        let data: InviteCode[] = [];

        if (body.quantity && body.quantity > 1) {
            data = await this.userService.createInviteCodes(body.quantity);
        } else {
            const _data = await this.userService.createInviteCode();
            data = [_data];
        }

        return data;
    }
    

    @Delete(':id')
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async deleteInviteCode(@Param('id') Id: string) {
        const data: InviteCode = await this.userService.deleteInviteCode(Id);

        return data;
    }
}