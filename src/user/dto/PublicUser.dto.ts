import { Member, Role, UserPrivacySettings } from "prisma/generated/prisma";

export type User = {
    Id: string
    Username: string
    FirstName: string | null
    LastName: string | null
    FirstLoginCompleted: boolean
    IsOnline: boolean
    IsBanned: boolean
    BanReason: string | null
    BanExpiresAt: Date | null
    IsVerified: boolean
    CreatedAt: Date
    UpdatedAt: Date
    PrivacySettings: UserPrivacySettings | null
    Roles?: Role[]
    LastLogin: Date | null
    Members?: Member[]
};

export type AuthUser = {
    Id: string;
    Username: string;
    FirstName: string|null;
    LastName: string|null;
    FirstLoginCompleted: boolean;
    IsOnline: boolean;
    IsVerified: boolean;
    CreatedAt: Date;
    UpdatedAt: Date|null;
    Roles: Role[];
    PrivacySettings: UserPrivacySettings|null;
    Email: string|null;
    IsBanned: boolean;
    BanReason: string|null;
    BanExpiresAt: Date|null;
    Password: string|null;
    LastLogin: Date|null;
    DiscordId?: string|null;
    DiscordUsername?: string|null;
    DiscordAvatar?: string|null;
    DiscordEmail?: string|null;
    Members?: Member[]
}

export class PublicUserDto {
    Id: string;
    Username: string;
    FirstName?: string;
    LastName?: string;
    FirstLoginCompleted: boolean;
    IsOnline: boolean;
    IsVerified?: boolean;

    constructor(user?: User | null) {
        if (user) {
            this.Id = user.Id;
            this.Username = user.Username;
            if (user.PrivacySettings?.ShowFirstName) {
                this.FirstName = user.FirstName || undefined;
            }

            if (user.PrivacySettings?.ShowLastName) {
                this.LastName = user.LastName || undefined;
            }

            if (user.PrivacySettings?.ShowLastNameInitial) {
                this.LastName = user.LastName?.charAt(0) || undefined;
            }

            if (user.PrivacySettings?.ShowOnlineStatus) {
                this.IsOnline = user.IsOnline;
            }

            this.FirstLoginCompleted = user.FirstLoginCompleted;
            this.IsVerified = user.IsVerified || false;
        }
    }
}