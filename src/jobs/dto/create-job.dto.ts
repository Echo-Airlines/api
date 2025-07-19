import { CronExpression } from '@nestjs/schedule';
import { JobType } from 'prisma/generated/prisma';

export class CreateJobDto {
    Name: string;
    Description?: string;
    CronExpression: CronExpression;
    IsEnabled?: boolean;
    Type: JobType;
    LastExecutionAt?: Date;
    ExecutionCount?: number;
    LastRefresh?: Date;
} 