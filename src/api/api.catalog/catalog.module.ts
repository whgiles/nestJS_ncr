import { Module } from '@nestjs/common';
import { CatalogService } from 'src/domain/domain.catalog/catalog.service';
import { CatalogController } from './catalog.controller';
import { DomainCatalogModule } from 'src/domain/domain.catalog/catalog.module';

@Module({
  controllers: [CatalogController],
  imports: [DomainCatalogModule],
})
export class ApiCatalogModule {}
