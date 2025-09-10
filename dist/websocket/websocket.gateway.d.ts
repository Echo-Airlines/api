import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
export declare class WebsocketGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    server: Server;
    private readonly logger;
    afterInit(server: Server): void;
    handleConnection(client: Socket): void;
    handleDisconnect(client: Socket): void;
    handleJoin(client: Socket, payload: string): {
        event: string;
        room: string;
    };
    handleLeave(client: Socket, payload: string): {
        event: string;
        room: string;
    };
    emitEvent(eventType: string, data: any): void;
    emitEventToRoom(room: string, eventType: string, data: any): void;
}
