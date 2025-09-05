import { Member, Role, UserPrivacySettings } from "prisma/generated/prisma";

export type RawUser = {
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
    PrivacySettings: UserPrivacySettings[]
    Roles?: Role[]
    LastLogin: Date | null
    Members?: Member[]
};

export type User = {
    Id: string
    Username: string
    FirstName: string | null
    LastName: string | null
    FirstLoginCompleted: boolean
    IsOnline: boolean
    IsBanned: boolean
    Email: string | null
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
    PrivacySettings: UserPrivacySettings[];
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
    private PrivacySettings: UserPrivacySettings;

    constructor(user?: RawUser | null) {
        if (user) {
            this.Id = user.Id;
            this.Username = user.Username;

            if (user.PrivacySettings && user.PrivacySettings.length > 1) {
                this.PrivacySettings = user.PrivacySettings[0];
            }

            if (this.PrivacySettings?.ShowFirstName) {
                this.FirstName = user.FirstName || undefined;
            }

            if (this.PrivacySettings?.ShowLastName) {
                this.LastName = user.LastName || undefined;
            }

            if (this.PrivacySettings?.ShowLastNameInitial) {
                this.LastName = user.LastName?.charAt(0) || undefined;
            }

            if (this.PrivacySettings?.ShowOnlineStatus) {
                this.IsOnline = user.IsOnline;
            }

            this.FirstLoginCompleted = user.FirstLoginCompleted;
            this.IsVerified = user.IsVerified || false;
        }
    }
}