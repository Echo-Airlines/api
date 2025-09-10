"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicUserDto = void 0;
class PublicUserDto {
    Id;
    Username;
    FirstName;
    LastName;
    FirstLoginCompleted;
    IsOnline;
    IsVerified;
    PrivacySettings;
    constructor(user) {
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
exports.PublicUserDto = PublicUserDto;
//# sourceMappingURL=PublicUser.dto.js.map