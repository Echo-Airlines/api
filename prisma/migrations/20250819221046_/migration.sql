/*
  Warnings:

  - You are about to drop the column `WebhookUrl` on the `DiscordChannelWebhook` table. All the data in the column will be lost.
  - Added the required column `WebhookId` to the `DiscordChannelWebhook` table without a default value. This is not possible if the table is not empty.
  - Added the required column `WebhookToken` to the `DiscordChannelWebhook` table without a default value. This is not possible if the table is not empty.
  - Added the required column `WebhookUrlBase` to the `DiscordChannelWebhook` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."DiscordChannelWebhook" DROP COLUMN "WebhookUrl",
ADD COLUMN     "WebhookId" VARCHAR NOT NULL,
ADD COLUMN     "WebhookToken" VARCHAR NOT NULL,
ADD COLUMN     "WebhookUrlBase" VARCHAR NOT NULL;
