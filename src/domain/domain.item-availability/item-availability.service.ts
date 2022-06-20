import { Injectable } from '@nestjs/common';
import { BSLClient } from 'src/utils/BSL/BSLClient.util';
import axios, { AxiosInstance } from 'axios';
import https = require('https');

@Injectable()
export class ItemAvailabilityService {
  private readonly axiosClient;
  constructor(private bslClient: BSLClient) {
    this.axiosClient = axios.create({
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    });
  }

  async setItemAvailability(itemId: string) {
    // setting the item availability
    console.log(this.bslClient.setItemAvailability());

    // sending email notification that item availability has been changed
    const url =
      'https://us-central1-catalog-backend-353912.cloudfunctions.net/mailJetService';
    const r = await this.axiosClient.get(url);
    console.log(r.data);
    return 'DOMAIN: setItemAvailability() called';
  }
}
