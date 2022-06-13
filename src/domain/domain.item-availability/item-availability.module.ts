import { Module } from '@nestjs/common';
import { RepositoriesModule } from 'src/data/repositories/repositories.module';
import { ItemAvailabilityService } from './item-availability.service';

@Module({
  providers: [ItemAvailabilityService],
  exports: [ItemAvailabilityService],
  imports: [RepositoriesModule],
})
export class DomainItemAvailabilityModule {}
