"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicLiveryDto = void 0;
class PublicLiveryDto {
    Id;
    Name;
    IsActive;
    DownloadCount;
    Image;
    Url;
    Description;
    DownloadUrl;
    constructor(livery) {
        this.Id = livery.Id;
        this.Name = livery.Name;
        this.IsActive = livery.IsActive;
        this.DownloadCount = livery.DownloadCount;
        this.Image = livery.Image;
        this.Url = livery.Url || '';
        this.Description = livery.Description || '';
        this.DownloadUrl = (livery.DownloadUrl) ? `${process.env.API_URL}/livery/${livery.Id}/download` : null;
    }
}
exports.PublicLiveryDto = PublicLiveryDto;
//# sourceMappingURL=public-livery.dto.js.map