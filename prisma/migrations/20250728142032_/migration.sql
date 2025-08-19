/*
  Warnings:

  - The `ShowLastLogin` column on the `UserPrivacySettings` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "UserPrivacySettings" DROP COLUMN "ShowLastLogin",
ADD COLUMN     "ShowLastLogin" BOOLEAN NOT NULL DEFAULT false;
