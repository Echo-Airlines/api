"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var WebsocketGateway_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebsocketGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const logger_service_1 = require("../logger/logger.service");
let WebsocketGateway = WebsocketGateway_1 = class WebsocketGateway {
    server;
    logger = new logger_service_1.LoggerService(WebsocketGateway_1.name);
    afterInit(server) {
        this.logger.log('WebSocket Gateway initialized');
    }
    handleConnection(client) {
        this.logger.log(`Client connected: ${client.id}`);
    }
    handleDisconnect(client) {
        this.logger.log(`Client disconnected: ${client.id}`);
    }
    handleJoin(client, payload) {
        this.logger.log(`Client ${client.id} joined: ${payload}`);
        client.join(payload);
        return { event: 'joined', room: payload };
    }
    handleLeave(client, payload) {
        this.logger.log(`Client ${client.id} left: ${payload}`);
        client.leave(payload);
        return { event: 'left', room: payload };
    }
    emitEvent(eventType, data) {
        this.server.emit('listener-event', {
            type: eventType,
            data: data,
            timestamp: new Date().toISOString(),
        });
    }
    emitEventToRoom(room, eventType, data) {
        this.server.to(room).emit('listener-event', {
            type: eventType,
            data: data,
            timestamp: new Date().toISOString(),
        });
    }
};
exports.WebsocketGateway = WebsocketGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], WebsocketGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('join'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, String]),
    __metadata("design:returntype", void 0)
], WebsocketGateway.prototype, "handleJoin", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('leave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, String]),
    __metadata("design:returntype", void 0)
], WebsocketGateway.prototype, "handleLeave", null);
exports.WebsocketGateway = WebsocketGateway = WebsocketGateway_1 = __decorate([
    (0, websockets_1.WebSocketGateway)({
        transports: ['websocket', 'polling'],
        addTrailingSlash: false,
        namespace: '/ws',
    })
], WebsocketGateway);
//# sourceMappingURL=websocket.gateway.js.map