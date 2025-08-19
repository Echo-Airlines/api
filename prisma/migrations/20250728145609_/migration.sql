/*
  Warnings:

  - You are about to drop the column `DiscordCallbackUrl` on the `AppConfig` table. All the data in the column will be lost.
  - You are about to drop the column `DiscordClientId` on the `AppConfig` table. All the data in the column will be lost.
  - You are about to drop the column `DiscordClientSecret` on the `AppConfig` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "AppConfig" DROP COLUMN "DiscordCallbackUrl",
DROP COLUMN "DiscordClientId",
DROP COLUMN "DiscordClientSecret";
