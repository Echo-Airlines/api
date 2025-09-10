import { Injectable } from '@nestjs/common';
import { CreateNotamDto } from './dto/create-notam.dto';
import { UpdateNotamDto } from './dto/update-notam.dto';
import { PrismaService } from '@prisma/prisma.service';
import { NOTAMStatus, Prisma } from 'prisma/generated/prisma';

@Injectable()
export class AdminNotamService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateNotamDto, query?: Partial<Prisma.NotamCreateArgs>) {
    const entity = await this.prisma.notam.create({
      data: dto,
      ...query,
    });
    
    return entity;
  }

  async findMany(query?: Prisma.NotamFindManyArgs) {
    const entities = await this.prisma.notam.findMany(query);
    
    return entities; 
  }

  async findOne(query: Prisma.NotamFindUniqueArgs) {
    const entity = await this.prisma.notam.findUnique(query);
    
    return entity;
  }

  async findAllActive(query?: Partial<Prisma.NotamFindManyArgs>) {
    const entities = await this.findMany({
      where: {
        Status: NOTAMStatus.ACTIVE,
      },
      ...query,
    });
    
    return entities;
  }

  async findOneById(Id: string, query?: Partial<Prisma.NotamFindUniqueArgs>) {
    const entity = await this.findOne({
      where: {
        Id,
      },
      ...query,
    });
    
    return entity;
  }

  async updateById(Id: string, data: UpdateNotamDto) {
    const entity = await this.update({
      where: { Id },
      data,
    });
    
    return entity;
  }

  async update(query: Prisma.NotamUpdateArgs) {
    const entity = await this.prisma.notam.update(query);
    
    return entity;
  }

  async remove(query: Prisma.NotamDeleteArgs) {
    const entity = await this.prisma.notam.delete(query);
    
    return entity;
  }

  async removeById(Id: string) {
    const entity = await this.remove({
      where: { Id },
    });
    
    return entity;
  }
}
