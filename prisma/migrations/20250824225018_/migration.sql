-- AlterTable
ALTER TABLE "public"."Livery" ADD COLUMN     "AircraftId" UUID;

-- AddForeignKey
ALTER TABLE "public"."Livery" ADD CONSTRAINT "Livery_AircraftId_fkey" FOREIGN KEY ("AircraftId") REFERENCES "public"."Aircraft"("Id") ON DELETE SET NULL ON UPDATE CASCADE;
