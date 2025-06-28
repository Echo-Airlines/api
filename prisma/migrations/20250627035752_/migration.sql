-- CreateEnum
CREATE TYPE "JobType" AS ENUM ('VIRTUAL_AIRLINE_SYNC');

-- CreateEnum
CREATE TYPE "JobStatus" AS ENUM ('INACTIVE', 'ACTIVE', 'RUNNING', 'COMPLETED', 'FAILED');

-- CreateTable
CREATE TABLE "Job" (
    "Id" UUID NOT NULL,
    "IsEnabled" BOOLEAN NOT NULL DEFAULT false,
    "Type" "JobType" NOT NULL,
    "Status" "JobStatus" NOT NULL DEFAULT 'INACTIVE',
    "Name" TEXT NOT NULL,
    "Description" TEXT,
    "RunIntervalInSeconds" INTEGER NOT NULL DEFAULT 60,
    "Parameters" JSONB,
    "LastRunAt" TIMESTAMP(6),
    "NextRunAt" TIMESTAMP(6),
    "LastError" TEXT,
    "ExecutionCount" INTEGER NOT NULL DEFAULT 0,
    "CreatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("Id")
);
