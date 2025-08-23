-- AlterTable
ALTER TABLE "public"."ListenerEventSender" ADD COLUMN     "DiscordChannelWebhookId" UUID;

-- AddForeignKey
ALTER TABLE "public"."ListenerEventSender" ADD CONSTRAINT "ListenerEventSender_DiscordChannelWebhookId_fkey" FOREIGN KEY ("DiscordChannelWebhookId") REFERENCES "public"."DiscordChannelWebhook"("Id") ON DELETE SET NULL ON UPDATE CASCADE;
