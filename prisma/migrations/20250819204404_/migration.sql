-- CreateEnum
CREATE TYPE "public"."ListenerEventStatus" AS ENUM ('PENDING', 'PROCESSING', 'COMPLETED', 'FAILED');

-- CreateEnum
CREATE TYPE "public"."FlightStatus" AS ENUM ('PENDING', 'FLIGHT', 'COMPLETED', 'CANCELLED', 'WARP');

-- CreateEnum
CREATE TYPE "public"."JobType" AS ENUM ('VIRTUAL_AIRLINE_SYNC', 'VIRTUAL_AIRLINE_MEMBERS_SYNC', 'VIRTUAL_AIRLINE_FLEET_SYNC', 'VIRTUAL_AIRLINE_FLIGHTS_SYNC');

-- CreateEnum
CREATE TYPE "public"."JobStatus" AS ENUM ('INACTIVE', 'ACTIVE', 'RUNNING', 'COMPLETED', 'FAILED');

-- CreateEnum
CREATE TYPE "public"."CronExpression" AS ENUM ('EVERY_30_SECONDS', 'EVERY_MINUTE', 'EVERY_5_MINUTES', 'EVERY_10_MINUTES', 'EVERY_30_MINUTES', 'EVERY_HOUR', 'EVERY_6_HOURS', 'EVERY_12_HOURS', 'EVERY_DAY_AT_MIDNIGHT', 'EVERY_WEEK', 'EVERY_MONTH');

