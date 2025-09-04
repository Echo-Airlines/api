import { AuthUser, User } from "./PublicUser.dto";
import { MemberWithRelations } from "@member/dto/member-witth-relations";

export class UserProfileDto {
    Id: string;
    Username: string;
    FirstName: string|null;
    LastName: string|null;
    Email: string|null;
    IsOnline: boolean;
    IsVerified: boolean;
    LastLogin: Date|null;
    FirstLoginCompleted: boolean;
    Roles: string[];
    Members: MemberWithRelations[];

    constructor(user: User|AuthUser) {
        this.Id = user.Id;
        this.Username = user.Username;
        this.FirstName = user.FirstName;
        this.LastName = user.LastName || null;
        this.IsOnline = user.IsOnline;
        this.IsVerified = user.IsVerified || false;
        this.Roles = user.Roles?.map((role) => role.Slug) || [];
        this.LastLogin = user.LastLogin || null;
        this.FirstLoginCompleted = user.FirstLoginCompleted || false;
        this.Members = user.Members || [];
    }
}