import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-discord';
import { AuthService } from './auth.service';
import { AppConfigService } from '../app-config/app-config.service';

@Injectable()
export class DiscordStrategy extends PassportStrategy(Strategy, 'discord') {
  constructor(
    private authService: AuthService,
    private appConfigService: AppConfigService,
  ) {
    super({
      clientID: process.env.DISCORD_CLIENT_ID || '',
      clientSecret: process.env.DISCORD_CLIENT_SECRET || '',
      callbackURL: process.env.DISCORD_CALLBACK_URL || '',
      scope: ['identify', 'email'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any, done: any) {
    try {
      // Get Discord configuration from database
      const appConfig = await this.appConfigService.getLatest();
      
      if (!appConfig?.DiscordAuthEnabled) {
        return done(new Error('Discord authentication is not enabled'), false);
      }

      const { id, username, email, avatar } = profile;
      
      // Check if user exists by Discord ID
      let user = await this.authService.findUserByDiscordId(id);
      
      if (!user) {
        if (!appConfig.DiscordAuthCreateUser) {
          throw new Error('User not found and Discord auth create user is disabled');
        }

        // Create new user with Discord info
        user = await this.authService.createUserFromDiscord({
          discordId: id,
          discordUsername: username,
          discordEmail: email,
          discordAvatar: avatar,
        });
      } else {
        // Update existing user's Discord info
        user = await this.authService.updateUserDiscordInfo(user.Id, {
          discordUsername: username,
          discordEmail: email,
          discordAvatar: avatar,
        });
      }

      return done(null, user);
    } catch (error) {
      return done(error, false);
    }
  }
} 