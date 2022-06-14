import { Module } from '@nestjs/common';
import { DomainCatalogModule } from './domain.catalog/catalog.module';
import { DomainItemAvailabilityModule } from './domain.item-availability/item-availability.module';
import { DomainMenuModule } from './domain.menu/menu.module';

@Module({
  // providers: [CatalogModule, ItemAvailabilityModule, MenuModule],
  imports: [
    DomainCatalogModule,
    DomainItemAvailabilityModule,
    DomainMenuModule,
  ],
  exports: [
    DomainCatalogModule,
    DomainItemAvailabilityModule,
    DomainMenuModule,
  ],
})
export class DomainModule {}
