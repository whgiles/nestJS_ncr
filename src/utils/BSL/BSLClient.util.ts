import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { UtilMapper } from '../utils.mappers/mappers';
import { BSLItemRequest, BSLItemResponse } from '../models/BslItems';

import { methods } from './methods';
import { BslService } from './bsl.service';
import { IItemAvailability } from 'src/domain/domain.item-availability/models/IItemAvailability';
import { BslItemAvailability } from '../models/BslItemAvailability';
import { AutoMapper, InjectMapper } from 'nestjsx-automapper';

@Injectable()
export class BSLClient {
  private readonly axiosClient: AxiosInstance;
  constructor(@InjectMapper() private mapper: AutoMapper) {
    this.axiosClient = axios.create();
  }
  /*
This method sends a GET request to the BSL Client. 
A url and configuration are created in the method.
The BSLItemResponse is sent back to this API's Domain layer
*/
  async getAllItems(): Promise<BSLItemResponse[]> {
    const url = process.env.CATALOG_ITEMS_SERVICE + '/items/';
    const config = new BslService().getConfig(methods.GET, url);
    const r = await this.axiosClient.get(url, config);
    const data: object[] = Object.values(r.data.pageContent);
    const mapper = new UtilMapper();
    return data.map((item) => (item = mapper.JsonToBslItemResponse(item)));
  }
  /* 
This method sends a BSlItemRequst to the BSL Client. 
A url and configuration are created in the method.
The BSLItemRequest is persist in the BLSClient database.
*/
  async postItem(payload: BSLItemRequest, id: string): Promise<void> {
    const url = process.env.CATALOG_ITEMS_SERVICE + `/items/${id}`;
    const config = new BslService().getConfig(methods.PUT, url);
    const r = await this.axiosClient.put(url, payload, config);
  }

  updateItemInBSL() {}

  removeItemInBSL(id: string): void {}

  async setItemAvailability(iitemAvailability: IItemAvailability, id: string) {
    const url = `https://api.ncr.com/ias/v1/item-availability/${id}`;
    const config = new BslService().getConfig(methods.PUT, url);
    const payload = this.mapper.map(iitemAvailability, BslItemAvailability);
    console.log(payload);
    const r = await this.axiosClient.put(url, payload, config);
    console.log('bslClient', r.data);
  }
}
