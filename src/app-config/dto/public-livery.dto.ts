import { Livery } from "generated/prisma";

export class PublicLiveryDto {
    Id: string;
    Name: string;
    IsActive: boolean;
    DownloadCount: number;
    Image: string|null;
    Url: string|null;
    Description: string|null;
    DownloadUrl: string|null;
    constructor(livery: Livery) {
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