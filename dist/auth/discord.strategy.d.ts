import { Strategy } from 'passport-discord';
import { AuthService } from './auth.service';
import { AppConfigService } from '../app-config/app-config.service';
declare const DiscordStrategy_base: new (...args: [options: Strategy.StrategyOptionsWithRequest] | [options: Strategy.StrategyOptions] | [options: Strategy.StrategyOptions] | [options: Strategy.StrategyOptionsWithRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class DiscordStrategy extends DiscordStrategy_base {
    private authService;
    private appConfigService;
    constructor(authService: AuthService, appConfigService: AppConfigService);
    validate(accessToken: string, refreshToken: string, profile: any, done: any): Promise<any>;
}
export {};
