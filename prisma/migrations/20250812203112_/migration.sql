/*
  Warnings:

  - You are about to drop the column `Callsign` on the `Company` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "public"."Company_Callsign_key";

-- AlterTable
ALTER TABLE "public"."Company" DROP COLUMN "Callsign";
