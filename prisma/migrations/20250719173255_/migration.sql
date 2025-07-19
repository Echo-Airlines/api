/*
  Warnings:

  - Made the column `AirlineCode` on table `Member` required. This step will fail if there are existing NULL values in that column.
  - Made the column `CompanyCreationDate` on table `Member` required. This step will fail if there are existing NULL values in that column.
  - Made the column `CompanyId` on table `Member` required. This step will fail if there are existing NULL values in that column.
  - Made the column `CompanyLevel` on table `Member` required. This step will fail if there are existing NULL values in that column.
  - Made the column `CompanyLevelXP` on table `Member` required. This step will fail if there are existing NULL values in that column.
  - Made the column `CompanyName` on table `Member` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Member" ALTER COLUMN "AirlineCode" SET NOT NULL,
ALTER COLUMN "CompanyCreationDate" SET NOT NULL,
ALTER COLUMN "CompanyId" SET NOT NULL,
ALTER COLUMN "CompanyLevel" SET NOT NULL,
ALTER COLUMN "CompanyLevelXP" SET NOT NULL,
ALTER COLUMN "CompanyName" SET NOT NULL;
