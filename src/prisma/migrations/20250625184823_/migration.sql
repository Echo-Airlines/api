-- CreateTable
CREATE TABLE "AppConfig" (
    "Id" SERIAL NOT NULL,
    "OnAirSyncEnabled" BOOLEAN NOT NULL DEFAULT false,
    "OnAirVASyncEnabled" BOOLEAN NOT NULL DEFAULT false,
    "OnAirVAMembersSyncEnabled" BOOLEAN NOT NULL DEFAULT false,
    "OnAirCompanySyncEnabled" BOOLEAN NOT NULL DEFAULT false,
    "VirtualAirlineId" UUID,
    "ApiKey" UUID,
    "DiscordServerInviteLink" VARCHAR,
    "DiscordServerInviteLinkEnabled" BOOLEAN NOT NULL DEFAULT false,
    "AcceptingNewMembers" BOOLEAN NOT NULL DEFAULT false,
    "DiscordAuthEnabled" BOOLEAN NOT NULL DEFAULT false,
    "LocalAuthEnabled" BOOLEAN NOT NULL DEFAULT true,
    "CreatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AppConfig_pkey" PRIMARY KEY ("Id")
);
