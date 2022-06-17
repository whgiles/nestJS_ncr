import { AutoMap } from '@automapper/classes';

// export class MultiLanguageData {
// @AutoMap(() => LocalizedTextData)
// values: LocalizedTextData[];
// }

// export class LocalizedTextData {
//   @AutoMap()
//   locale: string;

//   @AutoMap()
//   value: string;
// }

// export class NodeIdData {
// @AutoMap()
// nodeId: string;
// }

export enum status {
  INACTIVE = 'INACTIVE',
  ACTIVE = 'ACTIVE',
  DISCONTINUED = 'DISCONTINUED',
  SEASONAL = 'SEASONAL',
  TO_DISCONTINUE = 'TO_DISCONTINUE',
  UNAUTHORIZED = 'UNAUTHORIZED',
}
