-- DropForeignKey
ALTER TABLE "public"."Flight" DROP CONSTRAINT "Flight_AircraftId_fkey";

-- AlterTable
ALTER TABLE "public"."Flight" ALTER COLUMN "AircraftId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Flight" ADD CONSTRAINT "Flight_AircraftId_fkey" FOREIGN KEY ("AircraftId") REFERENCES "public"."Aircraft"("Id") ON DELETE SET NULL ON UPDATE CASCADE;
