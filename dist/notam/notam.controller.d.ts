import { NotamService } from './notam.service';
export declare class NotamController {
    private readonly notamService;
    constructor(notamService: NotamService);
    findAllActive(): Promise<{
        Id: string;
        CreatedAt: Date;
        UpdatedAt: Date;
        Status: import("prisma/generated/prisma").$Enums.NOTAMStatus;
        Title: string;
        Content: string;
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
        Title: string;
        Content: string;
        ExpirationDate: Date | null;
        Link: string | null;
        EffectiveDate: Date;
        CreatedById: string;
    } | null>;
}
