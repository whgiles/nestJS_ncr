import { AutoMap } from 'nestjsx-automapper';
import { IMultiLanguageData, INodeIdData, status } from './types';

export class IItem {
  @AutoMap()
  itemId: string;

  @AutoMap()
  version: number;

  @AutoMap(() => IMultiLanguageData)
  shortDescription: IMultiLanguageData;

  @AutoMap(() => INodeIdData)
  merchandiseCategory: INodeIdData;

  @AutoMap()
  status: status;

  @AutoMap()
  departmentId: string;

  @AutoMap()
  nonMerchandise: boolean;
}
