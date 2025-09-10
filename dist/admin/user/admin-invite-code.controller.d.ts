import { AdminUserService } from "./admin-user.service";
export declare class AdminInviteCodeController {
    private readonly userService;
    constructor(userService: AdminUserService);
    getInviteCodes(): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Code: string;
        IsUsed: boolean;
        UsedAt: Date | null;
    }[]>;
    generateInviteCode(body: {
        quantity: number;
    }): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Code: string;
        IsUsed: boolean;
        UsedAt: Date | null;
    }[]>;
    deleteInviteCode(Id: string): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Code: string;
        IsUsed: boolean;
        UsedAt: Date | null;
    }>;
}
