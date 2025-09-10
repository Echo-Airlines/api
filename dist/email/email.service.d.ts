import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { CreateEmailDto } from './create-email.dto';
export interface ISentMessageInfo {
}
export declare class EmailService {
    private readonly mailerService;
    private readonly configService;
    private readonly log;
    private readonly credentials;
    constructor(mailerService: MailerService, configService: ConfigService);
    private sendingEmails;
    private _send;
    sendForgotPasswordEmail(mail: CreateEmailDto): Promise<ISentMessageInfo>;
    sendWelcomeEmail(mail: CreateEmailDto): Promise<ISentMessageInfo>;
    sendResetPasswordEmail(mail: CreateEmailDto): Promise<ISentMessageInfo>;
}
