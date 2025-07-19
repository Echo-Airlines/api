/*
  Warnings:

  - A unique constraint covering the columns `[AirlineCode]` on the table `Member` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `Reputation` to the `Member` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Member" ADD COLUMN     "AirlineCode" VARCHAR,
ADD COLUMN     "CompanyCreationDate" TIMESTAMP(6),
ADD COLUMN     "CompanyId" UUID,
ADD COLUMN     "CompanyLevel" INTEGER,
ADD COLUMN     "CompanyLevelXP" INTEGER,
ADD COLUMN     "CompanyName" VARCHAR,
ADD COLUMN     "LastConnection" TIMESTAMP(6),
ADD COLUMN     "Reputation" DECIMAL(10,3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Member_AirlineCode_key" ON "Member"("AirlineCode");
