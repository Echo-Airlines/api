/*
  Warnings:

  - The primary key for the `ListenerEvent` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `Id` on the `ListenerEvent` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "public"."ListenerEvent" DROP CONSTRAINT "ListenerEvent_pkey",
DROP COLUMN "Id",
ADD COLUMN     "Id" UUID NOT NULL,
ADD CONSTRAINT "ListenerEvent_pkey" PRIMARY KEY ("Id");

-- CreateIndex
CREATE UNIQUE INDEX "ListenerEvent_Id_key" ON "public"."ListenerEvent"("Id");
