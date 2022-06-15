import { Module } from '@nestjs/common';
import { CatalogService } from 'src/domain/domain.catalog/catalog.service';
import { CatalogController } from './catalog.controller';
import { DomainCatalogModule } from 'src/domain/domain.catalog/catalog.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [CatalogController],
  imports: [DomainCatalogModule, HttpModule],
})
export class ApiCatalogModule {}
