/*
  Warnings:

  - A unique constraint covering the columns `[InviteCodeId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "InviteCodeId" UUID;

-- CreateTable
CREATE TABLE "InviteCode" (
    "Id" UUID NOT NULL,
    "Code" VARCHAR NOT NULL,
    "IsUsed" BOOLEAN NOT NULL DEFAULT false,
    "UsedAt" TIMESTAMP(6),
    "CreatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "InviteCode_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "InviteCode_Id_key" ON "InviteCode"("Id");

-- CreateIndex
CREATE UNIQUE INDEX "InviteCode_Code_key" ON "InviteCode"("Code");

-- CreateIndex
CREATE UNIQUE INDEX "User_InviteCodeId_key" ON "User"("InviteCodeId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_InviteCodeId_fkey" FOREIGN KEY ("InviteCodeId") REFERENCES "InviteCode"("Id") ON DELETE SET NULL ON UPDATE CASCADE;
