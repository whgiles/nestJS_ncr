import { Controller, Get } from '@nestjs/common';
import { CatalogService } from 'src/domain/domain.catalog/catalog.service';

@Controller('catalog')
export class CatalogController {
  private catalogService;

  constructor(catalogService: CatalogService) {
    this.catalogService = catalogService;
  }

  @Get('items')
  getAllItems() {
    return this.catalogService.findAllItems();
  }
}
