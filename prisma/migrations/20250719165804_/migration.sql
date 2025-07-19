/*
  Warnings:

  - You are about to alter the column `PayPercent` on the `VirtualAirlineRole` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to alter the column `PayWeekly` on the `VirtualAirlineRole` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to alter the column `PayPerFlightHour` on the `VirtualAirlineRole` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.

*/
-- AlterTable
ALTER TABLE "VirtualAirlineRole" ALTER COLUMN "PayPercent" SET DATA TYPE DECIMAL(10,2),
ALTER COLUMN "PayWeekly" SET DATA TYPE DECIMAL(10,2),
ALTER COLUMN "PayPerFlightHour" SET DATA TYPE DECIMAL(10,2);
