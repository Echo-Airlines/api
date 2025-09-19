"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfileDto = void 0;
class UserProfileDto {
    Id;
    Username;
    FirstName;
    LastName;
    Email;
    IsOnline;
    IsVerified;
    LastLogin;
    FirstLoginCompleted;
    FSHubPilotId;
    Roles;
    Members;
    constructor(user) {
        this.Id = user.Id;
        this.Username = user.Username;
        this.Email = user.Email;
        this.FirstName = user.FirstName;
        this.LastName = user.LastName || null;
        this.IsOnline = user.IsOnline;
        this.IsVerified = user.IsVerified || false;
        this.FSHubPilotId = user.FSHubPilotId || null;
        this.Roles = user.Roles?.map((role) => role.Slug) || [];
        this.LastLogin = user.LastLogin || null;
        this.FirstLoginCompleted = user.FirstLoginCompleted || false;
        this.Members = user.Members || [];
    }
}
exports.UserProfileDto = UserProfileDto;
//# sourceMappingURL=UserProfile.dto.js.map