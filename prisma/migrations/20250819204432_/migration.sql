/*
  Warnings:

  - Added the required column `SenderId` to the `ListenerEvent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."ListenerEvent" ADD COLUMN     "SenderId" UUID NOT NULL;

-- CreateTable
CREATE TABLE "public"."ListenerEventSender" (
    "Id" UUID NOT NULL,
    "Name" VARCHAR NOT NULL,
    "Slug" VARCHAR NOT NULL,
    "Token" VARCHAR NOT NULL,
    "IsActive" BOOLEAN NOT NULL DEFAULT true,
    "CreatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ListenerEventSender_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ListenerEventSender_Id_key" ON "public"."ListenerEventSender"("Id");

-- CreateIndex
CREATE UNIQUE INDEX "ListenerEventSender_Slug_key" ON "public"."ListenerEventSender"("Slug");

-- CreateIndex
CREATE UNIQUE INDEX "ListenerEventSender_Token_key" ON "public"."ListenerEventSender"("Token");

-- AddForeignKey
ALTER TABLE "public"."ListenerEvent" ADD CONSTRAINT "ListenerEvent_SenderId_fkey" FOREIGN KEY ("SenderId") REFERENCES "public"."ListenerEventSender"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
