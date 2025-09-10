import { AdminUserService } from './admin-user.service';
export declare class AdminRoleController {
    private readonly userService;
    constructor(userService: AdminUserService);
    getAll(): Promise<{
        Id: number;
        CreatedAt: Date;
        UpdatedAt: Date;
        Name: string;
        Description: string | null;
        Slug: string;
        VirtualAirlineRoleId: string | null;
    }[]>;
    getRoleBySlug(slug: string): Promise<{
        Id: number;
        CreatedAt: Date;
        UpdatedAt: Date;
        Name: string;
        Description: string | null;
        Slug: string;
        VirtualAirlineRoleId: string | null;
    } | null>;
    linkRoleToVirtualAirlineRole(id: number, body: {
        virtualAirlineRoleId: string;
    }): Promise<{
        Id: number;
        CreatedAt: Date;
        UpdatedAt: Date;
        Name: string;
        Description: string | null;
        Slug: string;
        VirtualAirlineRoleId: string | null;
    }>;
}
