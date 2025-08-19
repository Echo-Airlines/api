-- CreateTable
CREATE TABLE "public"."DiscordMessage" (
    "Id" UUID NOT NULL,
    "ChannelId" VARCHAR NOT NULL,
    "MessageId" VARCHAR NOT NULL,
    "Content" VARCHAR NOT NULL,
    "DiscordMessageTypeId" INTEGER NOT NULL,
    "DiscordChannelWebhookId" UUID,
    "CreatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DiscordMessage_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "public"."DiscordMessageType" (
    "Id" SERIAL NOT NULL,
    "Name" VARCHAR NOT NULL,
    "Description" VARCHAR,
    "Slug" VARCHAR NOT NULL,
    "CreatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DiscordMessageType_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "public"."DiscordChannelWebhook" (
    "Id" UUID NOT NULL,
    "ChannelId" VARCHAR NOT NULL,
    "WebhookUrl" VARCHAR NOT NULL,
    "IsActive" BOOLEAN NOT NULL DEFAULT true,
    "CreatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DiscordChannelWebhook_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "public"."FSHubEvent" (
    "Id" SERIAL NOT NULL,
    "Variant" VARCHAR NOT NULL,
    "Type" VARCHAR NOT NULL,
    "SentAt" TIMESTAMP(6) NOT NULL,
    "Data" JSONB,
    "DiscordMessageId" UUID,
    "CreatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FSHubEvent_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DiscordMessage_Id_key" ON "public"."DiscordMessage"("Id");

-- CreateIndex
CREATE UNIQUE INDEX "DiscordMessageType_Id_key" ON "public"."DiscordMessageType"("Id");

-- CreateIndex
CREATE UNIQUE INDEX "DiscordMessageType_Slug_key" ON "public"."DiscordMessageType"("Slug");

-- CreateIndex
CREATE UNIQUE INDEX "DiscordChannelWebhook_Id_key" ON "public"."DiscordChannelWebhook"("Id");

-- CreateIndex
CREATE UNIQUE INDEX "FSHubEvent_Id_key" ON "public"."FSHubEvent"("Id");

-- AddForeignKey
ALTER TABLE "public"."DiscordMessage" ADD CONSTRAINT "DiscordMessage_DiscordMessageTypeId_fkey" FOREIGN KEY ("DiscordMessageTypeId") REFERENCES "public"."DiscordMessageType"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."DiscordMessage" ADD CONSTRAINT "DiscordMessage_DiscordChannelWebhookId_fkey" FOREIGN KEY ("DiscordChannelWebhookId") REFERENCES "public"."DiscordChannelWebhook"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."FSHubEvent" ADD CONSTRAINT "FSHubEvent_DiscordMessageId_fkey" FOREIGN KEY ("DiscordMessageId") REFERENCES "public"."DiscordMessage"("Id") ON DELETE SET NULL ON UPDATE CASCADE;
