import { Module } from '@nestjs/common';
import { FSHubService } from './fshub.service';
import { AppConfigModule } from '@app-config/app-config.module';

@Module({
  imports: [AppConfigModule],
  providers: [FSHubService],
  exports: [FSHubService]
})
export class FSHubModule {}
