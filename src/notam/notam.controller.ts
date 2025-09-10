import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { NotamService } from './notam.service';
import { CreateNotamDto } from '../admin/notam/dto/create-notam.dto';
import { UpdateNotamDto } from '../admin/notam/dto/update-notam.dto';
import { JwtAuthGuard } from '@auth/jwt-auth.guard';
import { IsAdminGuard } from '@auth/is-admin.guard';

@Controller(['notam', 'notams'])
export class NotamController {
  constructor(private readonly notamService: NotamService) {}

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
}
