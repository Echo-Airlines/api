import { CreateNotamDto } from './create-notam.dto';
import { NOTAMStatus } from 'prisma/generated/prisma';
declare const UpdateNotamDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateNotamDto>>;
export declare class UpdateNotamDto extends UpdateNotamDto_base {
    Title: string;
    Content: string;
    ExpirationDate?: Date;
    Link: string;
    EffectiveDate?: Date;
    Status: NOTAMStatus;
}
export {};
