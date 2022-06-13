import { Injectable } from '@nestjs/common';
import { TempCatalogItemRepository } from 'src/data/repositories/catalogItem.repository';
import { IItem } from './models/types';

@Injectable()
export class CatalogService {
  private catalogItemRepository;

  constructor(catalogItemRepository: TempCatalogItemRepository) {
    this, (catalogItemRepository = catalogItemRepository);
  }

  findAllItems() {
    return this.catalogItemRepository.retrieveAllItems();
  }

  findItemById(id: string) {
    return this.catalogItemRepository.retrieveItembyId(id);
  }

  insertItem(item: IItem) {
    return this.catalogItemRepository.insertItem();
  }

  updateItembyId(id: string) {
    this.catalogItemRepository.updateItembyId();
  }

  removeItemById(id: string) {
    this.catalogItemRepository.removeItemById();
  }
}
