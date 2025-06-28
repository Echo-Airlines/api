import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VirtualAirlineService } from './virtual-airline.service';
import { VirtualAirline } from 'generated/prisma';

@Controller('va')
export class VirtualAirlineController {
  constructor(private readonly virtualAirlineService: VirtualAirlineService) {}

  @Get()
  async getDetails() {
    const result: VirtualAirline = await this.virtualAirlineService.getVirtualAirline();

    return result;
  }
}
