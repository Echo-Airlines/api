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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListenerController = void 0;
const common_1 = require("@nestjs/common");
const listener_service_1 = require("./listener.service");
let ListenerController = class ListenerController {
    listenerService;
    constructor(listenerService) {
        this.listenerService = listenerService;
    }
    async sendEvent(body, token, senderSlug) {
        const sender = await this.listenerService.getSenderBySlug(senderSlug);
        if (!sender) {
            throw new common_1.NotFoundException('Sender not found');
        }
        if (sender.Token !== token) {
            throw new common_1.BadRequestException('Invalid token');
        }
        if (!sender.IsActive) {
            throw new common_1.BadRequestException('Sender is not active');
        }
        let listenerEvent = undefined;
        switch (sender.Slug) {
            case 'fshub':
                listenerEvent = await this.listenerService.processListenerEvent(sender, body);
                break;
            default:
                throw new common_1.BadRequestException('Invalid sender');
        }
        return {
            success: true,
            message: 'Listener event created',
            listenerEvent: listenerEvent || null
        };
    }
};
exports.ListenerController = ListenerController;
__decorate([
    (0, common_1.Post)(':senderSlug'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)('token')),
    __param(2, (0, common_1.Param)('senderSlug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", Promise)
], ListenerController.prototype, "sendEvent", null);
exports.ListenerController = ListenerController = __decorate([
    (0, common_1.Controller)('listener'),
    __metadata("design:paramtypes", [listener_service_1.ListenerService])
], ListenerController);
//# sourceMappingURL=listener.controller.js.map