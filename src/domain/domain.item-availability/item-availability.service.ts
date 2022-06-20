import { Injectable } from '@nestjs/common';
import { BSLClient } from 'src/utils/BSL/BSLClient.util';

@Injectable()
export class ItemAvailabilityService {
  constructor(private bslClient: BSLClient) {}

  setItemAvailability() {
    console.log(this.bslClient.setItemAvailability());
    return 'DOMAIN: setItemAvailability() called';
  }
}
