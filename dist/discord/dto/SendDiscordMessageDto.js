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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordMessageEmbedFieldDto = exports.DiscordMessageEmbedAuthorDto = exports.DiscordMessageEmbedImageDto = exports.DiscordMessageEmbedDto = exports.DiscordMessageFooterDto = exports.SendDiscordMessageDto = void 0;
const class_validator_1 = require("class-validator");
class SendDiscordMessageDto {
    content;
    username;
    avatar_url;
    tts;
    embeds;
    footer;
}
exports.SendDiscordMessageDto = SendDiscordMessageDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], SendDiscordMessageDto.prototype, "content", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SendDiscordMessageDto.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SendDiscordMessageDto.prototype, "avatar_url", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], SendDiscordMessageDto.prototype, "tts", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], SendDiscordMessageDto.prototype, "embeds", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", DiscordMessageFooterDto)
], SendDiscordMessageDto.prototype, "footer", void 0);
class DiscordMessageFooterDto {
    text;
    icon_url;
}
exports.DiscordMessageFooterDto = DiscordMessageFooterDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DiscordMessageFooterDto.prototype, "text", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DiscordMessageFooterDto.prototype, "icon_url", void 0);
class DiscordMessageEmbedDto {
    title;
    type;
    description;
    url;
    timestamp;
    color;
    footer;
    image;
    thumbnail;
    author;
    fields;
}
exports.DiscordMessageEmbedDto = DiscordMessageEmbedDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DiscordMessageEmbedDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DiscordMessageEmbedDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DiscordMessageEmbedDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DiscordMessageEmbedDto.prototype, "url", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DiscordMessageEmbedDto.prototype, "timestamp", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], DiscordMessageEmbedDto.prototype, "color", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", DiscordMessageFooterDto)
], DiscordMessageEmbedDto.prototype, "footer", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", DiscordMessageEmbedImageDto)
], DiscordMessageEmbedDto.prototype, "image", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DiscordMessageEmbedDto.prototype, "thumbnail", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", DiscordMessageEmbedAuthorDto)
], DiscordMessageEmbedDto.prototype, "author", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Array)
], DiscordMessageEmbedDto.prototype, "fields", void 0);
class DiscordMessageEmbedImageDto {
    url;
}
exports.DiscordMessageEmbedImageDto = DiscordMessageEmbedImageDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DiscordMessageEmbedImageDto.prototype, "url", void 0);
class DiscordMessageEmbedAuthorDto {
    name;
    icon_url;
}
exports.DiscordMessageEmbedAuthorDto = DiscordMessageEmbedAuthorDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DiscordMessageEmbedAuthorDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DiscordMessageEmbedAuthorDto.prototype, "icon_url", void 0);
class DiscordMessageEmbedFieldDto {
    name;
    value;
    inline;
}
exports.DiscordMessageEmbedFieldDto = DiscordMessageEmbedFieldDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DiscordMessageEmbedFieldDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DiscordMessageEmbedFieldDto.prototype, "value", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], DiscordMessageEmbedFieldDto.prototype, "inline", void 0);
//# sourceMappingURL=SendDiscordMessageDto.js.map