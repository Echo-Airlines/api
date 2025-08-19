-- CreateEnum
CREATE TYPE "public"."FlightStatus" AS ENUM ('PENDING', 'FLIGHT', 'COMPLETED', 'CANCELLED', 'WARP');

-- AlterTable
ALTER TABLE "public"."Flight" ADD COLUMN     "FlightStatus" "public"."FlightStatus" NOT NULL DEFAULT 'PENDING';
