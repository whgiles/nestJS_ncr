import { Module } from '@nestjs/common';
import { CatalogModule } from './catalog/catalog.module';
import { DomainModule } from './domain/domain.module';
import { ApiModule } from './api/api.module';
import { CatalogController } from './catalog/catalog.controller';

@Module({
  imports: [CatalogModule, DomainModule, ApiModule],
  controllers: [CatalogController],
  providers: [],
})
export class AppModule {}
