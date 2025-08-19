-- CreateTable
CREATE TABLE "public"."AircraftMaintenance" (
    "Id" UUID NOT NULL,
    "AircraftId" UUID NOT NULL,
    "AnnualCheckup" BOOLEAN NOT NULL,
    "Inspection100Hours" BOOLEAN NOT NULL,
    "FailuresRepair" BOOLEAN NOT NULL,
    "AirframeRepair" BOOLEAN NOT NULL,
    "AirframeReplace" BOOLEAN NOT NULL,
    "EcoSeats" INTEGER NOT NULL,
    "BusSeats" INTEGER NOT NULL,
    "FirstClassSeats" INTEGER NOT NULL,
    "AirframeRepairCondition" DECIMAL(10,6) NOT NULL,
    "MaintenanceFBOId" UUID NOT NULL,
    "RemainingMaintenanceWorkHours" DECIMAL(10,6) NOT NULL,
    "Amount" DECIMAL(10,2) NOT NULL,
    "CreatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AircraftMaintenance_pkey" PRIMARY KEY ("Id")
);

-- AddForeignKey
ALTER TABLE "public"."AircraftMaintenance" ADD CONSTRAINT "AircraftMaintenance_AircraftId_fkey" FOREIGN KEY ("AircraftId") REFERENCES "public"."Aircraft"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
