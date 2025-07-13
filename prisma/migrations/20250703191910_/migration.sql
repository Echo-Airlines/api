/*
  Warnings:

  - You are about to drop the column `ApiKey` on the `AppConfig` table. All the data in the column will be lost.
  - You are about to drop the column `VirtualAirlineId` on the `AppConfig` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[ApiKey]` on the table `VirtualAirline` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ApiKey` to the `VirtualAirline` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AppConfig" DROP COLUMN "ApiKey",
DROP COLUMN "VirtualAirlineId";

-- AlterTable
ALTER TABLE "VirtualAirline" ADD COLUMN     "ApiKey" UUID NOT NULL,
ADD COLUMN     "IsPrimary" BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "VirtualAirline_ApiKey_key" ON "VirtualAirline"("ApiKey");
