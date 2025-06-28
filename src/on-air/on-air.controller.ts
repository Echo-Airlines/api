import { Controller, Get, Param } from '@nestjs/common';
import { OnAirApiService } from './on-air-api.service';
import { OnAirMember, OnAirVirtualAirline } from './types';

@Controller(['on-air', 'oa'])
export class OnAirController {
    constructor(private readonly onAirApiService: OnAirApiService) {}
  
    @Get('va/:id')
    async getVirtualAirlineById(@Param('id') id: string) {
      const results: OnAirVirtualAirline|null = await this.onAirApiService.getVirtualAirline(id);
      
      return results;
    }

    @Get('va/:id/members')
    async getVirtualAirlineMembersById(@Param('id') id: string) {
      const results: OnAirMember[]|null = await this.onAirApiService.getVirtualAirlineMembers(id);
      
      return results;
    }
}
