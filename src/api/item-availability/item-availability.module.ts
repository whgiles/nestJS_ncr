import { Module } from '@nestjs/common';
import { ItemAvailabilityController } from './item-availability.controller';

@Module({
  controllers: [ItemAvailabilityController]
})
export class ItemAvailabilityModule {}
