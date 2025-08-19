/*
  Warnings:

  - The values [EVERY_DAY] on the enum `CronExpression` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."CronExpression_new" AS ENUM ('EVERY_30_SECONDS', 'EVERY_MINUTE', 'EVERY_5_MINUTES', 'EVERY_10_MINUTES', 'EVERY_30_MINUTES', 'EVERY_HOUR', 'EVERY_6_HOURS', 'EVERY_12_HOURS', 'EVERY_DAY_AT_MIDNIGHT', 'EVERY_WEEK', 'EVERY_MONTH');
ALTER TABLE "public"."Job" ALTER COLUMN "CronExpression" TYPE "public"."CronExpression_new" USING ("CronExpression"::text::"public"."CronExpression_new");
ALTER TYPE "public"."CronExpression" RENAME TO "CronExpression_old";
ALTER TYPE "public"."CronExpression_new" RENAME TO "CronExpression";
DROP TYPE "public"."CronExpression_old";
COMMIT;
