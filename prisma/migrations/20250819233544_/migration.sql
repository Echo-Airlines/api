/*
  Warnings:

  - You are about to drop the column `ChannelId` on the `DiscordChannelWebhook` table. All the data in the column will be lost.
  - You are about to drop the column `WebhookToken` on the `DiscordChannelWebhook` table. All the data in the column will be lost.
  - You are about to drop the column `WebhookUrlBase` on the `DiscordChannelWebhook` table. All the data in the column will be lost.
  - Added the required column `WebhookUrl` to the `DiscordChannelWebhook` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."DiscordChannelWebhook" DROP COLUMN "ChannelId",
DROP COLUMN "WebhookToken",
DROP COLUMN "WebhookUrlBase",
ADD COLUMN     "WebhookUrl" VARCHAR NOT NULL;
