/*
  Warnings:

  - A unique constraint covering the columns `[Id]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "UserPrivacySettings" (
    "Id" UUID NOT NULL,
    "UserId" UUID NOT NULL,
    "ShowOnlineStatus" BOOLEAN NOT NULL DEFAULT true,
    "ShowFirstName" BOOLEAN NOT NULL DEFAULT false,
    "ShowLastNameInitial" BOOLEAN NOT NULL DEFAULT false,
    "ShowLastLogin" TIMESTAMP(6),
    "ShowLastLogout" TIMESTAMP(6),
    "ShowLastActivity" TIMESTAMP(6),
    "CreatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserPrivacySettings_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserPrivacySettings_Id_key" ON "UserPrivacySettings"("Id");

-- CreateIndex
CREATE UNIQUE INDEX "UserPrivacySettings_UserId_key" ON "UserPrivacySettings"("UserId");

-- CreateIndex
CREATE UNIQUE INDEX "User_Id_key" ON "User"("Id");

-- AddForeignKey
ALTER TABLE "UserPrivacySettings" ADD CONSTRAINT "UserPrivacySettings_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
