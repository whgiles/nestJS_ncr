import { IItem } from 'src/domain/domain.catalog/models/IItem';
import {
  ILocalizedTextData,
  IMultiLanguageData,
  INodeIdData,
} from 'src/domain/domain.catalog/models/types';
import { CreateItemDto } from '../api.catalog/dtos/request/createItem.request.dto';

export class ApiMapper {
  dtoToIitem(dto: CreateItemDto): IItem {
    const item = new IItem();
    item.version = dto.version;
    item.status = dto.status;
    item.departmentId = dto.departmentId;
    item.nonMerchandise = dto.nonMerchandise;

    const nodeIdData = new INodeIdData();
    nodeIdData.nodeId = dto.merchandiseCategory.nodeId;
    item.merchandiseCategory = nodeIdData;

    const multiLanguageData = new IMultiLanguageData();
    let localizedTextDataArray: ILocalizedTextData[] = [];

    dto.shortDescription.values.forEach((v) =>
      localizedTextDataArray.push(this.localDtoToIlocal(v)),
    );
    multiLanguageData.values = localizedTextDataArray;
    item.shortDescription = multiLanguageData;

    return item;
  }

  localDtoToIlocal(dto: any) {
    const iLocalizedTextData = new ILocalizedTextData();
    iLocalizedTextData.locale = dto.locale;
    iLocalizedTextData.value = dto.value;
    return iLocalizedTextData;
  }
}
