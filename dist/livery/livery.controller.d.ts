import { Prisma } from 'prisma/generated/prisma';
import { LiveryService } from './livery.service';
export declare class LiveryController {
    private readonly liveryService;
    constructor(liveryService: LiveryService);
    getAll(): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Name: string;
        Description: string | null;
        IsActive: boolean;
        AircraftId: string | null;
        DownloadCount: number;
        Image: string;
        ImageFileName: string | null;
        CoverPhoto: string | null;
        Metadata: Prisma.JsonValue | null;
        Url: string | null;
        DownloadUrl: string | null;
    }[]>;
    getById(id: string): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Name: string;
        Description: string | null;
        IsActive: boolean;
        AircraftId: string | null;
        DownloadCount: number;
        Image: string;
        ImageFileName: string | null;
        CoverPhoto: string | null;
        Metadata: Prisma.JsonValue | null;
        Url: string | null;
        DownloadUrl: string | null;
    }>;
    uploadFile(id: string, name: string, file: Express.Multer.File): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Name: string;
        Description: string | null;
        IsActive: boolean;
        AircraftId: string | null;
        DownloadCount: number;
        Image: string;
        ImageFileName: string | null;
        CoverPhoto: string | null;
        Metadata: Prisma.JsonValue | null;
        Url: string | null;
        DownloadUrl: string | null;
    }>;
}
