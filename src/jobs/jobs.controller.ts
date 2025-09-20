import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards, Put, BadRequestException } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { IsAdminGuard } from '@auth/guards/is-admin.guard';
import { JwtAuthGuard } from '@auth/guards/jwt-auth.guard';
import { JobSchedulerService } from './job-scheduler.service';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { JobStatus } from 'prisma/generated/prisma';

@Controller(['jobs', 'j', 'job'])
export class JobsController {
    constructor(
        private readonly jobsService: JobsService,
        private readonly jobSchedulerService: JobSchedulerService,
    ) {}

    @Post()
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async create(@Body() createJobDto: CreateJobDto) {
        const job = await this.jobsService.create(createJobDto);


        return job;
    }

    @Get('valid-intervals')
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async findValidIntervals() {
        const result = await this.jobsService.findValidIntervals();

        return result;
    }

    @Get()
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async findAll() {
        const jobs = await this.jobsService.findAll();

        return jobs;
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async findOneById(@Param('id') id: string) {
        const job = await this.jobsService.findOneById(id);

        return job;
    }

    @Put(':id')
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async update(@Param('id') id: string, @Body() updateJobDto: UpdateJobDto) {
        const job = await this.jobsService.update(id, updateJobDto);

        return job;
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async remove(@Param('id') id: string) {
        const job = await this.jobsService.remove(id);

        return job;
    }

    @Post(':id/status')
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async updateStatus(
        @Param('id') id: string,
        @Body('status') status: JobStatus,
    ) {
        const job = await this.jobsService.updateStatus(id, status);

        return job;
    }

    @Post(':id/enable')
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async enable(@Param('id') id: string) {
        const job = await this.jobsService.update(id, { IsEnabled: true });

        return job;
    }

    @Post(':id/disable')
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async disable(@Param('id') id: string) {
        const job = await this.jobsService.update(id, { IsEnabled: false });

        return job;
    }

    @Post(':id/execute')
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async execute(@Param('id') id: string) {
        const result = await this.jobSchedulerService.executeJobById(id);

        return result;
    }
} 