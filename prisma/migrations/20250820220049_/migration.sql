-- AlterTable
ALTER TABLE "public"."DiscordChannelWebhook" ADD COLUMN     "Description" VARCHAR,
ADD COLUMN     "Name" VARCHAR NOT NULL DEFAULT 'Unnamed Webhook';
