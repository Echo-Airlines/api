import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { VirtualAirlineService } from './virtual-airline.service';
import { Member, Prisma, VirtualAirline } from 'prisma/generated/prisma';
import { AppConfigService } from '@app-config/app-config.service';
import { PublicMemberDto } from './dto/public-member.dto';


@Controller('va')
export class VirtualAirlineController {
  constructor(private readonly virtualAirlineService: VirtualAirlineService, private readonly appConfigService: AppConfigService) {}

  @Get()
  async getAll(@Query('worldSlug') worldSlug?: string) {
    let query: Prisma.VirtualAirlineFindManyArgs |undefined = {
      include: {
        World: true,
        Members: true,
      },
      orderBy: {
        UpdatedAt: 'desc'
      }
  };
    
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

  @Get('leaderboard')
  async getLeaderboard() {
    const result: PublicMemberDto[] = await this.virtualAirlineService.getPrimaryLeaderboard()
    .then((members) => members.filter((member) => member.VARole.Name !== 'Invitation Request'))
    .then((members) => members.map((member) => new PublicMemberDto(member)));
    
    return result;
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    const result: VirtualAirline|null = await this.virtualAirlineService.getVirtualAirlineById(id);
    
    return result;
  } 

  @Post('create')
  async create(@Body() body: Prisma.VirtualAirlineCreateInput) {
    const result: VirtualAirline = await this.virtualAirlineService.create(body);

    // if the virtual airline is created, set the virtual airline initiated flag to true
    await this.appConfigService.setVirtualAirlineInitiated(true);

    return result;
  }
}
