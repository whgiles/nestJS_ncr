import { Module } from '@nestjs/common';
import { CatalogModule } from './catalog/catalog.module';
import { DomainModule } from './domain/domain.module';

@Module({
  imports: [CatalogModule, DomainModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
