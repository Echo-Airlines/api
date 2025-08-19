# Discord OAuth2 Authentication Setup

This guide explains how to set up Discord OAuth2 authentication for the Echo Airlines API.

## Prerequisites

1. A Discord application registered at https://discord.com/developers/applications
2. The application must have OAuth2 redirect URLs configured

## Setup Steps

### 1. Create a Discord Application

1. Go to https://discord.com/developers/applications
2. Click "New Application"
3. Give your application a name (e.g., "Echo Airlines")
4. Go to the "OAuth2" section in the left sidebar
5. Copy the "Client ID" and "Client Secret"

### 2. Configure OAuth2 Redirect URLs

1. In the OAuth2 section, add the following redirect URL:
   ```
   http://localhost:3001/api/auth/discord/callback
   ```
   (Replace with your actual domain in production)

2. Save the changes

### 3. Set Environment Variables

Add the following to your `.env` file:

```env
# Discord OAuth2 Configuration (fallback values)
DISCORD_CLIENT_ID=your_discord_client_id
DISCORD_CLIENT_SECRET=your_discord_client_secret
DISCORD_CALLBACK_URL=http://localhost:3001/api/auth/discord/callback
FRONTEND_URL=http://localhost:3000
```

### 4. Configure Discord Settings in Database

Use the API endpoints to configure Discord authentication:

#### Get current Discord config:
```bash
GET /api/config/discord
```

#### Update Discord config:
```bash
PUT /api/config/discord
Content-Type: application/json

{
  "DiscordClientId": "your_discord_client_id",
  "DiscordClientSecret": "your_discord_client_secret", 
  "DiscordCallbackUrl": "http://localhost:3001/api/auth/discord/callback",
  "DiscordAuthEnabled": true
}
```

### 5. Test the Authentication Flow

1. Navigate to `/api/auth/discord` to initiate Discord OAuth2 flow
2. You'll be redirected to Discord for authorization
3. After authorization, you'll be redirected back to your frontend with a JWT token

## API Endpoints

### Authentication Endpoints

- `GET /api/auth/discord` - Initiate Discord OAuth2 flow
- `GET /api/auth/discord/callback` - Handle Discord OAuth2 callback

### Configuration Endpoints

- `GET /api/config/discord` - Get Discord configuration (public info only)
- `PUT /api/config/discord` - Update Discord configuration

## Security Notes

- The Discord client secret is stored in the database and should be encrypted in production
- The callback URL must match exactly what's configured in your Discord application
- Users created via Discord OAuth2 are automatically verified and have `FirstLoginCompleted` set to true
- Discord users don't have passwords set (Password field is null)

## Frontend Integration

After successful Discord authentication, the user will be redirected to:
```
{FRONTEND_URL}/auth/callback?token={jwt_token}
```

Your frontend should:
1. Extract the JWT token from the URL
2. Store the token (localStorage, cookies, etc.)
3. Use the token for authenticated API requests

## Troubleshooting

### Common Issues

1. **"Discord authentication is not enabled"** - Make sure `DiscordAuthEnabled` is set to `true` in the database
2. **"Invalid redirect URI"** - Ensure the callback URL in your Discord app matches exactly
3. **"Client ID or secret is invalid"** - Verify your Discord application credentials

### Debug Mode

Enable debug logging by setting the log level to include debug messages in your environment configuration. 