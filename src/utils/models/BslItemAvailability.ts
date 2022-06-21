import { AutoMap } from 'nestjsx-automapper';

export class BslItemAvailability {
  @AutoMap()
  availableForSale: boolean;
}
