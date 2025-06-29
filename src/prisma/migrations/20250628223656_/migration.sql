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
