import { AutoMap } from 'nestjsx-automapper';

export class ItemAvailabilityResponseDto {
  @AutoMap()
  id: string;

  @AutoMap()
  availableForSale: boolean;

  lastUpdated: Date;
}
