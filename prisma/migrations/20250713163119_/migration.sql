/*
  Warnings:

  - Added the required column `Action` to the `Permission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Entity` to the `Permission` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Permission" ADD COLUMN     "Action" VARCHAR NOT NULL,
ADD COLUMN     "Entity" VARCHAR NOT NULL;
