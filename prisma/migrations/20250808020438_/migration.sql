-- AlterTable
ALTER TABLE "public"."Flight" ADD COLUMN     "VAId" UUID;

-- AddForeignKey
ALTER TABLE "public"."Flight" ADD CONSTRAINT "Flight_VAId_fkey" FOREIGN KEY ("VAId") REFERENCES "public"."VirtualAirline"("Id") ON DELETE SET NULL ON UPDATE CASCADE;
