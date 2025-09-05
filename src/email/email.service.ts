import { Injectable, Logger } from '@nestjs/common';
import { ISendMailOptions, MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { UserService } from '@user/user.service';
import { CreateEmailDto } from './create-email.dto';

export interface ISentMessageInfo { }

@Injectable()
export class EmailService {
    private readonly log = new Logger(EmailService.name);

    private readonly credentials: {
        host: string;
        port: number;
        user: string;
        pass: string;
    };
    
    constructor(
        private readonly mailerService: MailerService,
        private readonly configService: ConfigService,
    ) { 
        this.credentials = {
            host: this.configService.get<string>('MAIL_HOST') || '',
            port: this.configService.get<number>('MAIL_PORT') || 587,
            user: this.configService.get<string>('MAIL_USERNAME') || '',
            pass: this.configService.get<string>('MAIL_PASSWORD') || '',
        };
    }

    private sendingEmails = false;

    private async _send(mail: ISendMailOptions): Promise<ISentMessageInfo> {
        try {
            const opts: ISendMailOptions = {
                from: this.configService.get<string>('MAIL_FROM'),
                to: mail.to,
                bcc: this.configService.get<string>('MAIL_BCC_ADDRESS'),
                subject: mail.subject,
                template: mail.template,
                context: mail.context,
            };

            const results: ISentMessageInfo = await this.mailerService.sendMail(opts);

            return results;
        } catch (error) {
            this.log.error(`Failed to send email: ${error.message}`);
            throw new Error(`Failed to send email: ${error.message}`);
        }
    }

    // send welcome email
    public async sendWelcomeEmail(
        mail: CreateEmailDto,
    ): Promise<ISentMessageInfo> {
        this.log.debug(`Sending ${mail.template} email to ${mail.to}`);

        const opts: ISendMailOptions = {
            to: mail.to,
            subject: mail.subject || 'Welcome to our club!',
            template: mail.template || 'welcome',
            context: mail.context,
        };

        const results: ISentMessageInfo = await this._send(opts);

        return results;
    }

    public async sendResetPasswordEmail(
        mail: CreateEmailDto,
    ): Promise<ISentMessageInfo> {
        this.log.debug(`Sending reset password email to ${mail.to}`);

        const opts: ISendMailOptions = {
            to: mail.to,
            subject: mail.subject || 'Reset your password',
            template: mail.template || 'reset-password',
            context: mail.context,
        };

        const results: ISentMessageInfo = await this._send(opts);

        return results;
    }
}