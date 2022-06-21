import { Type } from 'class-transformer';
import { ValidateNested, IsNotEmpty, IsString } from 'class-validator';
import { AutoMap } from 'nestjsx-automapper';

export class MultiLanguageDataDto {
  @ValidateNested({ each: true })
  @Type(() => LocalizedTextDataDto)
  @AutoMap(() => LocalizedTextDataDto)
  values: LocalizedTextDataDto[];
}

export class LocalizedTextDataDto {
  @IsNotEmpty()
  @IsString()
  @AutoMap()
  locale: string;

  @IsNotEmpty()
  @IsString()
  @AutoMap()
  value: string;
}

export class NodeIdDataDto {
  @IsNotEmpty()
  @IsString()
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
