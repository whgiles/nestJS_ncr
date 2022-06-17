import { Injectable } from '@nestjs/common';
import { BSLClient } from 'src/utils/BSL/BSLClient.util';
import { IItem } from './models/IItem';
import { InjectMapper, AutoMapper } from 'nestjsx-automapper';
import { BSLItemRequest, BSLItemResponse } from 'src/utils/models/BslItems';

@Injectable()
export class CatalogService {
  constructor(
    private bslClient: BSLClient,
    @InjectMapper() private readonly mapper: AutoMapper,
  ) {}

  /* 
  Returns all Items in BSLClient's DataBase.
  */
  async getAllItems(): Promise<BSLItemResponse[]> {
    const data = await this.bslClient.getAllItems();
    return data.map((item) => this.mapper.map(item, IItem));
  }

  async insertItem(item: IItem, itemId: string): Promise<void> {
    const data = this.mapper.map(item, BSLItemRequest);
    this.bslClient.postItem(data, itemId);
  }

  updateItembyId(id: string) {}

  removeItemById(id: string) {}
}
