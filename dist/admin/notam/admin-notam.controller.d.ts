import { AdminNotamService } from './admin-notam.service';
import { CreateNotamDto } from './dto/create-notam.dto';
import { UpdateNotamDto } from './dto/update-notam.dto';
export declare class AdminNotamController {
    private readonly notamService;
    constructor(notamService: AdminNotamService);
    findAllActive(): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Status: import("prisma/generated/prisma").$Enums.NOTAMStatus;
        Content: string;
        Title: string;
        ExpirationDate: Date | null;
        Link: string | null;
        EffectiveDate: Date;
        CreatedById: string;
    }[]>;
    findOne(id: string): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Status: import("prisma/generated/prisma").$Enums.NOTAMStatus;
        Content: string;
        Title: string;
        ExpirationDate: Date | null;
        Link: string | null;
        EffectiveDate: Date;
        CreatedById: string;
    } | null>;
    create(createNotamDto: CreateNotamDto): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Status: import("prisma/generated/prisma").$Enums.NOTAMStatus;
        Content: string;
        Title: string;
        ExpirationDate: Date | null;
        Link: string | null;
        EffectiveDate: Date;
        CreatedById: string;
    }>;
    update(id: string, updateNotamDto: UpdateNotamDto): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Status: import("prisma/generated/prisma").$Enums.NOTAMStatus;
        Content: string;
        Title: string;
        ExpirationDate: Date | null;
        Link: string | null;
        EffectiveDate: Date;
        CreatedById: string;
    }>;
    remove(id: string): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Status: import("prisma/generated/prisma").$Enums.NOTAMStatus;
        Content: string;
        Title: string;
        ExpirationDate: Date | null;
        Link: string | null;
        EffectiveDate: Date;
        CreatedById: string;
    }>;
}
