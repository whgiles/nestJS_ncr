import fetch = require('node-fetch');
import { BSLconfig } from './BSLconfig';
import { methods } from './methods';

export class BSLClient {
  constructor() {}

  async getAllItemsFromBSL() {
    const url = process.env.CATALOG_ITEMS_SERVICE + '/items/';
    const config = new BSLconfig(url, methods.GET).getConfig();
    const response = await fetch(url, config);
    const data = await response.json();
    console.log(data);
  }

  insertItemInBSL() {}

  updateItemInBSL() {}

  removeItemInBSL(id: string): void {}
}
