import axios, { AxiosInstance } from 'axios';
import { response } from 'express';
import fetch = require('node-fetch');
import { map } from 'rxjs';
import { BSLconfig } from './BSLconfig';
import { methods } from './methods';

export class BSLClient {
  private readonly axiosClient: AxiosInstance;
  constructor() {
    this.axiosClient = axios.create();
  }

  async getAllItemsFromBSL() {
    const url = process.env.CATALOG_ITEMS_SERVICE + '/items/';
    const config = new BSLconfig(url, methods.GET).getConfig();
    // const response = await fetch(url, config);
    // const data = await response.json();
    // console.log(data);
    const stuff = await this.axiosClient.get(url, config);
    console.log(stuff.data);
  }

  insertItemInBSL() {}

  updateItemInBSL() {}

  removeItemInBSL(id: string): void {}
}
