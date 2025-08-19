/*
  Warnings:

  - A unique constraint covering the columns `[VirtualAirlineRoleId]` on the table `Role` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Role" ADD COLUMN     "VirtualAirlineRoleId" UUID;

-- CreateIndex
CREATE UNIQUE INDEX "Role_VirtualAirlineRoleId_key" ON "Role"("VirtualAirlineRoleId");

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_VirtualAirlineRoleId_fkey" FOREIGN KEY ("VirtualAirlineRoleId") REFERENCES "VirtualAirlineRole"("Id") ON DELETE SET NULL ON UPDATE CASCADE;
