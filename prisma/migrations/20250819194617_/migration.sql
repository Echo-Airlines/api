/*
  Warnings:

  - You are about to drop the `FSHubEvent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."FSHubEvent" DROP CONSTRAINT "FSHubEvent_DiscordMessageId_fkey";

-- DropTable
DROP TABLE "public"."FSHubEvent";

-- CreateTable
CREATE TABLE "public"."ListenerEvent" (
    "Id" SERIAL NOT NULL,
    "Variant" VARCHAR NOT NULL,
    "Type" VARCHAR NOT NULL,
    "SentAt" TIMESTAMP(6) NOT NULL,
    "Data" JSONB,
    "DiscordMessageId" UUID,
    "CreatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ListenerEvent_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ListenerEvent_Id_key" ON "public"."ListenerEvent"("Id");

-- AddForeignKey
ALTER TABLE "public"."ListenerEvent" ADD CONSTRAINT "ListenerEvent_DiscordMessageId_fkey" FOREIGN KEY ("DiscordMessageId") REFERENCES "public"."DiscordMessage"("Id") ON DELETE SET NULL ON UPDATE CASCADE;
