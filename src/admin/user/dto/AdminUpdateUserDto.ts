export class AdminUpdateUserDto {
    Username?: string;
    Email?: string;
    FirstName?: string;
    LastName?: string;
    Roles?: string[];
    Password?: string;
    ConfirmPassword?: string;
    SendEmail?: boolean;
    PrivacySettings?: {
        ShowOnlineStatus?: boolean;
        ShowFirstName?: boolean;
        ShowLastName?: boolean;
        ShowLastNameInitial?: boolean;
        ShowLastLogin?: boolean;
    };
}