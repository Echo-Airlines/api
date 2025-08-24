/*
  Warnings:

  - A unique constraint covering the columns `[OwnerId]` on the table `Company` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."ListenerEventSender" ADD COLUMN     "Description" VARCHAR;

-- CreateIndex
CREATE UNIQUE INDEX "Company_OwnerId_key" ON "public"."Company"("OwnerId");
