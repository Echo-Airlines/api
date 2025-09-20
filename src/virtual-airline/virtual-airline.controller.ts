import { Controller, Get, Post, Body, Patch, Param, Delete, Query, NotFoundException, Put, UseGuards } from '@nestjs/common';
import { VirtualAirlineService } from './virtual-airline.service';
import { Member, Prisma, VirtualAirlineRole, VirtualAirline } from 'prisma/generated/prisma';
import { AppConfigService } from '@app-config/app-config.service';
import { PublicMemberDto } from './dto/public-member.dto';
import { MemberWithCompanyVARole } from '@member/dto/member-witth-relations';
import { LoggerService } from '@logger/logger.service';
import { JwtAuthGuard } from '@auth/guards/jwt-auth.guard';
import { IsManagerGuard } from '@auth/guards/is-manager.guard';
import { UpdateVirtualAirlineDto } from './dto/UpdateVirtualAirline.dto';
import { plainToInstance } from 'class-transformer';


@Controller('va')
export class VirtualAirlineController {
  private readonly logger = new LoggerService(VirtualAirlineController.name);
  constructor(private readonly virtualAirlineService: VirtualAirlineService, private readonly appConfigService: AppConfigService) {}

  @Get('all')
  async getAll(@Query('worldSlug') worldSlug?: string) {
    let query: Prisma.VirtualAirlineFindManyArgs |undefined = {
      include: {
        World: true,
        Members: {
          include: {
            Company: true,
          }
        },
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

  @Get()
  async getPrimaryVirtualAirline() {
    const result: VirtualAirline|null = await this.virtualAirlineService.getPrimaryVirtualAirline();
    
    return result;
  }

  @Get('with-api-key')
  async getPrimaryVirtualAirlineWithApiKey() {
    const result: VirtualAirline|null = await this.virtualAirlineService.getPrimaryVirtualAirlineWithApiKey();
    
    return result;
  }

  @Get('leaderboard')
  async getLeaderboard() {
    const result: PublicMemberDto[] = await this.virtualAirlineService.getPrimaryLeaderboard()
    .then((members) => members.map((member) => new PublicMemberDto(member)));
    
    return result;
  }

  @Get('members')
  async getPrimaryVirtualAirlineMembers() {
    this.logger.log('getPrimaryVirtualAirlineMembers');
    const members: MemberWithCompanyVARole[] = await this.virtualAirlineService.getPrimaryVirtualAirlineMembers();

    const result: PublicMemberDto[] = members.map((member) => new PublicMemberDto(member));
    
    return result;
  }

  @Get('roles')
  async getVARoles() {
    const result: VirtualAirlineRole[] = await this.virtualAirlineService.getVARoles();

    return result;
  }

  @Post('create')
  async create(@Body() body: Prisma.VirtualAirlineCreateInput) {
    const result: VirtualAirline = await this.virtualAirlineService.create(body);

    // if the virtual airline is created, set the virtual airline initiated flag to true
    await this.appConfigService.setVirtualAirlineInitiated(true);

    return result;
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    const result: VirtualAirline = await this.virtualAirlineService.getVirtualAirlineById(id);
    
    if (!result) {
      throw new NotFoundException('Virtual airline not found');
    }

    return result;
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard, IsManagerGuard)
  async update(@Param('id') Id: string, @Body() body: UpdateVirtualAirlineDto) {
    if (body.VAManagerDiscordWebhookId && body.VAManagerDiscordWebhookId.length <= 0) {
      body.VAManagerDiscordWebhookId = undefined;
    }

    const result: VirtualAirline = await this.virtualAirlineService.updateById(Id, body);

    return result;
  }
}
