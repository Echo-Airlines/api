import { CreateNotamDto } from './dto/create-notam.dto';
import { UpdateNotamDto } from './dto/update-notam.dto';
import { DatabaseService } from '@database/database.service';
import { Prisma } from 'prisma/generated/prisma';
export declare class AdminNotamService {
    private readonly prisma;
    constructor(prisma: DatabaseService);
    create(dto: CreateNotamDto, query?: Partial<Prisma.NotamCreateArgs>): Promise<{
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
    updateById(Id: string, data: UpdateNotamDto): Promise<{
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
    update(query: Prisma.NotamUpdateArgs): Promise<{
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
    remove(query: Prisma.NotamDeleteArgs): Promise<{
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
    removeById(Id: string): Promise<{
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
