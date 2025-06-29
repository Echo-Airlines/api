import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { OnAirApiService } from './on-air-api.service';
import { OnAirMember, OnAirVirtualAirline } from './types';

@Controller(['on-air', 'oa'])
export class OnAirController {
  constructor(private readonly onAirApiService: OnAirApiService) {}
  
  @Get('va')
  async getVirtualAirlines() {
    try {
      const results: OnAirVirtualAirline|null = await this.onAirApiService.getVirtualAirline();

      if (!results) {
        throw new NotFoundException('Virtual airline not found');
      }

      return results;
    } catch (error) {
      throw new NotFoundException('Virtual airlines not found');
    }
  }

  @Get('va/members')
  async getVirtualAirlineMembers() {
    try {
      const results: OnAirMember[]|null = await this.onAirApiService.getVirtualAirlineMembers();
      
      if (!results) {
        throw new NotFoundException('Virtual airline members not found');
      }

      return results;
    } catch (error) {
      throw new NotFoundException('Virtual airline members not found');
    }
  }
  
  @Get('va/:id')
  async getVirtualAirlineById(@Param('id') id: string) {
    try {
      const results: OnAirVirtualAirline|null = await this.onAirApiService.getVirtualAirline(id);
      
      return results;
    } catch (error) {
      throw new NotFoundException('Virtual airline not found');
    }
  }

  @Get('va/:id/members')
  async getVirtualAirlineMembersById(@Param('id') id: string) {
    try {
      const results: OnAirMember[]|null = await this.onAirApiService.getVirtualAirlineMembers(id);
      
      return results;
    } catch (error) {
      throw new NotFoundException('Virtual airline members not found');
    }
  }
}
