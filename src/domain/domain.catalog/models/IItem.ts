import { AutoMap } from '@automapper/classes';
import {
  // MultiLanguageData,
  // NodeIdData,
  status,
} from './types';

export class IItem {
  @AutoMap()
  itemId?: string;

  @AutoMap()
  version: number;

  // @AutoMap(() => MultiLanguageData)
  // shortDescription: MultiLanguageData;

  // @AutoMap(() => NodeIdData)
  // merchandiseCategory: NodeIdData;

  @AutoMap()
  status: status;

  @AutoMap()
  departmentId: string;

  @AutoMap()
  nonMerchandise: boolean;
}
