-- CreateTable
CREATE TABLE "VirtualAirline" (
    "Id" UUID NOT NULL,
    "Identifier" VARCHAR NOT NULL,
    "Name" VARCHAR NOT NULL,
    "Description" VARCHAR,
    "LastDividendsDistribution" TIMESTAMP(6),
    "LastComputationDate" TIMESTAMP(6),
    "ComputedMemberCount" INTEGER NOT NULL,
    "ComputedAircraftsCount" INTEGER NOT NULL,
    "ComputedNumberOfFlights30Days" INTEGER NOT NULL,
    "ComputedNumberOfFlightHours30Days" INTEGER NOT NULL,
    "ComputedMostUsedAirports" VARCHAR NOT NULL,
    "LastConnection" TIMESTAMP(6),
    "LastReportDate" TIMESTAMP(6),
    "Reputation" DECIMAL(10,3),
    "CreationDate" TIMESTAMP(6) NOT NULL,
    "DifficultyLevel" INTEGER NOT NULL,
    "Level" INTEGER NOT NULL,
    "LevelXP" INTEGER NOT NULL,
    "TotalContractsCompleted" INTEGER NOT NULL,
    "TotalContractsEarnedCredits" INTEGER NOT NULL,
    "LastRefresh" TIMESTAMP(6),
    "CreatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VirtualAirline_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "VirtualAirline_Identifier_key" ON "VirtualAirline"("Identifier");
