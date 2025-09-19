-- CreateTable
CREATE TABLE "public"."Notification" (
    "Id" UUID NOT NULL,
    "CompanyId" UUID NOT NULL,
    "DiscordMessageSent" BOOLEAN NOT NULL DEFAULT false,
    "IsRead" BOOLEAN NOT NULL DEFAULT false,
    "IsNotification" BOOLEAN NOT NULL DEFAULT false,
    "ZuluEventTime" TIMESTAMP(6),
    "DiscordMessageSentAt" TIMESTAMP(6),
    "DiscordMessageId" UUID,
    "Category" INTEGER NOT NULL DEFAULT 0,
    "Action" INTEGER NOT NULL DEFAULT 0,
    "Description" VARCHAR NOT NULL,
    "CreatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Notification_Id_key" ON "public"."Notification"("Id");

-- AddForeignKey
ALTER TABLE "public"."Notification" ADD CONSTRAINT "Notification_CompanyId_fkey" FOREIGN KEY ("CompanyId") REFERENCES "public"."VirtualAirline"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Notification" ADD CONSTRAINT "Notification_DiscordMessageId_fkey" FOREIGN KEY ("DiscordMessageId") REFERENCES "public"."DiscordMessage"("Id") ON DELETE SET NULL ON UPDATE CASCADE;
