import { NOTAMStatus } from "prisma/generated/prisma";

export class CreateNotamDto {
    Title: string;
    Content: string;
    ExpirationDate?: Date;
    Link: string;
    EffectiveDate?: Date;
    Status: NOTAMStatus;
    CreatedById: string;
}
