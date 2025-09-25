/*
  Warnings:

  - A unique constraint covering the columns `[FSHubId]` on the table `Flight` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."Flight" ADD COLUMN     "FSHubId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Flight_FSHubId_key" ON "public"."Flight"("FSHubId");
