-- CreateEnum
CREATE TYPE "JobType" AS ENUM ('VIRTUAL_AIRLINE_SYNC');

-- CreateEnum
CREATE TYPE "JobStatus" AS ENUM ('INACTIVE', 'ACTIVE', 'RUNNING', 'COMPLETED', 'FAILED');

-- CreateEnum
CREATE TYPE "CronExpression" AS ENUM ('EVERY_30_SECONDS', 'EVERY_MINUTE', 'EVERY_5_MINUTES', 'EVERY_10_MINUTES', 'EVERY_30_MINUTES', 'EVERY_HOUR', 'EVERY_6_HOURS', 'EVERY_12_HOURS', 'EVERY_DAY', 'EVERY_WEEK', 'EVERY_MONTH');

-- CreateTable
CREATE TABLE "AppConfig" (
    "Id" SERIAL NOT NULL,
    "OnAirSyncEnabled" BOOLEAN NOT NULL DEFAULT false,
    "OnAirVASyncEnabled" BOOLEAN NOT NULL DEFAULT false,
    "OnAirVAMembersSyncEnabled" BOOLEAN NOT NULL DEFAULT false,
    "OnAirCompanySyncEnabled" BOOLEAN NOT NULL DEFAULT false,
    "VirtualAirlineId" UUID,
    "ApiKey" UUID,
    "DiscordServerInviteLink" VARCHAR,
    "DiscordServerInviteLinkEnabled" BOOLEAN NOT NULL DEFAULT false,
    "AcceptingNewMembers" BOOLEAN NOT NULL DEFAULT false,
    "DiscordAuthEnabled" BOOLEAN NOT NULL DEFAULT false,
    "LocalAuthEnabled" BOOLEAN NOT NULL DEFAULT true,
    "CreatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AppConfig_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Livery" (
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

-- CreateTable
CREATE TABLE "Job" (
    "Id" UUID NOT NULL,
    "IsEnabled" BOOLEAN NOT NULL DEFAULT false,
    "Type" "JobType" NOT NULL,
    "Status" "JobStatus" NOT NULL DEFAULT 'INACTIVE',
    "CronExpression" "CronExpression" NOT NULL,
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

-- CreateIndex
CREATE UNIQUE INDEX "VirtualAirline_Identifier_key" ON "VirtualAirline"("Identifier");
