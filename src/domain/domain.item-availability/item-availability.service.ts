import { Injectable } from '@nestjs/common';
import { BSLClient } from 'src/utils/BSL/BSLClient.util';
import axios, { AxiosInstance } from 'axios';
import https = require('https');
import { IItemAvailability } from './models/IItemAvailability';
import { AutoMapper, InjectMapper } from 'nestjsx-automapper';
import { BslItemAvailability } from 'src/utils/models/BslItemAvailability';

@Injectable()
export class ItemAvailabilityService {
  private readonly axiosClient;
  constructor(
    @InjectMapper() private mapper: AutoMapper,
    private bslClient: BSLClient,
  ) {
    this.axiosClient = axios.create({
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    });
  }

  async setItemAvailability(
    itemAvailability: IItemAvailability,
  ): Promise<void> {
    // setting the item availability
    this.bslClient.setItemAvailability(itemAvailability, itemAvailability.id);

    // sending email notification that item availability has been changed
    const url =
      'https://us-central1-catalog-backend-353912.cloudfunctions.net/mailJetService';

    const r = await this.axiosClient.post(url, itemAvailability);
    console.log(r.data);
  }
}
