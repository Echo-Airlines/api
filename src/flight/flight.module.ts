import { Module } from '@nestjs/common';
import { PrismaModule } from '@prisma/prisma.module';
import { FlightService } from './flight.service';
import { FlightController } from './flight.controller';
import { MemberModule } from '@member/member.module';
import { MemberService } from '@member/member.service';

@Module({
    imports: [PrismaModule, MemberModule],
    providers: [FlightService, MemberService],
    controllers: [FlightController],
    exports: [FlightService],
})
export class FlightModule {}
