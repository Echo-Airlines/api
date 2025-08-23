import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = module.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      expect(service.getHello()).toBe('Hello World!');
    });
  });

  describe('getHealth', () => {
    it('should return health status information', () => {
      const health = service.getHealth();
      
      expect(health).toBeDefined();
      expect(health.status).toBe('healthy');
      expect(health.timestamp).toBeDefined();
      expect(health.uptime).toBeDefined();
      expect(health.environment).toBeDefined();
      expect(health.version).toBeDefined();
    });

    it('should return correct data types', () => {
      const health = service.getHealth();
      
      expect(typeof health.status).toBe('string');
      expect(typeof health.timestamp).toBe('string');
      expect(typeof health.uptime).toBe('number');
      expect(typeof health.environment).toBe('string');
      expect(typeof health.version).toBe('string');
    });

    it('should return valid timestamp format', () => {
      const health = service.getHealth();
      const timestamp = new Date(health.timestamp);
      
      expect(timestamp.getTime()).not.toBeNaN();
      expect(timestamp).toBeInstanceOf(Date);
    });

    it('should return positive uptime', () => {
      const health = service.getHealth();
      
      expect(health.uptime).toBeGreaterThanOrEqual(0);
    });

    it('should return environment as string', () => {
      const health = service.getHealth();
      
      expect(health.environment).toBeTruthy();
      expect(health.environment.length).toBeGreaterThan(0);
    });

    it('should return version as string', () => {
      const health = service.getHealth();
      
      expect(health.version).toBeTruthy();
      expect(health.version.length).toBeGreaterThan(0);
    });
  });
});
