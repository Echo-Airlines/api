-- CreateEnum
CREATE TYPE "public"."ListenerEventStatus" AS ENUM ('PENDING', 'PROCESSING', 'COMPLETED', 'FAILED');

-- AlterTable
ALTER TABLE "public"."ListenerEvent" ADD COLUMN     "Error" VARCHAR,
ADD COLUMN     "Status" "public"."ListenerEventStatus" NOT NULL DEFAULT 'PENDING';
