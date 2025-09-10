import { CreateNotamDto } from './dto/create-notam.dto';
import { UpdateNotamDto } from './dto/update-notam.dto';
import { PrismaService } from '@prisma/prisma.service';
import { Prisma } from 'prisma/generated/prisma';
export declare class AdminNotamService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateNotamDto, query?: Partial<Prisma.NotamCreateArgs>): Promise<{
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
    }>;
    findMany(query?: Prisma.NotamFindManyArgs): Promise<{
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
    findOne(query: Prisma.NotamFindUniqueArgs): Promise<{
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
    findAllActive(query?: Partial<Prisma.NotamFindManyArgs>): Promise<{
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
    findOneById(Id: string, query?: Partial<Prisma.NotamFindUniqueArgs>): Promise<{
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
    updateById(Id: string, data: UpdateNotamDto): Promise<{
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
    }>;
    update(query: Prisma.NotamUpdateArgs): Promise<{
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
    }>;
    remove(query: Prisma.NotamDeleteArgs): Promise<{
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
    }>;
    removeById(Id: string): Promise<{
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
    }>;
}
