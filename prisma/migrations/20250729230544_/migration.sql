-- AlterTable
ALTER TABLE "public"."Aircraft" ADD COLUMN     "CurrentAirportId" UUID;

-- CreateTable
CREATE TABLE "public"."Airport" (
    "Id" UUID NOT NULL,
    "ICAO" VARCHAR NOT NULL,
    "IATA" VARCHAR,
    "Name" VARCHAR NOT NULL,
    "Size" INTEGER NOT NULL DEFAULT 9,
    "City" VARCHAR,
    "State" VARCHAR,
    "CountryCode" VARCHAR,
    "CountryName" VARCHAR,
    "Latitude" DECIMAL(10,6) NOT NULL,
    "Longitude" DECIMAL(10,6) NOT NULL,
    "HomeWebSiteUrl" VARCHAR,
    "WikiUrl" VARCHAR,
    "CreatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Airport_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Airport_Id_key" ON "public"."Airport"("Id");

-- CreateIndex
CREATE UNIQUE INDEX "Airport_ICAO_key" ON "public"."Airport"("ICAO");

-- CreateIndex
CREATE UNIQUE INDEX "Airport_IATA_key" ON "public"."Airport"("IATA");

-- AddForeignKey
ALTER TABLE "public"."Aircraft" ADD CONSTRAINT "Aircraft_CurrentAirportId_fkey" FOREIGN KEY ("CurrentAirportId") REFERENCES "public"."Airport"("Id") ON DELETE SET NULL ON UPDATE CASCADE;
