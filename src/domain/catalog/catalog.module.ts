import { Module } from '@nestjs/common';
import { CatalogService } from './catalog.service';

@Module({
  providers: [CatalogService],
  exports: [CatalogService],
  imports: [],
})
export class CatalogModule {}
