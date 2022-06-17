import { AutoMap } from 'nestjsx-automapper';
import { BslMultiLanguageData, BslNodeIdData, status } from './types';

export class BSLItemRequest {
  @AutoMap()
  version: number;

  @AutoMap(() => BslMultiLanguageData)
  shortDescription: BslMultiLanguageData;

  @AutoMap(() => BslNodeIdData)
  merchandiseCategory: BslNodeIdData;

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

  @AutoMap(() => BslMultiLanguageData)
  shortDescription: BslMultiLanguageData;

  @AutoMap(() => BslNodeIdData)
  merchandiseCategory: BslNodeIdData;

  @AutoMap()
  status: status;

  @AutoMap()
  departmentId: string;

  @AutoMap()
  nonMerchandise: boolean;
}
