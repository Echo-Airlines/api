/*
  Warnings:

  - You are about to drop the column `IsActive` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "IsActive",
ADD COLUMN     "BanExpiresAt" TIMESTAMP(6),
ADD COLUMN     "BanReason" VARCHAR,
ADD COLUMN     "IsBanned" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "IsOnline" BOOLEAN NOT NULL DEFAULT false;
