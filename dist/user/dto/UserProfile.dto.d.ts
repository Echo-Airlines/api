import { AuthUser, User } from "./PublicUser.dto";
import { MemberWithRelations } from "@member/dto/member-witth-relations";
export declare class UserProfileDto {
    Id: string;
    Username: string;
    FirstName: string | null;
    LastName: string | null;
    Email: string | null;
    IsOnline: boolean;
    IsVerified: boolean;
    LastLogin: Date | null;
    FirstLoginCompleted: boolean;
    Roles: string[];
    Members: MemberWithRelations[];
    constructor(user: User | AuthUser);
}
