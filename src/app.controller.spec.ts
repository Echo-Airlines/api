import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let controller: AppController;
  let service: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    controller = module.get<AppController>(AppController);
    service = module.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      expect(controller.getHello()).toBe('Hello World!');
    });

    it('should call AppService.getHello', () => {
      const spy = jest.spyOn(service, 'getHello');
      controller.getHello();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('getHealth', () => {
    it('should return health status information', () => {
      const health = controller.getHealth();
      
      expect(health).toBeDefined();
      expect(health.status).toBe('healthy');
      expect(health.timestamp).toBeDefined();
      expect(health.uptime).toBeDefined();
      expect(health.environment).toBeDefined();
      expect(health.version).toBeDefined();
    });

    it('should call AppService.getHealth', () => {
      const spy = jest.spyOn(service, 'getHealth');
      controller.getHealth();
      expect(spy).toHaveBeenCalled();
    });

    it('should return valid health data structure', () => {
      const health = controller.getHealth();
      
      // Check all required fields exist
      expect(health).toHaveProperty('status');
      expect(health).toHaveProperty('timestamp');
      expect(health).toHaveProperty('uptime');
      expect(health).toHaveProperty('environment');
      expect(health).toHaveProperty('version');
      
      // Check no extra fields
      const expectedKeys = ['status', 'timestamp', 'uptime', 'environment', 'version'];
      expect(Object.keys(health)).toEqual(expect.arrayContaining(expectedKeys));
      expect(Object.keys(health).length).toBe(expectedKeys.length);
    });
  });
});
