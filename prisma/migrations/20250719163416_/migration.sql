-- CreateTable
CREATE TABLE "VirtualAirlineRole" (
    "Id" UUID NOT NULL,
    "VAId" UUID NOT NULL,
    "Name" VARCHAR NOT NULL,
    "Permission" INTEGER NOT NULL,
    "IsDefaultNewRole" BOOLEAN NOT NULL,
    "Color" VARCHAR NOT NULL,
    "PayPercent" INTEGER NOT NULL,
    "IsHidden" BOOLEAN NOT NULL,
    "RestrictLoadingVAJobsIntoNonVAAircraft" BOOLEAN NOT NULL,
    "RestrictLoadingNonVAJobsIntoVAAircraft" BOOLEAN NOT NULL,
    "PayWeekly" INTEGER NOT NULL,
    "PayPerFlightHour" INTEGER NOT NULL,
    "LastRefresh" TIMESTAMP(6),
    "CreatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VirtualAirlineRole_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Member" (
    "Id" UUID NOT NULL,
    "VAId" UUID NOT NULL,
    "VARoleId" UUID NOT NULL,
    "TotalCargosTransportedLbs" INTEGER NOT NULL,
    "TotalPAXsTransported" INTEGER NOT NULL,
    "TotalEarnedCredits" DECIMAL(65,30) NOT NULL,
    "TotalSpentCredits" DECIMAL(65,30) NOT NULL,
    "NumberOfFlights" INTEGER NOT NULL,
    "FlightHours" DECIMAL(65,30) NOT NULL,
    "Color" VARCHAR NOT NULL,
    "AcceptMigration" BOOLEAN NOT NULL,
    "ReputationImpact" DECIMAL(65,30) NOT NULL,
    "LastVAFlightDate" TIMESTAMP(6),
    "LastRefresh" TIMESTAMP(6),
    "CreatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("Id")
);

-- AddForeignKey
ALTER TABLE "VirtualAirlineRole" ADD CONSTRAINT "VirtualAirlineRole_VAId_fkey" FOREIGN KEY ("VAId") REFERENCES "VirtualAirline"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_VAId_fkey" FOREIGN KEY ("VAId") REFERENCES "VirtualAirline"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_VARoleId_fkey" FOREIGN KEY ("VARoleId") REFERENCES "VirtualAirlineRole"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
