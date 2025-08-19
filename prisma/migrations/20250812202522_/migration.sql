/*
  Warnings:

  - You are about to drop the column `AirlineCode` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `CompanyCreationDate` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `CompanyLevel` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `CompanyLevelXP` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `CompanyName` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `LastConnection` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `Reputation` on the `Member` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Flight" DROP CONSTRAINT "Flight_CompanyId_fkey";

-- DropIndex
DROP INDEX "public"."Member_AirlineCode_key";

-- AlterTable
ALTER TABLE "public"."Flight" ADD COLUMN     "MemberId" UUID;

-- AlterTable
ALTER TABLE "public"."Member" DROP COLUMN "AirlineCode",
DROP COLUMN "CompanyCreationDate",
DROP COLUMN "CompanyLevel",
DROP COLUMN "CompanyLevelXP",
DROP COLUMN "CompanyName",
DROP COLUMN "LastConnection",
DROP COLUMN "Reputation";

-- CreateTable
CREATE TABLE "public"."Company" (
    "Id" UUID NOT NULL,
    "Name" VARCHAR NOT NULL,
    "Callsign" VARCHAR NOT NULL,
    "AirlineCode" VARCHAR NOT NULL,
    "CreationDate" TIMESTAMP(6) NOT NULL,
    "Level" INTEGER NOT NULL,
    "LevelXP" INTEGER NOT NULL,
    "Reputation" DECIMAL(10,3) NOT NULL,
    "Paused" BOOLEAN NOT NULL DEFAULT false,
    "LastConnection" TIMESTAMP(6),
    "LastReportDate" TIMESTAMP(6),
    "DifficultyLevel" INTEGER NOT NULL,
    "WorldId" UUID NOT NULL,
    "OwnerId" UUID NOT NULL,
    "LastRefresh" TIMESTAMP(6),
    "CreatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Company_Callsign_key" ON "public"."Company"("Callsign");

-- CreateIndex
CREATE UNIQUE INDEX "Company_AirlineCode_key" ON "public"."Company"("AirlineCode");

-- AddForeignKey
ALTER TABLE "public"."Member" ADD CONSTRAINT "Member_CompanyId_fkey" FOREIGN KEY ("CompanyId") REFERENCES "public"."Company"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Company" ADD CONSTRAINT "Company_WorldId_fkey" FOREIGN KEY ("WorldId") REFERENCES "public"."World"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Flight" ADD CONSTRAINT "Flight_CompanyId_fkey" FOREIGN KEY ("CompanyId") REFERENCES "public"."Company"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Flight" ADD CONSTRAINT "Flight_MemberId_fkey" FOREIGN KEY ("MemberId") REFERENCES "public"."Member"("Id") ON DELETE SET NULL ON UPDATE CASCADE;
