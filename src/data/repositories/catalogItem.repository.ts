import { Injectable } from '@nestjs/common';
import Item from '../entities/CatalogItem.entity';

@Injectable()
export class TempCatalogItemRepository {
  private inMemoryDB: Item[] = [
    {
      version: 1,

      itemId: {
        itemCode: '0001',
      },

      packageIdentifiers: {
        type: 'string',
        value: 'string',
      },

      shortDescription: {
        locale: 'string',
        value: 'string',
      },

      longDescription: {
        locale: 'string',
        value: 'THIS IS ITEM NUMBER 0001 FROM THE IN MEMORY TEMP DATABASE',
      },

      status: 'any',

      merchandiseCategory: {
        nodeld: 'string',
      },

      departmentId: 'string',
      familyCode: 'string',
      manufacturerCode: 'string',
      nonMerchandise: false,

      externalIdentifiers: {
        type: 'any',
        value: 'string',
      },

      posNumber: 'string',

      referenceId: 'string',
    },

    {
      version: 1,

      itemId: {
        itemCode: '0002',
      },

      packageIdentifiers: {
        type: 'string',
        value: 'string',
      },

      shortDescription: {
        locale: 'string',
        value: 'string',
      },

      longDescription: {
        locale: 'string',
        value: 'THIS IS ITEM NUMBER 0002 FROM THE IN MEMORY TEMP DATABASE',
      },

      status: 'any',

      merchandiseCategory: {
        nodeld: 'string',
      },

      departmentId: 'string',
      familyCode: 'string',
      manufacturerCode: 'string',
      nonMerchandise: false,

      externalIdentifiers: {
        type: 'any',
        value: 'string',
      },

      posNumber: 'string',

      referenceId: 'string',
    },

    {
      version: 1,

      itemId: {
        itemCode: '0003',
      },

      packageIdentifiers: {
        type: 'string',
        value: 'string',
      },

      shortDescription: {
        locale: 'string',
        value: 'string',
      },

      longDescription: {
        locale: 'string',
        value: 'THIS IS ITEM NUMBER 0003 FROM THE IN MEMORY TEMP DATABASE',
      },

      status: 'any',

      merchandiseCategory: {
        nodeld: 'string',
      },

      departmentId: 'string',
      familyCode: 'string',
      manufacturerCode: 'string',
      nonMerchandise: false,

      externalIdentifiers: {
        type: 'any',
        value: 'string',
      },

      posNumber: 'string',

      referenceId: 'string',
    },
  ];

  async retrieveAllItems(): Promise<Item[]> {
    const results = await this.inMemoryDB;
    console.log('retrieveed All Items from in Memory DB');
    return results;
  }

  async retrieveItembyId(id: string): Promise<Item | string> {
    const result = this.inMemoryDB.find((item) => item.itemId.itemCode === id);
    console.log(`Item with id = ${id} was retrieved from in memory DB`);
    if (result) return result;
  }

  async insertItem(item: Item): Promise<void> {
    await this.inMemoryDB.push(item);
    console.log(
      `${item.itemId.itemCode} successfull inserted in memory database`,
    );
  }

  updateItembyId(id: string, item: Item): void {
    const index = this.inMemoryDB.findIndex(
      (item) => item.itemId.itemCode === id,
    );
    this.inMemoryDB[index] === item;
    console.log('item updated successfully in repository latter');
  }

  removeItemById(id: string): void {
    const index = this.inMemoryDB.findIndex(
      (item) => item.itemId.itemCode === id,
    );
    this.inMemoryDB.splice(index, 1);
    console.log('item was successfully removed from in memory DB');
  }
}
