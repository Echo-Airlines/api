-- DropForeignKey
ALTER TABLE "public"."DiscordMessage" DROP CONSTRAINT "DiscordMessage_DiscordMessageTemplateId_fkey";

-- AlterTable
ALTER TABLE "public"."DiscordMessage" ALTER COLUMN "DiscordMessageTemplateId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."DiscordMessage" ADD CONSTRAINT "DiscordMessage_DiscordMessageTemplateId_fkey" FOREIGN KEY ("DiscordMessageTemplateId") REFERENCES "public"."DiscordMessageTemplate"("Id") ON DELETE SET NULL ON UPDATE CASCADE;
