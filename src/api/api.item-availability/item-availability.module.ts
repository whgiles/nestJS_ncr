import { Module } from '@nestjs/common';
import { DomainItemAvailabilityModule } from 'src/domain/domain.item-availability/item-availability.module';
import { ItemAvailabilityController } from './item-availability.controller';

@Module({
  controllers: [ItemAvailabilityController],
  imports: [DomainItemAvailabilityModule],
})
export class ApiItemAvailabilityModule {}
