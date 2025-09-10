import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { LoggerService } from '@logger/logger.service';

@WebSocketGateway({
  transports: ['websocket', 'polling'],
  addTrailingSlash: false,
  namespace: '/ws',
})
export class WebsocketGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  private readonly logger = new LoggerService(WebsocketGateway.name);

  afterInit(server: Server) {
    this.logger.log('WebSocket Gateway initialized');
  }

  handleConnection(client: Socket) {
    this.logger.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('join')
  handleJoin(client: Socket, payload: string) {
    this.logger.log(`Client ${client.id} joined: ${payload}`);
    client.join(payload);
    return { event: 'joined', room: payload };
  }

  @SubscribeMessage('leave')
  handleLeave(client: Socket, payload: string) {
    this.logger.log(`Client ${client.id} left: ${payload}`);
    client.leave(payload);
    return { event: 'left', room: payload };
  }

  // Method to emit events to all connected clients
  emitEvent(eventType: string, data: any) {
    this.server.emit('listener-event', {
      type: eventType,
      data: data,
      timestamp: new Date().toISOString(),
    });
  }

  // Method to emit events to specific room
  emitEventToRoom(room: string, eventType: string, data: any) {
    this.server.to(room).emit('listener-event', {
      type: eventType,
      data: data,
      timestamp: new Date().toISOString(),
    });
  }
}
