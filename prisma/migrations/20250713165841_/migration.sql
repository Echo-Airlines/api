/*
  Warnings:

  - You are about to drop the column `ShowLastActivity` on the `UserPrivacySettings` table. All the data in the column will be lost.
  - You are about to drop the column `ShowLastLogout` on the `UserPrivacySettings` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserPrivacySettings" DROP COLUMN "ShowLastActivity",
DROP COLUMN "ShowLastLogout",
ADD COLUMN     "ShowLastName" BOOLEAN NOT NULL DEFAULT false;
