/*
  Warnings:

  - A unique constraint covering the columns `[Slug]` on the table `DiscordMessageTemplate` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `Slug` to the `DiscordMessageTemplate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."DiscordMessageTemplate" ADD COLUMN     "Description" VARCHAR,
ADD COLUMN     "Slug" VARCHAR NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "DiscordMessageTemplate_Slug_key" ON "public"."DiscordMessageTemplate"("Slug");
