import { Prisma } from 'prisma/generated/prisma';
import { LiveryService } from './livery.service';
export declare class LiveryController {
    private readonly liveryService;
    constructor(liveryService: LiveryService);
    getAll(): Promise<{
        Id: string;
        Name: string;
        IsActive: boolean;
        AircraftId: string | null;
        DownloadCount: number;
        Image: string;
        ImageFileName: string | null;
        CoverPhoto: string | null;
        Metadata: Prisma.JsonValue | null;
        Url: string | null;
        Description: string | null;
        DownloadUrl: string | null;
        CreatedAt: Date;
        UpdatedAt: Date;
    }[]>;
    getById(id: string): Promise<{
        Id: string;
        Name: string;
        IsActive: boolean;
        AircraftId: string | null;
        DownloadCount: number;
        Image: string;
        ImageFileName: string | null;
        CoverPhoto: string | null;
        Metadata: Prisma.JsonValue | null;
        Url: string | null;
        Description: string | null;
        DownloadUrl: string | null;
        CreatedAt: Date;
        UpdatedAt: Date;
    }>;
    uploadFile(id: string, name: string, file: Express.Multer.File): Promise<{
        Id: string;
        Name: string;
        IsActive: boolean;
        AircraftId: string | null;
        DownloadCount: number;
        Image: string;
        ImageFileName: string | null;
        CoverPhoto: string | null;
        Metadata: Prisma.JsonValue | null;
        Url: string | null;
        Description: string | null;
        DownloadUrl: string | null;
        CreatedAt: Date;
        UpdatedAt: Date;
    }>;
}
