import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { CatalogService } from 'src/domain/domain.catalog/catalog.service';
import { BSLClient } from 'src/utils/BSL/BSLClient.util';

@Controller('catalog')
export class CatalogController {
  private catalogService;

  constructor(catalogService: CatalogService) {
    this.catalogService = catalogService;
  }

  @Get('items')
  getAllItems() {
    // const a = 'API_GATEWAY';
    // console.log(process.env[a]);
    return this.catalogService.findAllItems();
  }

  @Get('/')
  utilsTest() {
    console.log('controller hit');
    let a = new BSLClient().getAllItemsFromBSL();
  }
}
