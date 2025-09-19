import { Member } from "prisma/generated/prisma";
import { AuthUser, User } from "./PublicUser.dto";
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
    Members: Member[];
    constructor(user: User | AuthUser);
}
