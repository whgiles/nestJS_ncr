import { Module } from '@nestjs/common';
import { CatalogItemsService } from './catalog-items/services/catalog-items/catalog-items.service';
import { Service } from './catalog-items/.service';
import { ServiceService } from './catalog-items/service/service.service';
import { CatalogService } from './catalog/catalog.service';
import { ItemAvailabiltyService } from './item-availabilty/item-availabilty.service';
import { MenuService } from './menu/menu.service';

@Module({
  providers: [CatalogItemsService, Service, ServiceService, CatalogService, ItemAvailabiltyService, MenuService]
})
export class DomainModule {}
