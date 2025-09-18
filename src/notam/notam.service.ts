import { Injectable } from '@nestjs/common';
import { CreateNotamDto } from '../admin/notam/dto/create-notam.dto';
import { UpdateNotamDto } from '../admin/notam/dto/update-notam.dto';
import { DatabaseService } from '@database/database.service';
import { NOTAMStatus, Prisma } from 'prisma/generated/prisma';

@Injectable()
export class NotamService {
  constructor(private readonly prisma: DatabaseService) {}
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
}
