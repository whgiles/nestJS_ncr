import { AutoMap } from 'nestjsx-automapper';

export class BslMultiLanguageData {
  @AutoMap(() => BslLocalizedTextData)
  values: BslLocalizedTextData[];
}

export class BslLocalizedTextData {
  @AutoMap()
  locale: string;

  @AutoMap()
  value: string;
}

export class BslNodeIdData {
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
