-- DropForeignKey
ALTER TABLE "VirtualAirline" DROP CONSTRAINT "VirtualAirline_WorldId_fkey";

-- AlterTable
ALTER TABLE "VirtualAirline" ALTER COLUMN "Identifier" DROP NOT NULL,
ALTER COLUMN "Name" DROP NOT NULL,
ALTER COLUMN "ComputedMemberCount" DROP NOT NULL,
ALTER COLUMN "ComputedAircraftsCount" DROP NOT NULL,
ALTER COLUMN "ComputedNumberOfFlights30Days" DROP NOT NULL,
ALTER COLUMN "ComputedNumberOfFlightHours30Days" DROP NOT NULL,
ALTER COLUMN "ComputedMostUsedAirports" DROP NOT NULL,
ALTER COLUMN "CreationDate" DROP NOT NULL,
ALTER COLUMN "DifficultyLevel" DROP NOT NULL,
ALTER COLUMN "Level" DROP NOT NULL,
ALTER COLUMN "LevelXP" DROP NOT NULL,
ALTER COLUMN "TotalContractsCompleted" DROP NOT NULL,
ALTER COLUMN "TotalContractsEarnedCredits" DROP NOT NULL,
ALTER COLUMN "WorldId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "VirtualAirline" ADD CONSTRAINT "VirtualAirline_WorldId_fkey" FOREIGN KEY ("WorldId") REFERENCES "World"("Id") ON DELETE SET NULL ON UPDATE CASCADE;
