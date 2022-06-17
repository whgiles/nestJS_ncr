import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { UtilMapper } from '../utils.mappers/mappers';
import { BSLItemRequest, BSLItemResponse } from '../models/BslItems';

import { BSLconfig } from './BSLconfig';
import { methods } from './methods';

@Injectable()
export class BSLClient {
  private readonly axiosClient: AxiosInstance;
  constructor() {
    this.axiosClient = axios.create();
  }
  /*
This method sends a GET request to the BSL Client. 
A url and configuration are created in the method.
The BSLItemResponse is sent back to this API's Domain layer
*/
  async getAllItems(): Promise<BSLItemResponse[]> {
    const url = process.env.CATALOG_ITEMS_SERVICE + '/items/';
    const config = new BSLconfig(url, methods.GET).getConfig();
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
    console.log('postItem() started');
    const url = process.env.CATALOG_ITEMS_SERVICE + `/items/${id}`;
    const config = new BSLconfig(url, methods.PUT).getConfig();
    const r = await this.axiosClient.put(url, payload, config);
    console.log('postItem() finished');
  }

  updateItemInBSL() {}

  removeItemInBSL(id: string): void {}
}
