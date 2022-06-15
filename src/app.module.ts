import { Module } from '@nestjs/common';
import { DomainModule } from './domain/domain.module';
import { ApiModule } from './api/api.module';
import { DataModule } from './data/data.module';
import { UtilsModule } from './utils/utils.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ApiModule,
    DomainModule,
    DataModule,
    UtilsModule,
    ConfigModule.forRoot(),
  ],
  providers: [],
})
export class AppModule {}
