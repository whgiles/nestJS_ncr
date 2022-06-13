import { Module } from '@nestjs/common';
import { DomainModule } from './domain/domain.module';
import { ApiModule } from './api/api.module';
import { DataModule } from './data/data.module';

@Module({
  imports: [ApiModule, DomainModule, DataModule],
  providers: [],
})
export class AppModule {}
