-- CreateTable
CREATE TABLE "public"."Flight" (
    "Id" UUID NOT NULL,
    "AircraftId" UUID NOT NULL,
    "CompanyId" UUID NOT NULL,
    "Registered" BOOLEAN NOT NULL,
    "Category" INTEGER NOT NULL,
    "ResultComments" TEXT NOT NULL,
    "StartTime" TIMESTAMP(3),
    "EndTime" TIMESTAMP(3),
    "EngineOnTime" TIMESTAMP(3),
    "EngineOffTime" TIMESTAMP(3),
    "AirborneTime" TIMESTAMP(3),
    "LandedTime" TIMESTAMP(3),
    "IntendedFlightLevel" INTEGER NOT NULL,
    "Passengers" INTEGER NOT NULL,
    "Cargo" INTEGER NOT NULL,
    "AddedFuelQty" DECIMAL(65,30) NOT NULL,
    "IsAI" BOOLEAN NOT NULL,
    "VerticalSpeedAtTouchdownMpS" DECIMAL(65,30) NOT NULL,
    "MaxGForce" DECIMAL(65,30) NOT NULL,
    "MinGForce" DECIMAL(65,30) NOT NULL,
    "MaxBank" DECIMAL(65,30) NOT NULL,
    "MaxPitch" DECIMAL(65,30) NOT NULL,
    "HasStalled" BOOLEAN NOT NULL,
    "HasOverspeeded" BOOLEAN NOT NULL,
    "XPFlight" INTEGER NOT NULL,
    "XPFlightBonus" DECIMAL(65,30) NOT NULL,
    "XPMissions" INTEGER NOT NULL,
    "CargosTotalWeight" DECIMAL(65,30) NOT NULL,
    "PAXCount" INTEGER NOT NULL,
    "AircraftCurrentFOB" DECIMAL(65,30) NOT NULL,
    "AircraftCurrentAltitude" DECIMAL(65,30) NOT NULL,
    "ActualCruiseAltitude" DECIMAL(65,30) NOT NULL,
    "ActualConsumptionAtCruiseLevelInLbsPerHour" DECIMAL(65,30) NOT NULL,
    "ActualTotalFuelConsumptionInLbs" DECIMAL(65,30) NOT NULL,
    "ActualConsumptionAtCruiseLevelInGalPerHour" DECIMAL(65,30) NOT NULL,
    "ActualTASAtCruiseLevel" DECIMAL(65,30) NOT NULL,
    "ActualCruiseTimeInMinutes" DECIMAL(65,30) NOT NULL,
    "ActualPressureAltitude" DECIMAL(65,30) NOT NULL,
    "RegisterState" INTEGER NOT NULL,
    "WrongFuelDetected" BOOLEAN NOT NULL,
    "WrongWeightDetected" BOOLEAN NOT NULL,
    "TimeOffset" DECIMAL(65,30) NOT NULL,
    "StartLatitude" DECIMAL(65,30) NOT NULL,
    "StartLongitude" DECIMAL(65,30) NOT NULL,
    "StartHeading" DECIMAL(65,30) NOT NULL,
    "UseFreelanceRouteSchedule" BOOLEAN NOT NULL,
    "RestCrewAfterWarp" BOOLEAN NOT NULL,
    "Score" DECIMAL(65,30) NOT NULL,
    "CanResumeOrAbort" BOOLEAN NOT NULL,
    "EngineOnRealTime" TIMESTAMP(3),
    "EngineOffRealTime" TIMESTAMP(3),
    "LandedRealTime" TIMESTAMP(3),
    "AirborneRealTime" TIMESTAMP(3),
    "DepartureAirportId" UUID,
    "ArrivalIntendedAirportId" UUID,
    "ArrivalAlternateAirportId" UUID,
    "ArrivalActualAirportId" UUID,
    "LastRefresh" TIMESTAMP(6),
    "CreatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Flight_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "public"."FlightRoute" (
    "Id" UUID NOT NULL,
    "FlightId" UUID NOT NULL,
    "Route" VARCHAR NOT NULL,
    "CreatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FlightRoute_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Flight_Id_key" ON "public"."Flight"("Id");

-- AddForeignKey
ALTER TABLE "public"."Flight" ADD CONSTRAINT "Flight_CompanyId_fkey" FOREIGN KEY ("CompanyId") REFERENCES "public"."Member"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Flight" ADD CONSTRAINT "Flight_AircraftId_fkey" FOREIGN KEY ("AircraftId") REFERENCES "public"."Aircraft"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Flight" ADD CONSTRAINT "Flight_DepartureAirportId_fkey" FOREIGN KEY ("DepartureAirportId") REFERENCES "public"."Airport"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Flight" ADD CONSTRAINT "Flight_ArrivalIntendedAirportId_fkey" FOREIGN KEY ("ArrivalIntendedAirportId") REFERENCES "public"."Airport"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Flight" ADD CONSTRAINT "Flight_ArrivalAlternateAirportId_fkey" FOREIGN KEY ("ArrivalAlternateAirportId") REFERENCES "public"."Airport"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Flight" ADD CONSTRAINT "Flight_ArrivalActualAirportId_fkey" FOREIGN KEY ("ArrivalActualAirportId") REFERENCES "public"."Airport"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."FlightRoute" ADD CONSTRAINT "FlightRoute_FlightId_fkey" FOREIGN KEY ("FlightId") REFERENCES "public"."Flight"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
