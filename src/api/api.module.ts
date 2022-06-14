import { Module } from '@nestjs/common';
import { ApiCatalogModule } from './api.catalog/catalog.module';
import { ApiItemAvailabilityModule } from './api.item-availability/item-availability.module';
import { ApiMenuModule } from './api.menu/menu.module';

@Module({
  imports: [ApiCatalogModule, ApiItemAvailabilityModule, ApiMenuModule],
})
export class ApiModule {}
