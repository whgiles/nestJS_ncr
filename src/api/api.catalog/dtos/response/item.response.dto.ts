import { AutoMap } from 'nestjsx-automapper';
import {
  MultiLanguageDataDto,
  NodeIdDataDto,
  status,
} from 'src/api/api.catalog/types/types';

export class ItemResponseDto {
  @AutoMap()
  itemId: string;

  @AutoMap()
  version: number;

  @AutoMap(() => MultiLanguageDataDto)
  shortDescription: MultiLanguageDataDto;

  @AutoMap(() => NodeIdDataDto)
  merchandiseCategory: NodeIdDataDto;

  @AutoMap()
  status: status;

  @AutoMap()
  departmentId: string;

  @AutoMap()
  nonMerchandise: boolean;
}
