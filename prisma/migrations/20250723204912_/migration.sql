/*
  Warnings:

  - A unique constraint covering the columns `[CompanyId]` on the table `Member` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Member_CompanyId_key" ON "Member"("CompanyId");
