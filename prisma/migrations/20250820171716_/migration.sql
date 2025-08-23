/*
  Warnings:

  - You are about to drop the column `DiscordMessageTypeId` on the `DiscordMessage` table. All the data in the column will be lost.
  - You are about to drop the column `MessageId` on the `DiscordMessage` table. All the data in the column will be lost.
  - You are about to drop the column `DiscordMessageTypeId` on the `DiscordMessageTemplate` table. All the data in the column will be lost.
  - You are about to drop the `DiscordMessageType` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."DiscordMessage" DROP CONSTRAINT "DiscordMessage_DiscordMessageTypeId_fkey";

-- DropForeignKey
ALTER TABLE "public"."DiscordMessageTemplate" DROP CONSTRAINT "DiscordMessageTemplate_DiscordMessageTypeId_fkey";

-- AlterTable
ALTER TABLE "public"."DiscordMessage" DROP COLUMN "DiscordMessageTypeId",
DROP COLUMN "MessageId";

-- AlterTable
ALTER TABLE "public"."DiscordMessageTemplate" DROP COLUMN "DiscordMessageTypeId";

-- DropTable
DROP TABLE "public"."DiscordMessageType";
