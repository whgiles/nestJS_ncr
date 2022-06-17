import { Type } from 'class-transformer';
import { ValidateNested, IsNotEmpty, IsString } from 'class-validator';

export class MultiLanguageData {
  @ValidateNested({ each: true })
  @Type(() => LocalizedTextData)
  values: LocalizedTextData[];
}

export class LocalizedTextData {
  @IsNotEmpty()
  @IsString()
  locale: string;

  @IsNotEmpty()
  @IsString()
  value: string;
}

export class NodeIdData {
  @IsNotEmpty()
  @IsString()
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
