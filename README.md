# Echo Airlines API v2

A comprehensive NestJS-based REST API for managing virtual airline operations, flight tracking, and Discord integration.

## 🚀 Features

- **Virtual Airline Management** - Complete VA operations with member management
- **Flight Tracking** - Integration with OnAir and FSHub APIs for real-time flight data
- **Discord Integration** - OAuth2 authentication and webhook messaging system
- **User Management** - Role-based access control with Discord and local authentication
- **Job Scheduling** - Background task processing with BullMQ
- **Database Management** - PostgreSQL with Prisma ORM
- **Real-time Notifications** - Event-driven notification system

## 🏗️ Architecture

Built with modern technologies and best practices:

- **Framework**: NestJS 11 (Node.js)
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT, Discord OAuth2, Local authentication
- **Job Queue**: BullMQ with Redis
- **API Integration**: OnAir API, FSHub API
- **Validation**: Class-validator with DTOs
- **Testing**: Jest for unit and e2e tests

## 📋 Prerequisites

- Node.js 18+ 
- PostgreSQL database
- Redis (for job queue)
- Discord Developer Application (for OAuth2)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd api-v2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment setup**
   ```bash
   cp sample.env .env
   # Edit .env with your configuration
   ```

4. **Database setup**
   ```bash
   # Generate Prisma client
   npx prisma generate
   
   # Run migrations
   npx prisma migrate dev
   
   # Seed database with base data
   npm run prisma:seed
   ```

5. **Start the application**
   ```bash
   # Development
   npm run start:dev
   
   # Production build
   npm run build
   npm run start:prod
   ```

## ⚙️ Configuration

### Environment Variables

Key environment variables (see `sample.env` for complete list):

```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/database

# API Configuration
API_HOST=localhost
API_PORT=3001
API_PREFIX=api

# Discord OAuth2
DISCORD_CLIENT_ID=your_discord_client_id
DISCORD_CLIENT_SECRET=your_discord_client_secret
DISCORD_CALLBACK_URL=http://localhost:3001/api/auth/discord/callback

# OnAir Integration
ONAIRAPIKEY=your_onair_api_key
ONAIRVIRTUALAIRLINEID=your_va_id

# Frontend URLs
FRONTEND_URL=https://www.echoairlines.com
```

### Discord Setup

For Discord OAuth2 authentication setup, see [DISCORD_AUTH_SETUP.md](./DISCORD_AUTH_SETUP.md).

## 🗄️ Database Schema

The API uses PostgreSQL with the following main entities:

- **Users** - User accounts with role-based permissions
- **Virtual Airlines** - VA information and configuration
- **Members** - VA membership and roles
- **Flights** - Flight tracking and statistics
- **Aircraft** - Fleet management
- **Airports** - Airport database
- **Discord Integration** - Webhooks, message templates, events
- **Jobs** - Background task management

## 📡 API Endpoints

### Core Modules

- **`/api/auth`** - Authentication (Discord OAuth2, Local)
- **`/api/users`** - User management
- **`/api/admin`** - Administrative functions
- **`/api/va`** - Virtual airline operations
- **`/api/flights`** - Flight tracking
- **`/api/aircraft`** - Fleet management
- **`/api/airports`** - Airport information
- **`/api/discord`** - Discord integration
- **`/api/jobs`** - Job management

### Authentication Flow

1. **Discord OAuth2**: `/api/auth/discord` → Discord → Callback → JWT Token
2. **Local Auth**: `/api/auth/login` → Username/Password → JWT Token
3. **Protected Routes**: Include `Authorization: Bearer <token>` header

## 🔧 Development

### Available Scripts

```bash
# Development
npm run start:dev          # Start with watch mode
npm run start:debug        # Start with debug mode

# Building
npm run build              # Build for production
npm run start:prod         # Start production build

# Testing
npm run test               # Run unit tests
npm run test:watch         # Run tests in watch mode
npm run test:e2e           # Run end-to-end tests
npm run test:cov           # Run tests with coverage

# Code Quality
npm run lint               # Run ESLint
npm run format             # Format code with Prettier
```

### Project Structure

```
src/
├── admin/                 # Administrative functions
├── aircraft/              # Aircraft management
├── airport/               # Airport operations
├── auth/                  # Authentication system
├── discord/               # Discord integration
├── flight/                # Flight tracking
├── fshub/                 # FSHub API integration
├── jobs/                  # Background job processing
├── listener/              # Event listening system
├── member/                # VA membership management
├── on-air/                # OnAir API integration
├── prisma/                # Database client and utilities
├── user/                  # User management
├── virtual-airline/       # Virtual airline operations
└── app.module.ts          # Main application module
```

## 🧪 Testing

The project includes comprehensive testing setup:

- **Unit Tests**: Jest with NestJS testing utilities
- **E2E Tests**: End-to-end API testing
- **Coverage**: Code coverage reporting

Run tests with:
```bash
npm run test              # Unit tests
npm run test:e2e          # E2E tests
npm run test:cov          # Coverage report
```

## 🚀 Deployment

### Production Build

```bash
npm run build
npm run start:prod
```

### Docker (if applicable)

```bash
docker build -t echo-airlines-api .
docker run -p 3001:3001 echo-airlines-api
```

### Environment Considerations

- Set `NODE_ENV=production`
- Configure production database URLs
- Set secure JWT secrets
- Enable HTTPS in production
- Configure proper CORS settings

## 📊 Monitoring & Logging

- **Logging**: Structured logging with configurable levels
- **Job Monitoring**: BullMQ dashboard for background jobs
- **Health Checks**: Built-in health check endpoints

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## 📝 License

This project is private and proprietary to Echo Airlines.

## 🆘 Support

For support and questions:
- Check the [Discord Auth Setup Guide](./DISCORD_AUTH_SETUP.md)
- Review the API documentation
- Contact the development team

---

**Version**: 0.5.0  
**Last Updated**: 2024
