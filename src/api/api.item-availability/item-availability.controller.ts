import { Controller, Param, Put, Body } from '@nestjs/common';
import { ItemAvailabilityService } from 'src/domain/domain.item-availability/item-availability.service';

@Controller('item-availability')
export class ItemAvailabilityController {
  constructor(private itemAvailabilityService: ItemAvailabilityService) {}

  @Put(':id')
  setItemAvailability(@Param('id') itemId: string, @Body() payload: any) {
    console.log(this.itemAvailabilityService.setItemAvailability());

    console.log('API: setItemAvilability() called');
    return 'API: setItemAvilability() called';
  }
}
