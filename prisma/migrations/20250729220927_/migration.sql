-- CreateTable
CREATE TABLE "Aircraft" (
    "Id" UUID NOT NULL,
    "Identifier" VARCHAR NOT NULL,
    "DisplayName" VARCHAR NOT NULL,
    "AircraftClassId" UUID NOT NULL,
    "VirtualAirlineId" UUID NOT NULL,
    "AircraftStatusId" INTEGER NOT NULL,

    CONSTRAINT "Aircraft_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "AircraftClass" (
    "Id" UUID NOT NULL,
    "ShortName" VARCHAR NOT NULL,
    "Name" VARCHAR NOT NULL,

    CONSTRAINT "AircraftClass_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "AircraftStatus" (
    "Id" SERIAL NOT NULL,
    "Name" VARCHAR NOT NULL,

    CONSTRAINT "AircraftStatus_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Aircraft_Id_key" ON "Aircraft"("Id");

-- CreateIndex
CREATE UNIQUE INDEX "Aircraft_Identifier_key" ON "Aircraft"("Identifier");

-- CreateIndex
CREATE UNIQUE INDEX "AircraftClass_Id_key" ON "AircraftClass"("Id");

-- CreateIndex
CREATE UNIQUE INDEX "AircraftClass_ShortName_key" ON "AircraftClass"("ShortName");

-- CreateIndex
CREATE UNIQUE INDEX "AircraftStatus_Id_key" ON "AircraftStatus"("Id");

-- AddForeignKey
ALTER TABLE "Aircraft" ADD CONSTRAINT "Aircraft_AircraftClassId_fkey" FOREIGN KEY ("AircraftClassId") REFERENCES "AircraftClass"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aircraft" ADD CONSTRAINT "Aircraft_VirtualAirlineId_fkey" FOREIGN KEY ("VirtualAirlineId") REFERENCES "VirtualAirline"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aircraft" ADD CONSTRAINT "Aircraft_AircraftStatusId_fkey" FOREIGN KEY ("AircraftStatusId") REFERENCES "AircraftStatus"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
