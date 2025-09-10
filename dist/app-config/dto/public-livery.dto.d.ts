import { Livery } from "prisma/generated/prisma";
export declare class PublicLiveryDto {
    Id: string;
    Name: string;
    IsActive: boolean;
    DownloadCount: number;
    Image: string | null;
    Url: string | null;
    Description: string | null;
    DownloadUrl: string | null;
    constructor(livery: Livery);
}
