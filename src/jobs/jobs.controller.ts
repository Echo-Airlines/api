import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards, Put, BadRequestException } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { IsAdminGuard } from '@auth/is-admin.guard';
import { JwtAuthGuard } from '@auth/jwt-auth.guard';
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
    create(@Body() createJobDto: CreateJobDto) {
        return this.jobsService.create(createJobDto);
    }

    @Get('valid-intervals')
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    findValidIntervals() {
        return this.jobsService.findValidIntervals();
    }

    @Get()
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async findAll() {
        return await this.jobsService.findAll();
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    findOneById(@Param('id') id: string) {
        return this.jobsService.findOneById(id);
    }

    @Put(':id')
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    update(@Param('id') id: string, @Body() updateJobDto: UpdateJobDto) {
        return this.jobsService.update(id, updateJobDto);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    remove(@Param('id') id: string) {
        return this.jobsService.remove(id);
    }

    @Post(':id/status')
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    updateStatus(
        @Param('id') id: string,
        @Body('status') status: JobStatus,
    ) {
        return this.jobsService.updateStatus(id, status);
    }

    @Post(':id/enable')
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    enable(@Param('id') id: string) {
        return this.jobsService.update(id, { IsEnabled: true });
    }

    @Post(':id/disable')
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    disable(@Param('id') id: string) {
        return this.jobsService.update(id, { IsEnabled: false });
    }

    @Post(':id/execute')
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    execute(@Param('id') id: string) {
        return this.jobSchedulerService.executeJobById(id);
    }
} 