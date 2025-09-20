import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AdminNotamService } from './admin-notam.service';
import { CreateNotamDto } from './dto/create-notam.dto';
import { UpdateNotamDto } from './dto/update-notam.dto';
import { JwtAuthGuard } from '@auth/guards/jwt-auth.guard';
import { IsAdminGuard } from '@auth/guards/is-admin.guard';

@Controller(['admin/notam', 'admin/notams'])
export class AdminNotamController {
  constructor(private readonly notamService: AdminNotamService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAllActive() {
    const result = await this.notamService.findAllActive();
    
    return result;
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findOne(@Param('id') id: string) {
    const result = await this.notamService.findOneById(id);
    
    return result;
  }

  @Post()
  @UseGuards(JwtAuthGuard, IsAdminGuard)
  async create(@Body() createNotamDto: CreateNotamDto) {
    const result = await this.notamService.create(createNotamDto);
    
    return result;
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, IsAdminGuard)
  async update(@Param('id') id: string, @Body() updateNotamDto: UpdateNotamDto) {
    const result = await this.notamService.updateById(id, updateNotamDto);
    
    return result;
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, IsAdminGuard)
  async remove(@Param('id') id: string) {
    const result = await this.notamService.removeById(id);
    
    return result;
  }
}
