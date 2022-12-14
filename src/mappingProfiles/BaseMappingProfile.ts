import { AutoMapper, Profile, ProfileBase } from 'nestjsx-automapper';
import { ItemResponseDto } from 'src/api/api.catalog/dtos/response/item.response.dto';
import {
  LocalizedTextDataDto,
  MultiLanguageDataDto,
  NodeIdDataDto,
} from 'src/api/api.catalog/types/types';
import { CreateItemAvailabilityDto } from 'src/api/api.item-availability/dtos/Request.dtos/createItemAvailability.dto';
import { ItemAvailabilityResponseDto } from 'src/api/api.item-availability/dtos/Response.dto/itemAvailability.response.dto';
import { ItemAvailability } from 'src/data/entities/itemAvailability.entity';
import { IItem } from 'src/domain/domain.catalog/models/IItem';
import {
  ILocalizedTextData,
  IMultiLanguageData,
  INodeIdData,
} from 'src/domain/domain.catalog/models/types';
import { IItemAvailability } from 'src/domain/domain.item-availability/models/IItemAvailability';
import { BslItemAvailability } from 'src/utils/models/BslItemAvailability';
import { BSLItemRequest, BSLItemResponse } from 'src/utils/models/BslItems';
import {
  BslLocalizedTextData,
  BslMultiLanguageData,
  BslNodeIdData,
} from 'src/utils/models/types';

@Profile()
export class BaseMappingProfile extends ProfileBase {
  constructor(mapper: AutoMapper) {
    super();

    mapper.createMap(BSLItemResponse, IItem).reverseMap();
    mapper.createMap(IItem, ItemResponseDto).reverseMap();
    mapper.createMap(BslNodeIdData, INodeIdData).reverseMap();
    mapper.createMap(INodeIdData, NodeIdDataDto).reverseMap();
    mapper.createMap(BslLocalizedTextData, ILocalizedTextData).reverseMap();
    mapper.createMap(ILocalizedTextData, LocalizedTextDataDto).reverseMap();
    mapper.createMap(BslMultiLanguageData, IMultiLanguageData).reverseMap();
    mapper.createMap(IMultiLanguageData, MultiLanguageDataDto).reverseMap();

    mapper.createMap(IItem, BSLItemRequest);

    // mapper.createMap(CreateItemAvailabilityDto, IItemAvailability);
    mapper
      .createMap(IItemAvailability, ItemAvailabilityResponseDto)
      .reverseMap();

    mapper.createMap(IItemAvailability, BslItemAvailability);
  }
}
