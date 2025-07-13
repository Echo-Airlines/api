-- CreateTable
CREATE TABLE "World" (
    "Id" UUID NOT NULL,
    "Name" VARCHAR NOT NULL,
    "Slug" VARCHAR NOT NULL,
    "Description" VARCHAR,
    "CreatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "World_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "World_Slug_key" ON "World"("Slug");
