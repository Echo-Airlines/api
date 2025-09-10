"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("@nestjs/config");
const logger_service_1 = require("./logger/logger.service");
const logger = new logger_service_1.LoggerService('Main');
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        bufferLogs: true,
        logger: logger,
    });
    const config = app.get(config_1.ConfigService);
    const frontendUrl = config.get('FRONTEND_URL') || 'http://localhost:5173';
    const apiHost = config.get('API_HOST') || 'localhost';
    const apiPort = config.get('API_PORT') || 3000;
    const apiPrefix = config.get('API_PREFIX') || '';
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
    };
}
bootstrap()
    .then(({ app, apiBaseUrl }) => {
    setTimeout(() => {
        logger.printStartupBanner(apiBaseUrl);
    }, 500);
});
//# sourceMappingURL=main.js.map