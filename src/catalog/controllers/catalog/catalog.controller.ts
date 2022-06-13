import { Controller, Get } from '@nestjs/common';

@Controller('catalog')
export class CatalogController {
  // Get all items from from the BSL Catalog
  @Get('items')
  getAllItems() {
    return 'getAllItems() induced';
  }
}
