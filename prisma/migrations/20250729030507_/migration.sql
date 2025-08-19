/*
  Warnings:

  - A unique constraint covering the columns `[Id]` on the table `Role` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Role_Id_key" ON "Role"("Id");
