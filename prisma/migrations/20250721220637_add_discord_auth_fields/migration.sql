/*
  Warnings:

  - A unique constraint covering the columns `[DiscordId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "AppConfig" ADD COLUMN     "DiscordCallbackUrl" VARCHAR,
ADD COLUMN     "DiscordClientId" VARCHAR,
ADD COLUMN     "DiscordClientSecret" VARCHAR;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "DiscordAvatar" VARCHAR,
ADD COLUMN     "DiscordEmail" VARCHAR,
ADD COLUMN     "DiscordId" VARCHAR,
ADD COLUMN     "DiscordUsername" VARCHAR,
ALTER COLUMN "Password" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_DiscordId_key" ON "User"("DiscordId");
