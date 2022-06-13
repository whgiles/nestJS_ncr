import { Module } from '@nestjs/common';
import { TempCatalogItemRepository } from './catalogItem.repository';
import { ItemAvailabilityRepository } from './itemAvailability.repository';
import { MenuRepository } from './menu.repository';

@Module({
  providers: [
    TempCatalogItemRepository,
    ItemAvailabilityRepository,
    MenuRepository,
  ],
  exports: [
    TempCatalogItemRepository,
    ItemAvailabilityRepository,
    MenuRepository,
  ],
  imports: [],
})
export class RepositoriesModule {}
