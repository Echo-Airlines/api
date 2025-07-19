/*
  Warnings:

  - You are about to alter the column `PayPercent` on the `VirtualAirlineRole` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to alter the column `PayWeekly` on the `VirtualAirlineRole` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to alter the column `PayPerFlightHour` on the `VirtualAirlineRole` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.

*/
-- AlterTable
ALTER TABLE "VirtualAirlineRole" ALTER COLUMN "PayPercent" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "PayWeekly" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "PayPerFlightHour" SET DATA TYPE DECIMAL(65,30);
