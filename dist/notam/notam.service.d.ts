import { DatabaseService } from '@database/database.service';
import { Prisma } from 'prisma/generated/prisma';
export declare class NotamService {
    private readonly prisma;
    constructor(prisma: DatabaseService);
    findMany(query?: Prisma.NotamFindManyArgs): Promise<{
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
    findOne(query: Prisma.NotamFindUniqueArgs): Promise<{
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
    findAllActive(query?: Partial<Prisma.NotamFindManyArgs>): Promise<{
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
    findOneById(Id: string, query?: Partial<Prisma.NotamFindUniqueArgs>): Promise<{
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
