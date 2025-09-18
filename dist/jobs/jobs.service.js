"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var JobsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobsService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
const prisma_1 = require("../../prisma/generated/prisma/index.js");
let JobsService = JobsService_1 = class JobsService {
    prisma;
    logger = new common_1.Logger(JobsService_1.name);
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        const data = {
            Name: dto.Name,
            Description: dto.Description,
            CronExpression: dto.CronExpression,
            IsEnabled: dto.IsEnabled ?? false,
            Type: dto.Type,
        };
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
    async findOneById(id) {
        return await this.prisma.job.findUnique({ where: { Id: id } });
    }
    async update(id, dto) {
        const data = {
            Name: dto.Name,
            Description: dto.Description,
            CronExpression: dto.CronExpression,
            IsEnabled: dto.IsEnabled ?? false,
            Type: dto.Type,
            NextRunAt: dto.NextRunAt ?? undefined,
        };
        const results = await this.prisma.job.update({ where: { Id: id }, data });
        return results;
    }
    async setFirstRunCompleted(Id) {
        if (!Id) {
            throw new common_1.BadRequestException('Job ID is required');
        }
        const results = await this.prisma.job.update({ where: { Id }, data: {
                FirstRunCompleted: true,
            } });
        return results;
    }
    async remove(id) {
        const job = await this.findOneById(id);
        if (job) {
            await this.prisma.job.delete({ where: { Id: id } });
        }
        return job;
    }
    async updateStatus(id, status) {
        await this.prisma.job.update({ where: { Id: id }, data: { Status: status } });
        return await this.findOneById(id);
    }
    async updateLastRun(id, lastRunAt, nextRunAt, error) {
        const results = await this.prisma.job.update({ where: { Id: id }, data: {
                LastRunAt: lastRunAt,
                NextRunAt: nextRunAt,
                LastError: error,
                Status: error ? prisma_1.JobStatus.FAILED : prisma_1.JobStatus.COMPLETED,
            } });
        return results;
    }
    formatCronLabel(cronExpression) {
        return cronExpression.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
    }
    async findValidIntervals() {
        const cronExpressions = await this.prisma.$queryRaw `
            SELECT unnest(enum_range(NULL::"CronExpression")) as value
        `;
        return cronExpressions.map((row) => ({
            Label: this.formatCronLabel(row.value),
            Key: row.value,
            Value: row.value
        }));
    }
};
exports.JobsService = JobsService;
exports.JobsService = JobsService = JobsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], JobsService);
//# sourceMappingURL=jobs.service.js.map