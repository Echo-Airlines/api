/*
  Warnings:

  - A unique constraint covering the columns `[Token]` on the table `DiscordChannelWebhook` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ChannelId` to the `DiscordChannelWebhook` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Token` to the `DiscordChannelWebhook` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."DiscordChannelWebhook" ADD COLUMN     "ChannelId" VARCHAR NOT NULL,
ADD COLUMN     "Token" VARCHAR NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "DiscordChannelWebhook_Token_key" ON "public"."DiscordChannelWebhook"("Token");
