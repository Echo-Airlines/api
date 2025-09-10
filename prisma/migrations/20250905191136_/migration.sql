/*
  Warnings:

  - You are about to drop the `NOTAM` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."NOTAM" DROP CONSTRAINT "NOTAM_CreatedById_fkey";

-- DropTable
DROP TABLE "public"."NOTAM";

-- CreateTable
CREATE TABLE "public"."Notam" (
    "Id" UUID NOT NULL,
    "Title" VARCHAR NOT NULL,
    "Content" VARCHAR NOT NULL,
    "ExpirationDate" TIMESTAMP(6),
    "Link" VARCHAR,
    "EffectiveDate" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Status" "public"."NOTAMStatus" NOT NULL DEFAULT 'ACTIVE',
    "CreatedById" UUID NOT NULL,
    "CreatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notam_pkey" PRIMARY KEY ("Id")
);

-- AddForeignKey
ALTER TABLE "public"."Notam" ADD CONSTRAINT "Notam_CreatedById_fkey" FOREIGN KEY ("CreatedById") REFERENCES "public"."User"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
