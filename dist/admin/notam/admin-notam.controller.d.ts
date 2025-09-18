import { AdminNotamService } from './admin-notam.service';
import { CreateNotamDto } from './dto/create-notam.dto';
import { UpdateNotamDto } from './dto/update-notam.dto';
export declare class AdminNotamController {
    private readonly notamService;
    constructor(notamService: AdminNotamService);
    findAllActive(): Promise<{
        Id: string;
        Title: string;
        Content: string;
        ExpirationDate: Date | null;
        Link: string | null;
        EffectiveDate: Date;
        Status: import("prisma/generated/prisma").$Enums.NOTAMStatus;
        CreatedById: string;
        CreatedAt: Date;
        UpdatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        Id: string;
        Title: string;
        Content: string;
        ExpirationDate: Date | null;
        Link: string | null;
        EffectiveDate: Date;
        Status: import("prisma/generated/prisma").$Enums.NOTAMStatus;
        CreatedById: string;
        CreatedAt: Date;
        UpdatedAt: Date;
    } | null>;
    create(createNotamDto: CreateNotamDto): Promise<{
        Id: string;
        Title: string;
        Content: string;
        ExpirationDate: Date | null;
        Link: string | null;
        EffectiveDate: Date;
        Status: import("prisma/generated/prisma").$Enums.NOTAMStatus;
        CreatedById: string;
        CreatedAt: Date;
        UpdatedAt: Date;
    }>;
    update(id: string, updateNotamDto: UpdateNotamDto): Promise<{
        Id: string;
        Title: string;
        Content: string;
        ExpirationDate: Date | null;
        Link: string | null;
        EffectiveDate: Date;
        Status: import("prisma/generated/prisma").$Enums.NOTAMStatus;
        CreatedById: string;
        CreatedAt: Date;
        UpdatedAt: Date;
    }>;
    remove(id: string): Promise<{
        Id: string;
        Title: string;
        Content: string;
        ExpirationDate: Date | null;
        Link: string | null;
        EffectiveDate: Date;
        Status: import("prisma/generated/prisma").$Enums.NOTAMStatus;
        CreatedById: string;
        CreatedAt: Date;
        UpdatedAt: Date;
    }>;
}
