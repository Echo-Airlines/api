import { CronExpression } from '@nestjs/schedule';
import { JobStatus } from 'prisma/generated/prisma';

export class UpdateJobDto {
    Name?: string;
    Description?: string;
    CronExpression?: CronExpression;
    Status?: JobStatus;
    IsEnabled?: boolean;
    FirstRunCompleted?: boolean;
} 