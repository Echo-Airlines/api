/*
  Warnings:

  - You are about to drop the column `CompanyId` on the `Member` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Member" DROP CONSTRAINT "Member_CompanyId_fkey";

-- DropIndex
DROP INDEX "public"."Member_CompanyId_key";

-- AlterTable
ALTER TABLE "public"."Member" DROP COLUMN "CompanyId";

-- AddForeignKey
ALTER TABLE "public"."Company" ADD CONSTRAINT "Company_OwnerId_fkey" FOREIGN KEY ("OwnerId") REFERENCES "public"."Member"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
