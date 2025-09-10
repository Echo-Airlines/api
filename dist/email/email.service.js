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
var EmailService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
const common_1 = require("@nestjs/common");
const mailer_1 = require("@nestjs-modules/mailer");
const config_1 = require("@nestjs/config");
let EmailService = EmailService_1 = class EmailService {
    mailerService;
    configService;
    log = new common_1.Logger(EmailService_1.name);
    credentials;
    constructor(mailerService, configService) {
        this.mailerService = mailerService;
        this.configService = configService;
        this.credentials = {
            host: this.configService.get('MAIL_HOST') || '',
            port: this.configService.get('MAIL_PORT') || 587,
            user: this.configService.get('MAIL_USERNAME') || '',
            pass: this.configService.get('MAIL_PASSWORD') || '',
        };
    }
    sendingEmails = false;
    async _send(mail) {
        try {
            const opts = {
                from: this.configService.get('MAIL_FROM'),
                to: mail.to,
                bcc: this.configService.get('MAIL_BCC_ADDRESS'),
                subject: mail.subject,
                template: mail.template,
                context: mail.context,
            };
            const results = await this.mailerService.sendMail(opts);
            return results;
        }
        catch (error) {
            this.log.error(`Failed to send email: ${error.message}`);
            throw new Error(`Failed to send email: ${error.message}`);
        }
    }
    async sendForgotPasswordEmail(mail) {
        this.log.debug(`Sending forgot password email to ${mail.to}`);
        const opts = {
            to: mail.to,
            subject: mail.subject || 'Forgot Password',
            template: mail.template || 'forgot-password',
            context: mail.context,
        };
        const results = await this._send(opts);
        return results;
    }
    async sendWelcomeEmail(mail) {
        this.log.debug(`Sending ${mail.template} email to ${mail.to}`);
        const opts = {
            to: mail.to,
            subject: mail.subject || 'Welcome to our club!',
            template: mail.template || 'welcome',
            context: mail.context,
        };
        const results = await this._send(opts);
        return results;
    }
    async sendResetPasswordEmail(mail) {
        this.log.debug(`Sending reset password email to ${mail.to}`);
        const opts = {
            to: mail.to,
            subject: mail.subject || 'Reset your password',
            template: mail.template || 'reset-password',
            context: mail.context,
        };
        const results = await this._send(opts);
        return results;
    }
};
exports.EmailService = EmailService;
exports.EmailService = EmailService = EmailService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mailer_1.MailerService,
        config_1.ConfigService])
], EmailService);
//# sourceMappingURL=email.service.js.map