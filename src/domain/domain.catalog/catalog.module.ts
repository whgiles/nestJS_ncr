import { Module } from '@nestjs/common';
import { RepositoriesModule } from 'src/data/repositories/repositories.module';
import { UtilsModule } from 'src/utils/utils.module';
import { CatalogService } from './catalog.service';

@Module({
  providers: [CatalogService],
  exports: [CatalogService],
  imports: [RepositoriesModule, UtilsModule],
})
export class DomainCatalogModule {}
