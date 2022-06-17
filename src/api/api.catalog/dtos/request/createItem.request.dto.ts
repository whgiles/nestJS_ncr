import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  ValidateNested,
  IsString,
  IsNumber,
  IsBoolean,
  IsNotEmptyObject,
} from 'class-validator';
import { MultiLanguageData, NodeIdData, status } from '../../types/types';
import { AutoMap } from 'nestjsx-automapper';

export class CreateItemDto {
  itemId?: string;

  @IsNotEmpty()
  @IsNumber()
  @AutoMap()
  version: number;

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => MultiLanguageData)
  @AutoMap(() => MultiLanguageData)
  shortDescription: MultiLanguageData;

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => NodeIdData)
  @AutoMap(() => NodeIdData)
  merchandiseCategory: NodeIdData;

  @IsNotEmpty()
  @IsString()
  @AutoMap()
  status: status;

  @IsNotEmpty()
  @IsString()
  @AutoMap()
  departmentId: string;

  @IsNotEmpty()
  @IsBoolean()
  @AutoMap()
  nonMerchandise: boolean;
}
