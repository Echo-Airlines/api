-- CreateTable
CREATE TABLE "public"."LiveryImage" (
    "Id" UUID NOT NULL,
    "LiveryId" UUID NOT NULL,
    "Name" VARCHAR NOT NULL,
    "Type" VARCHAR NOT NULL,
    "Path" VARCHAR NOT NULL,
    "Size" INTEGER NOT NULL,
    "MimeType" VARCHAR NOT NULL,
    "FileName" VARCHAR NOT NULL,
    "CreatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LiveryImage_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "public"."LiveryFile" (
    "Id" UUID NOT NULL,
    "LiveryId" UUID NOT NULL,
    "Name" VARCHAR NOT NULL,
    "Type" VARCHAR NOT NULL,
    "Path" VARCHAR NOT NULL,
    "Size" INTEGER NOT NULL,
    "MimeType" VARCHAR NOT NULL,
    "FileName" VARCHAR NOT NULL,
    "CreatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LiveryFile_pkey" PRIMARY KEY ("Id")
);

-- AddForeignKey
ALTER TABLE "public"."LiveryImage" ADD CONSTRAINT "LiveryImage_LiveryId_fkey" FOREIGN KEY ("LiveryId") REFERENCES "public"."Livery"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."LiveryFile" ADD CONSTRAINT "LiveryFile_LiveryId_fkey" FOREIGN KEY ("LiveryId") REFERENCES "public"."Livery"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
