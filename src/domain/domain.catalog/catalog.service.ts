import { Injectable } from '@nestjs/common';
import { BSLClient } from 'src/utils/BSL/BSLClient.util';
import { IItem } from './models/IItem';
import { InjectMapper } from 'nestjsx-automapper';
import { AutoMapper } from '@nartc/automapper';
import { BSLItemResponse } from 'src/utils/models/BslItems';
import { AutoMap } from '@automapper/classes';
import { createMapper } from '@automapper/core';
import { classes } from '@automapper/classes';
import { createMap } from '@automapper/core';
import { CreateItemDto } from 'src/api/api.catalog/dtos/request/createItem.request.dto';

@Injectable()
export class CatalogService {
  constructor(private bslClient: BSLClient) {}

  /* 
  Returns all Items in BSLClient's DataBase.
  */
  async getAllItems(): Promise<IItem[]> {
    const mapper = createMapper({
      strategyInitializer: classes(),
    });
    createMap(mapper, BSLItemResponse, IItem);

    const data = await this.bslClient.getAllItems();

    return data.map((item) => mapper.map(item, BSLItemResponse, IItem));
  }

  async insertItem(
    createItemDto: CreateItemDto,
    itemId: string,
  ): Promise<void> {
    // const mapper = createMapper({
    //   strategyInitializer: classes(),
    // });
    // createMap(mapper, CreateItemDto, IItem);
    // const item = mapper.map(createItemDto, CreateItemDto, IItem);

    this.bslClient.postItem(createItemDto, itemId);
  }

  updateItembyId(id: string) {}

  removeItemById(id: string) {}
}
