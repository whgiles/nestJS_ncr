import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  ValidateNested,
  IsString,
  IsNumber,
  IsBoolean,
  IsNotEmptyObject,
} from 'class-validator';
import { MultiLanguageDataDto, NodeIdDataDto, status } from '../../types/types';
import { AutoMap } from 'nestjsx-automapper';

export class CreateItemDto {
  itemId?: string;

  @IsNotEmpty()
  @IsNumber()
  @AutoMap()
  version: number;

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => MultiLanguageDataDto)
  @AutoMap(() => MultiLanguageDataDto)
  shortDescription: MultiLanguageDataDto;

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => NodeIdDataDto)
  @AutoMap(() => NodeIdDataDto)
  merchandiseCategory: NodeIdDataDto;

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
