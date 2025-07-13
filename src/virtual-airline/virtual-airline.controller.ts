import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { VirtualAirlineService } from './virtual-airline.service';
import { Prisma, VirtualAirline } from 'prisma/generated/prisma';

@Controller('va')
export class VirtualAirlineController {
  constructor(private readonly virtualAirlineService: VirtualAirlineService) {}

  @Get()
  async getAll(@Query('worldSlug') worldSlug?: string) {
    let query: Prisma.VirtualAirlineFindManyArgs |undefined = undefined;
    
    if (worldSlug) {
      query = {
        where: {
          World: {
            Slug: worldSlug
          }
        }
      };
    }

    const result: VirtualAirline[] = await this.virtualAirlineService.findAll(query);

    return result;
  }

  @Post('create')
  async create(@Body() body: Prisma.VirtualAirlineCreateInput) {
    const result: VirtualAirline = await this.virtualAirlineService.create(body);

    return result;
  }
}
