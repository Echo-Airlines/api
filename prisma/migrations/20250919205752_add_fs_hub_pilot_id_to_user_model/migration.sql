/*
  Warnings:

  - A unique constraint covering the columns `[FSHubPilotId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "FSHubPilotId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "User_FSHubPilotId_key" ON "public"."User"("FSHubPilotId");
