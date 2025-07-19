/*
  Warnings:

  - A unique constraint covering the columns `[Username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[Email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "Email" VARCHAR,
ADD COLUMN     "FirstLoginCompleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "FirstName" VARCHAR,
ADD COLUMN     "IsActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "IsVerified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "LastName" VARCHAR;

-- CreateIndex
CREATE UNIQUE INDEX "User_Username_key" ON "User"("Username");

-- CreateIndex
CREATE UNIQUE INDEX "User_Email_key" ON "User"("Email");
