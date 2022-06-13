import { Module } from '@nestjs/common';
import { CatalogModule } from './catalog/catalog.module';
import { ItemAvailabilityModule } from './item-availability/item-availability.module';
import { MenuModule } from './menu/menu.module';
import { CatalogModule } from './catalog/catalog.module';

@Module({
  imports: [CatalogModule, ItemAvailabilityModule, MenuModule]
})
export class ApiModule {}
