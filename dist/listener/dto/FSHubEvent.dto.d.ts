import { ListenerEvent } from "prisma/generated/prisma";
export declare class FSHubEventDto {
    _variant: string;
    _type: string;
    _sent: number;
    _data: any;
    resend?: boolean;
    event?: ListenerEvent;
    data?: any;
}
