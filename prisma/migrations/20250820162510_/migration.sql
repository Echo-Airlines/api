/*
  Warnings:

  - Added the required column `DiscordMessageTemplateId` to the `DiscordMessage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."DiscordMessage" ADD COLUMN     "DiscordMessageTemplateId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "public"."DiscordMessageTemplate" (
    "Id" SERIAL NOT NULL,
    "Name" VARCHAR NOT NULL,
    "Content" VARCHAR NOT NULL,
    "DiscordMessageTypeId" INTEGER NOT NULL,
    "CreatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DiscordMessageTemplate_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DiscordMessageTemplate_Id_key" ON "public"."DiscordMessageTemplate"("Id");

-- AddForeignKey
ALTER TABLE "public"."DiscordMessage" ADD CONSTRAINT "DiscordMessage_DiscordMessageTemplateId_fkey" FOREIGN KEY ("DiscordMessageTemplateId") REFERENCES "public"."DiscordMessageTemplate"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."DiscordMessageTemplate" ADD CONSTRAINT "DiscordMessageTemplate_DiscordMessageTypeId_fkey" FOREIGN KEY ("DiscordMessageTypeId") REFERENCES "public"."DiscordMessageType"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
