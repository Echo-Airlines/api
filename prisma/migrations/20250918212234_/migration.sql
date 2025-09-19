-- AlterTable
ALTER TABLE "public"."VirtualAirline" ADD COLUMN     "VAManagerDiscordWebhookId" UUID;

-- AddForeignKey
ALTER TABLE "public"."VirtualAirline" ADD CONSTRAINT "VirtualAirline_VAManagerDiscordWebhookId_fkey" FOREIGN KEY ("VAManagerDiscordWebhookId") REFERENCES "public"."DiscordChannelWebhook"("Id") ON DELETE SET NULL ON UPDATE CASCADE;
