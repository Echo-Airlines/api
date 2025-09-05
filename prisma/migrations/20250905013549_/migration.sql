/*
  Warnings:

  - A unique constraint covering the columns `[ResetPasswordToken]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "ResetPasswordEmailSentAt" TIMESTAMP(6),
ADD COLUMN     "ResetPasswordToken" VARCHAR;

-- CreateIndex
CREATE UNIQUE INDEX "User_ResetPasswordToken_key" ON "public"."User"("ResetPasswordToken");
