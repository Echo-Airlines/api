export class CreateMemberDto {
    firstName?: string;
    lastName?: string;
    companyId: string;
    userId: string;
    privacySettings: {
        showOnlineStatus: boolean;
        showFirstName: boolean;
        showLastName: boolean;
        showLastNameInitial: boolean;
        showLastLogin: boolean;
    };
}