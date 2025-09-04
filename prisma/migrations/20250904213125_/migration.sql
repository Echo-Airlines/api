/*
  Warnings:

  - A unique constraint covering the columns `[ConfirmEmailToken]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "ConfirmEmailToken" VARCHAR,
ADD COLUMN     "WelcomeEmailSentAt" TIMESTAMP(6);

-- CreateIndex
CREATE UNIQUE INDEX "User_ConfirmEmailToken_key" ON "public"."User"("ConfirmEmailToken");
