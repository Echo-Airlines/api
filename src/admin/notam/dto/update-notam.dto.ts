import { PartialType } from '@nestjs/mapped-types';
import { CreateNotamDto } from './create-notam.dto';
import { NOTAMStatus } from 'prisma/generated/prisma';

export class UpdateNotamDto extends PartialType(CreateNotamDto) {
    Title: string;
    Content: string;
    ExpirationDate?: Date;
    Link: string;
    EffectiveDate?: Date;
    Status: NOTAMStatus;
}
