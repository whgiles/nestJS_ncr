import { HttpService } from '@nestjs/axios';
import { Controller, Get, Req } from '@nestjs/common';
import { CatalogService } from 'src/domain/domain.catalog/catalog.service';
import { BSLClient } from 'src/utils/BSL/BSLClient.util';

@Controller('catalog')
export class CatalogController {
  constructor(private catalogService: CatalogService) {
    this.catalogService = catalogService;
  }

  @Get('items')
  getAllItems() {
    console.log('controller hit');
    let a = new BSLClient().getAllItemsFromBSL();
  }
}
