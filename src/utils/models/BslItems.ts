import { AutoMap } from '@automapper/classes';
import {
  // MultiLanguageData,
  //  NodeIdData,
  status,
} from './types';

export class BSLItemRequest {
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

export class BSLItemResponse {
  @AutoMap()
  itemId: string;

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
