/*
  Warnings:

  - You are about to drop the column `RunIntervalInSeconds` on the `Job` table. All the data in the column will be lost.
  - Added the required column `CronExpression` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CronExpression" AS ENUM ('EVERY_30_SECONDS', 'EVERY_MINUTE', 'EVERY_5_MINUTES', 'EVERY_10_MINUTES', 'EVERY_30_MINUTES', 'EVERY_HOUR', 'EVERY_6_HOURS', 'EVERY_12_HOURS', 'EVERY_DAY', 'EVERY_WEEK', 'EVERY_MONTH');

-- AlterTable
ALTER TABLE "Job" DROP COLUMN "RunIntervalInSeconds",
ADD COLUMN     "CronExpression" "CronExpression" NOT NULL;
