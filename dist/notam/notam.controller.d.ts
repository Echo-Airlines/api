import { NotamService } from './notam.service';
export declare class NotamController {
    private readonly notamService;
    constructor(notamService: NotamService);
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
}