-- CreateTable
CREATE TABLE "public"."AppConfig" (
    "Id" SERIAL NOT NULL,
    "OnAirSyncEnabled" BOOLEAN NOT NULL DEFAULT false,
    "OnAirVASyncEnabled" BOOLEAN NOT NULL DEFAULT false,
    "OnAirVAMembersSyncEnabled" BOOLEAN NOT NULL DEFAULT false,
    "OnAirCompanySyncEnabled" BOOLEAN NOT NULL DEFAULT false,
    "DiscordServerInviteLink" VARCHAR,
    "DiscordServerInviteLinkEnabled" BOOLEAN NOT NULL DEFAULT false,
    "AcceptingNewMembers" BOOLEAN NOT NULL DEFAULT false,
    "DiscordAuthEnabled" BOOLEAN NOT NULL DEFAULT false,
    "DiscordAuthCreateUser" BOOLEAN NOT NULL DEFAULT false,
    "LocalAuthEnabled" BOOLEAN NOT NULL DEFAULT true,
    "VirtualAirlineInitiated" BOOLEAN NOT NULL DEFAULT false,
    "CreatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AppConfig_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "public"."InviteCode" (
    "Id" UUID NOT NULL,
    "Code" VARCHAR NOT NULL,
    "IsUsed" BOOLEAN NOT NULL DEFAULT false,
    "UsedAt" TIMESTAMP(6),
    "CreatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "InviteCode_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "public"."DiscordMessage" (
    "Id" UUID NOT NULL,
    "ChannelId" VARCHAR NOT NULL,
    "MessageId" VARCHAR NOT NULL,
    "Content" VARCHAR NOT NULL,
    "DiscordMessageTypeId" INTEGER NOT NULL,
    "DiscordChannelWebhookId" UUID,
    "CreatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DiscordMessage_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "public"."DiscordMessageType" (
    "Id" SERIAL NOT NULL,
    "Name" VARCHAR NOT NULL,
    "Description" VARCHAR,
    "Slug" VARCHAR NOT NULL,
    "CreatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DiscordMessageType_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "public"."DiscordChannelWebhook" (
    "Id" UUID NOT NULL,
    "ChannelId" VARCHAR NOT NULL,
    "WebhookUrl" VARCHAR NOT NULL,
    "IsActive" BOOLEAN NOT NULL DEFAULT true,
    "CreatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DiscordChannelWebhook_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "public"."ListenerEvent" (
    "Id" SERIAL NOT NULL,
    "Variant" VARCHAR NOT NULL,
    "Type" VARCHAR NOT NULL,
    "SentAt" TIMESTAMP(6) NOT NULL,
    "Status" "public"."ListenerEventStatus" NOT NULL DEFAULT 'PENDING',
    "Error" VARCHAR,
    "Data" JSONB,
    "DiscordMessageId" UUID,
    "CreatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ListenerEvent_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "public"."User" (
    "Id" UUID NOT NULL,
    "Username" VARCHAR NOT NULL,
    "Password" VARCHAR,
    "Email" VARCHAR,
    "FirstName" VARCHAR,
    "LastName" VARCHAR,
    "FirstLoginCompleted" BOOLEAN NOT NULL DEFAULT false,
    "IsOnline" BOOLEAN NOT NULL DEFAULT false,
    "IsBanned" BOOLEAN NOT NULL DEFAULT false,
    "BanReason" VARCHAR,
    "BanExpiresAt" TIMESTAMP(6),
    "IsVerified" BOOLEAN NOT NULL DEFAULT false,
    "LastLogin" TIMESTAMP(6),
    "InviteCodeId" UUID,
    "CreatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "DiscordId" VARCHAR,
    "DiscordUsername" VARCHAR,
    "DiscordAvatar" VARCHAR,
    "DiscordEmail" VARCHAR,

    CONSTRAINT "User_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "public"."UserPrivacySettings" (
    "Id" UUID NOT NULL,
    "UserId" UUID NOT NULL,
    "ShowOnlineStatus" BOOLEAN NOT NULL DEFAULT true,
    "ShowFirstName" BOOLEAN NOT NULL DEFAULT false,
    "ShowLastName" BOOLEAN NOT NULL DEFAULT false,
    "ShowLastNameInitial" BOOLEAN NOT NULL DEFAULT false,
    "ShowLastLogin" BOOLEAN NOT NULL DEFAULT false,
    "CreatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserPrivacySettings_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "public"."Role" (
    "Id" SERIAL NOT NULL,
    "Name" VARCHAR NOT NULL,
    "Description" VARCHAR,
    "Slug" VARCHAR NOT NULL,
    "CreatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "VirtualAirlineRoleId" UUID,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "public"."Permission" (
    "Id" SERIAL NOT NULL,
    "Name" VARCHAR NOT NULL,
    "Description" VARCHAR,
    "Slug" VARCHAR NOT NULL,
    "Entity" VARCHAR NOT NULL,
    "Action" VARCHAR NOT NULL,

    CONSTRAINT "Permission_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "public"."Livery" (
    "Id" UUID NOT NULL,
    "Name" VARCHAR NOT NULL,
    "IsActive" BOOLEAN NOT NULL DEFAULT true,
    "DownloadCount" INTEGER NOT NULL DEFAULT 0,
    "Image" VARCHAR NOT NULL,
    "Url" TEXT,
    "Description" TEXT,
    "DownloadUrl" TEXT,
    "CreatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Livery_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "public"."VirtualAirline" (
    "Id" UUID NOT NULL,
    "ApiKey" UUID NOT NULL,
    "IsPrimary" BOOLEAN NOT NULL DEFAULT false,
    "Identifier" VARCHAR,
    "Name" VARCHAR,
    "Description" VARCHAR,
    "WorldId" UUID,
    "LastDividendsDistribution" TIMESTAMP(6),
    "LastComputationDate" TIMESTAMP(6),
    "ComputedMemberCount" INTEGER,
    "ComputedAircraftsCount" INTEGER,
    "ComputedNumberOfFlights30Days" INTEGER,
    "ComputedNumberOfFlightHours30Days" INTEGER,
    "ComputedMostUsedAirports" VARCHAR,
    "LastConnection" TIMESTAMP(6),
    "LastReportDate" TIMESTAMP(6),
    "Reputation" DECIMAL(10,3),
    "CreationDate" TIMESTAMP(6),
    "DifficultyLevel" INTEGER,
    "Level" INTEGER,
    "LevelXP" INTEGER,
    "TotalContractsCompleted" INTEGER,
    "TotalContractsEarnedCredits" INTEGER,
    "LastRefresh" TIMESTAMP(6),
    "CreatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VirtualAirline_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "public"."VirtualAirlineRole" (
    "Id" UUID NOT NULL,
    "VAId" UUID NOT NULL,
    "Name" VARCHAR NOT NULL,
    "Permission" INTEGER NOT NULL,
    "IsDefaultNewRole" BOOLEAN NOT NULL,
    "Color" VARCHAR NOT NULL,
    "PayPercent" DECIMAL(10,2) NOT NULL,
    "IsHidden" BOOLEAN NOT NULL,
    "RestrictLoadingVAJobsIntoNonVAAircraft" BOOLEAN NOT NULL,
    "RestrictLoadingNonVAJobsIntoVAAircraft" BOOLEAN NOT NULL,
    "PayWeekly" DECIMAL(10,2) NOT NULL,
    "PayPerFlightHour" DECIMAL(10,2) NOT NULL,
    "LastRefresh" TIMESTAMP(6),
    "CreatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VirtualAirlineRole_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "public"."World" (
    "Id" UUID NOT NULL,
    "Name" VARCHAR NOT NULL,
    "Slug" VARCHAR NOT NULL,
    "Description" VARCHAR,
    "CreatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "World_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "public"."Member" (
    "IsActive" BOOLEAN NOT NULL DEFAULT true,
    "DeactivatedAt" TIMESTAMP(6),
    "Id" UUID NOT NULL,
    "VAId" UUID NOT NULL,
    "CompanyId" UUID NOT NULL,
    "VARoleId" UUID NOT NULL,
    "TotalCargosTransportedLbs" INTEGER NOT NULL,
    "TotalPAXsTransported" INTEGER NOT NULL,
    "TotalEarnedCredits" DECIMAL(65,30) NOT NULL,
    "TotalSpentCredits" DECIMAL(65,30) NOT NULL,
    "NumberOfFlights" INTEGER NOT NULL,
    "FlightHours" DECIMAL(65,30) NOT NULL,
    "Color" VARCHAR NOT NULL,
    "ReputationImpact" DECIMAL(65,30) NOT NULL,
    "LastVAFlightDate" TIMESTAMP(6),
    "LastRefresh" TIMESTAMP(6),
    "UserId" UUID,
    "CreatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "public"."Company" (
    "Id" UUID NOT NULL,
    "Name" VARCHAR NOT NULL,
    "AirlineCode" VARCHAR NOT NULL,
    "CreationDate" TIMESTAMP(6) NOT NULL,
    "Level" INTEGER NOT NULL,
    "LevelXP" INTEGER NOT NULL,
    "Reputation" DECIMAL(10,3) NOT NULL,
    "Paused" BOOLEAN NOT NULL DEFAULT false,
    "LastConnection" TIMESTAMP(6),
    "LastReportDate" TIMESTAMP(6),
    "DifficultyLevel" INTEGER NOT NULL,
    "WorldId" UUID NOT NULL,
    "OwnerId" UUID NOT NULL,
    "LastRefresh" TIMESTAMP(6),
    "CreatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "public"."Aircraft" (
    "Id" UUID NOT NULL,
    "Identifier" VARCHAR NOT NULL,
    "DisplayName" VARCHAR NOT NULL,
    "AircraftStatusId" INTEGER NOT NULL,
    "AircraftClassId" UUID NOT NULL,
    "VirtualAirlineId" UUID NOT NULL,
    "CurrentAirportId" UUID,
    "LastRefresh" TIMESTAMP(6),
    "CreatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Aircraft_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "public"."AircraftClass" (
    "Id" UUID NOT NULL,
    "ShortName" VARCHAR NOT NULL,
    "Name" VARCHAR NOT NULL,

    CONSTRAINT "AircraftClass_pkey" PRIMARY KEY ("Id")
);

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

-- CreateTable
CREATE TABLE "public"."AircraftStatus" (
    "Id" INTEGER NOT NULL,
    "Name" VARCHAR NOT NULL,

    CONSTRAINT "AircraftStatus_pkey" PRIMARY KEY ("Id")
);

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

-- CreateTable
CREATE TABLE "public"."Flight" (
    "Id" UUID NOT NULL,
    "AircraftId" UUID,
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
    "IntendedFlightLevel" INTEGER,
    "Passengers" INTEGER,
    "Cargo" INTEGER,
    "AddedFuelQty" DECIMAL(65,30),
    "IsAI" BOOLEAN NOT NULL,
    "VerticalSpeedAtTouchdownMpS" DECIMAL(65,30),
    "MaxGForce" DECIMAL(65,30),
    "MinGForce" DECIMAL(65,30),
    "MaxBank" DECIMAL(65,30),
    "MaxPitch" DECIMAL(65,30),
    "HasStalled" BOOLEAN NOT NULL DEFAULT false,
    "HasOverspeeded" BOOLEAN NOT NULL DEFAULT false,
    "XPFlight" INTEGER,
    "XPFlightBonus" DECIMAL(65,30),
    "XPMissions" INTEGER,
    "CargosTotalWeight" DECIMAL(65,30),
    "PAXCount" INTEGER,
    "AircraftCurrentFOB" DECIMAL(65,30),
    "AircraftCurrentAltitude" DECIMAL(65,30),
    "ActualCruiseAltitude" DECIMAL(65,30),
    "ActualConsumptionAtCruiseLevelInLbsPerHour" DECIMAL(65,30),
    "ActualTotalFuelConsumptionInLbs" DECIMAL(65,30),
    "ActualConsumptionAtCruiseLevelInGalPerHour" DECIMAL(65,30),
    "ActualTASAtCruiseLevel" DECIMAL(65,30),
    "ActualCruiseTimeInMinutes" DECIMAL(65,30),
    "ActualPressureAltitude" DECIMAL(65,30),
    "RegisterState" INTEGER,
    "WrongFuelDetected" BOOLEAN NOT NULL DEFAULT false,
    "WrongWeightDetected" BOOLEAN NOT NULL DEFAULT false,
    "TimeOffset" DECIMAL(65,30),
    "StartLatitude" DECIMAL(65,30),
    "StartLongitude" DECIMAL(65,30),
    "StartHeading" DECIMAL(65,30),
    "UseFreelanceRouteSchedule" BOOLEAN NOT NULL DEFAULT false,
    "RestCrewAfterWarp" BOOLEAN NOT NULL DEFAULT false,
    "Score" DECIMAL(65,30),
    "CanResumeOrAbort" BOOLEAN NOT NULL DEFAULT false,
    "EngineOnRealTime" TIMESTAMP(6),
    "EngineOffRealTime" TIMESTAMP(6),
    "LandedRealTime" TIMESTAMP(6),
    "AirborneRealTime" TIMESTAMP(6),
    "DepartureAirportId" UUID,
    "ArrivalIntendedAirportId" UUID,
    "ArrivalAlternateAirportId" UUID,
    "ArrivalActualAirportId" UUID,
    "VAId" UUID,
    "MemberId" UUID,
    "LastRefresh" TIMESTAMP(6),
    "CreatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "FlightStatus" "public"."FlightStatus" NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "Flight_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "public"."FlightRoute" (
    "Id" UUID NOT NULL,
    "FlightId" UUID,
    "MemberId" UUID NOT NULL,
    "Route" VARCHAR NOT NULL,
    "CreatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FlightRoute_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "public"."Job" (
    "Id" UUID NOT NULL,
    "IsEnabled" BOOLEAN NOT NULL DEFAULT false,
    "FirstRunCompleted" BOOLEAN NOT NULL DEFAULT false,
    "Type" "public"."JobType" NOT NULL,
    "Status" "public"."JobStatus" NOT NULL DEFAULT 'INACTIVE',
    "CronExpression" "public"."CronExpression" NOT NULL,
    "Name" TEXT NOT NULL,
    "Description" TEXT,
    "Parameters" JSONB,
    "LastRunAt" TIMESTAMP(6),
    "NextRunAt" TIMESTAMP(6),
    "LastError" TEXT,
    "ExecutionCount" INTEGER NOT NULL DEFAULT 0,
    "CreatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "public"."_UserRoles" (
    "A" INTEGER NOT NULL,
    "B" UUID NOT NULL,

    CONSTRAINT "_UserRoles_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "public"."_RolePermissions" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_RolePermissions_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "InviteCode_Id_key" ON "public"."InviteCode"("Id");

-- CreateIndex
CREATE UNIQUE INDEX "InviteCode_Code_key" ON "public"."InviteCode"("Code");

-- CreateIndex
CREATE UNIQUE INDEX "DiscordMessage_Id_key" ON "public"."DiscordMessage"("Id");

-- CreateIndex
CREATE UNIQUE INDEX "DiscordMessageType_Id_key" ON "public"."DiscordMessageType"("Id");

-- CreateIndex
CREATE UNIQUE INDEX "DiscordMessageType_Slug_key" ON "public"."DiscordMessageType"("Slug");

-- CreateIndex
CREATE UNIQUE INDEX "DiscordChannelWebhook_Id_key" ON "public"."DiscordChannelWebhook"("Id");

-- CreateIndex
CREATE UNIQUE INDEX "ListenerEvent_Id_key" ON "public"."ListenerEvent"("Id");

-- CreateIndex
CREATE UNIQUE INDEX "User_Id_key" ON "public"."User"("Id");

-- CreateIndex
CREATE UNIQUE INDEX "User_Username_key" ON "public"."User"("Username");

-- CreateIndex
CREATE UNIQUE INDEX "User_Email_key" ON "public"."User"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "User_InviteCodeId_key" ON "public"."User"("InviteCodeId");

-- CreateIndex
CREATE UNIQUE INDEX "User_DiscordId_key" ON "public"."User"("DiscordId");

-- CreateIndex
CREATE UNIQUE INDEX "UserPrivacySettings_Id_key" ON "public"."UserPrivacySettings"("Id");

-- CreateIndex
CREATE UNIQUE INDEX "UserPrivacySettings_UserId_key" ON "public"."UserPrivacySettings"("UserId");

-- CreateIndex
CREATE UNIQUE INDEX "Role_Id_key" ON "public"."Role"("Id");

-- CreateIndex
CREATE UNIQUE INDEX "Role_Slug_key" ON "public"."Role"("Slug");

-- CreateIndex
CREATE UNIQUE INDEX "Role_VirtualAirlineRoleId_key" ON "public"."Role"("VirtualAirlineRoleId");

-- CreateIndex
CREATE UNIQUE INDEX "Permission_Slug_key" ON "public"."Permission"("Slug");

-- CreateIndex
CREATE UNIQUE INDEX "VirtualAirline_ApiKey_key" ON "public"."VirtualAirline"("ApiKey");

-- CreateIndex
CREATE UNIQUE INDEX "VirtualAirline_Identifier_key" ON "public"."VirtualAirline"("Identifier");

-- CreateIndex
CREATE UNIQUE INDEX "World_Slug_key" ON "public"."World"("Slug");

-- CreateIndex
CREATE UNIQUE INDEX "Member_CompanyId_key" ON "public"."Member"("CompanyId");

-- CreateIndex
CREATE UNIQUE INDEX "Company_AirlineCode_key" ON "public"."Company"("AirlineCode");

-- CreateIndex
CREATE UNIQUE INDEX "Aircraft_Id_key" ON "public"."Aircraft"("Id");

-- CreateIndex
CREATE UNIQUE INDEX "Aircraft_Identifier_key" ON "public"."Aircraft"("Identifier");

-- CreateIndex
CREATE UNIQUE INDEX "AircraftClass_Id_key" ON "public"."AircraftClass"("Id");

-- CreateIndex
CREATE UNIQUE INDEX "AircraftClass_ShortName_key" ON "public"."AircraftClass"("ShortName");

-- CreateIndex
CREATE UNIQUE INDEX "AircraftStatus_Id_key" ON "public"."AircraftStatus"("Id");

-- CreateIndex
CREATE UNIQUE INDEX "Airport_Id_key" ON "public"."Airport"("Id");

-- CreateIndex
CREATE UNIQUE INDEX "Airport_ICAO_key" ON "public"."Airport"("ICAO");

-- CreateIndex
CREATE UNIQUE INDEX "Airport_IATA_key" ON "public"."Airport"("IATA");

-- CreateIndex
CREATE UNIQUE INDEX "Flight_Id_key" ON "public"."Flight"("Id");

-- CreateIndex
CREATE INDEX "_UserRoles_B_index" ON "public"."_UserRoles"("B");

-- CreateIndex
CREATE INDEX "_RolePermissions_B_index" ON "public"."_RolePermissions"("B");

-- AddForeignKey
ALTER TABLE "public"."DiscordMessage" ADD CONSTRAINT "DiscordMessage_DiscordMessageTypeId_fkey" FOREIGN KEY ("DiscordMessageTypeId") REFERENCES "public"."DiscordMessageType"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."DiscordMessage" ADD CONSTRAINT "DiscordMessage_DiscordChannelWebhookId_fkey" FOREIGN KEY ("DiscordChannelWebhookId") REFERENCES "public"."DiscordChannelWebhook"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ListenerEvent" ADD CONSTRAINT "ListenerEvent_DiscordMessageId_fkey" FOREIGN KEY ("DiscordMessageId") REFERENCES "public"."DiscordMessage"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_InviteCodeId_fkey" FOREIGN KEY ("InviteCodeId") REFERENCES "public"."InviteCode"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserPrivacySettings" ADD CONSTRAINT "UserPrivacySettings_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "public"."User"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Role" ADD CONSTRAINT "Role_VirtualAirlineRoleId_fkey" FOREIGN KEY ("VirtualAirlineRoleId") REFERENCES "public"."VirtualAirlineRole"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."VirtualAirline" ADD CONSTRAINT "VirtualAirline_WorldId_fkey" FOREIGN KEY ("WorldId") REFERENCES "public"."World"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."VirtualAirlineRole" ADD CONSTRAINT "VirtualAirlineRole_VAId_fkey" FOREIGN KEY ("VAId") REFERENCES "public"."VirtualAirline"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Member" ADD CONSTRAINT "Member_CompanyId_fkey" FOREIGN KEY ("CompanyId") REFERENCES "public"."Company"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Member" ADD CONSTRAINT "Member_VAId_fkey" FOREIGN KEY ("VAId") REFERENCES "public"."VirtualAirline"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Member" ADD CONSTRAINT "Member_VARoleId_fkey" FOREIGN KEY ("VARoleId") REFERENCES "public"."VirtualAirlineRole"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Member" ADD CONSTRAINT "Member_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "public"."User"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Company" ADD CONSTRAINT "Company_WorldId_fkey" FOREIGN KEY ("WorldId") REFERENCES "public"."World"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Aircraft" ADD CONSTRAINT "Aircraft_AircraftClassId_fkey" FOREIGN KEY ("AircraftClassId") REFERENCES "public"."AircraftClass"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Aircraft" ADD CONSTRAINT "Aircraft_VirtualAirlineId_fkey" FOREIGN KEY ("VirtualAirlineId") REFERENCES "public"."VirtualAirline"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Aircraft" ADD CONSTRAINT "Aircraft_AircraftStatusId_fkey" FOREIGN KEY ("AircraftStatusId") REFERENCES "public"."AircraftStatus"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Aircraft" ADD CONSTRAINT "Aircraft_CurrentAirportId_fkey" FOREIGN KEY ("CurrentAirportId") REFERENCES "public"."Airport"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AircraftMaintenance" ADD CONSTRAINT "AircraftMaintenance_AircraftId_fkey" FOREIGN KEY ("AircraftId") REFERENCES "public"."Aircraft"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Flight" ADD CONSTRAINT "Flight_CompanyId_fkey" FOREIGN KEY ("CompanyId") REFERENCES "public"."Company"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Flight" ADD CONSTRAINT "Flight_VAId_fkey" FOREIGN KEY ("VAId") REFERENCES "public"."VirtualAirline"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Flight" ADD CONSTRAINT "Flight_AircraftId_fkey" FOREIGN KEY ("AircraftId") REFERENCES "public"."Aircraft"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Flight" ADD CONSTRAINT "Flight_DepartureAirportId_fkey" FOREIGN KEY ("DepartureAirportId") REFERENCES "public"."Airport"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Flight" ADD CONSTRAINT "Flight_ArrivalIntendedAirportId_fkey" FOREIGN KEY ("ArrivalIntendedAirportId") REFERENCES "public"."Airport"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Flight" ADD CONSTRAINT "Flight_ArrivalAlternateAirportId_fkey" FOREIGN KEY ("ArrivalAlternateAirportId") REFERENCES "public"."Airport"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Flight" ADD CONSTRAINT "Flight_ArrivalActualAirportId_fkey" FOREIGN KEY ("ArrivalActualAirportId") REFERENCES "public"."Airport"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Flight" ADD CONSTRAINT "Flight_MemberId_fkey" FOREIGN KEY ("MemberId") REFERENCES "public"."Member"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."FlightRoute" ADD CONSTRAINT "FlightRoute_FlightId_fkey" FOREIGN KEY ("FlightId") REFERENCES "public"."Flight"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."FlightRoute" ADD CONSTRAINT "FlightRoute_MemberId_fkey" FOREIGN KEY ("MemberId") REFERENCES "public"."Member"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_UserRoles" ADD CONSTRAINT "_UserRoles_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Role"("Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_UserRoles" ADD CONSTRAINT "_UserRoles_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."User"("Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_RolePermissions" ADD CONSTRAINT "_RolePermissions_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Permission"("Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_RolePermissions" ADD CONSTRAINT "_RolePermissions_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."Role"("Id") ON DELETE CASCADE ON UPDATE CASCADE;
