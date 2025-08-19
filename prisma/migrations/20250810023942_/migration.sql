/*
  Warnings:

  - Added the required column `MemberId` to the `FlightRoute` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."FlightRoute" ADD COLUMN     "MemberId" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."FlightRoute" ADD CONSTRAINT "FlightRoute_MemberId_fkey" FOREIGN KEY ("MemberId") REFERENCES "public"."Member"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
