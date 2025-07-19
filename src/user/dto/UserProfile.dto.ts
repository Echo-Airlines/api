import { AuthUser, User } from "./PublicUser.dto";

export class UserProfileDto {
    Id: string;
    Username: string;
    FirstName: string|null;
    LastName: string|null;
    Email: string|null;
    IsOnline: boolean;
    IsVerified: boolean;
    LastLogin: Date|null;
    Roles: string[];

    constructor(user: User|AuthUser) {
        this.Id = user.Id;
        this.Username = user.Username;
        this.FirstName = user.FirstName;

        if (user.PrivacySettings?.ShowFirstName) {
            this.FirstName = user.FirstName || null;
        }

        if (user.PrivacySettings?.ShowLastName) {
            this.LastName = user.LastName || null;
        }

        if (user.PrivacySettings?.ShowLastNameInitial) {
            this.LastName = user.LastName?.charAt(0) || null;
        }

        if (user.PrivacySettings?.ShowOnlineStatus) {
            this.IsOnline = user.IsOnline;
        }

        this.IsVerified = user.IsVerified || false;
        this.Roles = user.Roles?.map((role) => role.Slug) || [];
        this.LastLogin = user.LastLogin || null;
    }
}