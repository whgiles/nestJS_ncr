import { AutoMap } from 'nestjsx-automapper';

export class IItemAvailability {
  id: string;

  @AutoMap()
  availableForSale: boolean;
}
