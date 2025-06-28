import { AppConfig, Livery } from "generated/prisma";

export type AppConfigWithLiveries = AppConfig & {
    liveries: Livery[];
}

export class AppConfigWithLiveriesDto { 
    appConfig?: AppConfig|null;
    liveries: Livery[];

    constructor(appConfig?: AppConfig|null, liveries?: Livery[]) {
        this.appConfig = appConfig ?? null;
        this.liveries = liveries?.map(livery => ({
            ...livery,
            DownloadUrl: livery.DownloadUrl ? `${process.env.API_URL}/config/liveries/${livery.Id}/download` : null
        })) ?? [];
    }
}