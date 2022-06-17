import { AutoMap } from 'nestjsx-automapper';

export class IMultiLanguageData {
  @AutoMap(() => ILocalizedTextData)
  values: ILocalizedTextData[];
}

export class ILocalizedTextData {
  @AutoMap()
  locale: string;

  @AutoMap()
  value: string;
}

export class INodeIdData {
  @AutoMap()
  nodeId: string;
}

export enum status {
  INACTIVE = 'INACTIVE',
  ACTIVE = 'ACTIVE',
  DISCONTINUED = 'DISCONTINUED',
  SEASONAL = 'SEASONAL',
  TO_DISCONTINUE = 'TO_DISCONTINUE',
  UNAUTHORIZED = 'UNAUTHORIZED',
}
