/*
  Warnings:

  - You are about to drop the column `OwnerId` on the `Company` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[CompanyId]` on the table `Member` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `CompanyId` to the `Member` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Company" DROP CONSTRAINT "Company_OwnerId_fkey";

-- DropIndex
DROP INDEX "public"."Company_OwnerId_key";

-- AlterTable
ALTER TABLE "public"."Company" DROP COLUMN "OwnerId";

-- AlterTable
ALTER TABLE "public"."Member" ADD COLUMN     "CompanyId" UUID NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Member_CompanyId_key" ON "public"."Member"("CompanyId");

-- AddForeignKey
ALTER TABLE "public"."Member" ADD CONSTRAINT "Member_CompanyId_fkey" FOREIGN KEY ("CompanyId") REFERENCES "public"."Company"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
