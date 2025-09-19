import { DatabaseService } from '@database/database.service';
import { Prisma } from 'prisma/generated/prisma';
export declare class NotamService {
    private readonly prisma;
    constructor(prisma: DatabaseService);
    findMany(query?: Prisma.NotamFindManyArgs): Promise<{
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
    findOne(query: Prisma.NotamFindUniqueArgs): Promise<{
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
    findAllActive(query?: Partial<Prisma.NotamFindManyArgs>): Promise<{
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
    findOneById(Id: string, query?: Partial<Prisma.NotamFindUniqueArgs>): Promise<{
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
}
