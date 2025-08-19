-- DropForeignKey
ALTER TABLE "public"."FlightRoute" DROP CONSTRAINT "FlightRoute_FlightId_fkey";

-- AlterTable
ALTER TABLE "public"."FlightRoute" ALTER COLUMN "FlightId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."FlightRoute" ADD CONSTRAINT "FlightRoute_FlightId_fkey" FOREIGN KEY ("FlightId") REFERENCES "public"."Flight"("Id") ON DELETE SET NULL ON UPDATE CASCADE;
