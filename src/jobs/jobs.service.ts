import { Injectable, Logger, NotFoundException, BadRequestException } from '@nestjs/common';
import { CronExpression } from '@nestjs/schedule';
import { PrismaService } from '@prisma/prisma.service';
import { $Enums, JobStatus, JobType, type Job, type Prisma } from 'prisma/generated/prisma';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';

export type CronInterval = {
    Label: string;
    Key: keyof typeof CronExpression;
    Value: CronExpression;
}

@Injectable()
export class JobsService {
    private readonly logger = new Logger(JobsService.name);
    constructor(private prisma: PrismaService) {}

    async create(dto: CreateJobDto) {
        const data: Prisma.JobCreateInput = {
            Name: dto.Name,
            Description: dto.Description,
            CronExpression: dto.CronExpression as unknown as $Enums.CronExpression,
            IsEnabled: dto.IsEnabled ?? false,
            Type: dto.Type as unknown as $Enums.JobType,
        }

        return await this.prisma.job.create({
            data
        });
    }

    async findAll() {
        return await this.prisma.job.findMany();
    }

    async findAllEnabled() {
        return await this.prisma.job.findMany({ where: { IsEnabled: true } });
    }

    async findOneById(id: string) {
        return await this.prisma.job.findUnique({ where: { Id: id } });
    }

    async update(id: string, dto: UpdateJobDto) {
        const data: Prisma.JobUpdateInput = {
            Name: dto.Name,
            Description: dto.Description,
            CronExpression: dto.CronExpression as unknown as $Enums.CronExpression,
            IsEnabled: dto.IsEnabled ?? false,
        }

        await this.prisma.job.update({ where: { Id: id }, data });
        
        return await this.findOneById(id);
    }

    async remove(id: string) {
        const job = await this.findOneById(id);
        if (job) {
            await this.prisma.job.delete({ where: { Id: id } });
        }
        return job;
    }

    async updateStatus(id: string, status: JobStatus) {
        await this.prisma.job.update({ where: { Id: id }, data: { Status: status } });
        return await this.findOneById(id);
    }

    async updateLastRun(id: string, lastRunAt: Date, nextRunAt: Date, error?: string) {
        await this.prisma.job.update({ where: { Id: id }, data: {
            LastRunAt: lastRunAt,
            NextRunAt: nextRunAt,
            LastError: error,
            Status: error ? JobStatus.FAILED : JobStatus.COMPLETED,
        }});
    }

    formatCronLabel(cronExpression: CronExpression) {
        return cronExpression.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
    }

    async findValidIntervals() {
        const cronExpressions: CronExpression[] = await this.prisma.$queryRaw`
            SELECT unnest(enum_range(NULL::"CronExpression")) as value
        `;
        
        return cronExpressions.map((row: any) => ({
            Label: this.formatCronLabel(row.value),
            Key: row.value,
            Value: row.value
        }));
    }
} 


// valid options are
// every minute 'min'
// every 2 minutes '2min'
// every 5 minutes '5min'
// every 10 minutes '10min'
// every 15 minutes '15min'
// every 30 minutes '30min'
// every 45 minutes '45min'
// every 50 minutes '50min'
// every hour 'hour'
// every 2 hours '2hour'
// every 4 hours '4hour'
// every 6 hours '6hour'
// every 8 hours '8hour'
// every 12 hours '12hour'
// every day 'daily'
// every 2 days '2daily'