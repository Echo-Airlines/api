import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { LoggerService } from './logger/logger.service';
import SeedData from '@seeder/SeederData';

const logger = new LoggerService('Main');

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
    logger: logger,  
  });

  const config = app.get(ConfigService);

  const frontendUrl: string = config.get<string>('FRONTEND_URL') || 'http://localhost:5173';
  const apiHost: string = config.get<string>('API_HOST') || 'localhost';
  const apiPort: number = config.get<number>('API_PORT') || 3000;
  const apiPrefix: string = config.get<string>('API_PREFIX') || '';

  app.enableCors({
    origin: frontendUrl,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  app.setGlobalPrefix(apiPrefix);
  await app.listen(apiPort, apiHost);

  return {
    app,
    apiBaseUrl: `http://${apiHost}:${apiPort}/${apiPrefix}`
  }
}

bootstrap()
.then(({ app, apiBaseUrl}) => {  
setTimeout(() => {
  const admingUser = SeedData.users[0].Username;
  const adminPassword = SeedData.users[0].Password;
  logger.printStartupBanner(apiBaseUrl, admingUser, adminPassword);
}, 500);
});