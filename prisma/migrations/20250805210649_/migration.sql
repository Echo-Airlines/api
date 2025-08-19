-- AlterTable
ALTER TABLE "public"."Member" ADD COLUMN     "DeactivatedAt" TIMESTAMP(6),
ADD COLUMN     "IsActive" BOOLEAN NOT NULL DEFAULT true;
