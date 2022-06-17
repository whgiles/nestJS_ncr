import { Module } from '@nestjs/common';
import { DomainModule } from './domain/domain.module';
import { ApiModule } from './api/api.module';
import { DataModule } from './data/data.module';
import { UtilsModule } from './utils/utils.module';
import { ConfigModule } from '@nestjs/config';
import { AutomapperModule } from 'nestjsx-automapper';
import { BSLClient } from './utils/BSL/BSLClient.util';
import './mappingProfiles/BaseMappingProfile';

@Module({
  imports: [
    ApiModule,
    DomainModule,
    DataModule,
    UtilsModule,
    ConfigModule.forRoot(),
    AutomapperModule.withMapper(),
  ],
  providers: [BSLClient],
})
export class AppModule {}
