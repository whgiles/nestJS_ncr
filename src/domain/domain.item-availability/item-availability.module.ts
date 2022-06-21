import { Module } from '@nestjs/common';
import { RepositoriesModule } from 'src/data/repositories/repositories.module';
import { UtilsModule } from 'src/utils/utils.module';
import { ItemAvailabilityService } from './item-availability.service';

@Module({
  providers: [ItemAvailabilityService],
  exports: [ItemAvailabilityService],
  imports: [RepositoriesModule, UtilsModule],
})
export class DomainItemAvailabilityModule {}
