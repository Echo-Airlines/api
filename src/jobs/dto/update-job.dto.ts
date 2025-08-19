import { CronExpression } from '@nestjs/schedule';
import { JobStatus, JobType } from 'prisma/generated/prisma';

export class UpdateJobDto {
    Name?: string;
    Description?: string|null;
    CronExpression?: CronExpression|null;
    Status?: JobStatus|null;
    IsEnabled?: boolean|null;
    FirstRunCompleted?: boolean|null;
    Type?: JobType|null;
    NextRunAt?: Date;
} 