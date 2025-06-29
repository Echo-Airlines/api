import { AppConfig, Livery } from "generated/prisma";

export type AppConfigWithLiveries = AppConfig & {
    liveries: Livery[];
}

export type AppConfigWithLiveriesDto = AppConfigWithLiveries;