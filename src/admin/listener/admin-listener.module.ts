import { Module } from '@nestjs/common';
import { AdminListenerService } from './admin-listener.service';
import { AdminListenerController } from './admin-listener.controller';
import { DatabaseModule } from '@database/database.module';
import { ListenerModule } from 'src/listener/listener.module';

@Module({
  imports: [DatabaseModule, ListenerModule],
  providers: [AdminListenerService],
  controllers: [AdminListenerController],
  exports: [AdminListenerService],
})
export class AdminListenerModule {}
