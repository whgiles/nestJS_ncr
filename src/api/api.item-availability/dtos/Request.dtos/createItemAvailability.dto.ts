import { IsBoolean, IsNotEmpty } from 'class-validator';
import { AutoMap } from 'nestjsx-automapper';

export class CreateItemAvailabilityDto {
  @IsNotEmpty()
  @IsBoolean()
  @AutoMap()
  availableForSale: boolean;
}
