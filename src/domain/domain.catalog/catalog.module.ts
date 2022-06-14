import { Module } from '@nestjs/common';
import { TempCatalogItemRepository } from 'src/data/repositories/catalogItem.repository';
import { RepositoriesModule } from 'src/data/repositories/repositories.module';
import { CatalogService } from './catalog.service';

@Module({
  providers: [CatalogService],
  exports: [CatalogService],
  imports: [RepositoriesModule],
})
export class DomainCatalogModule {}
