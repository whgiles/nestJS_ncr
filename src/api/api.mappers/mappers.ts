import { IItem } from 'src/domain/domain.catalog/models/IItem';
import {
  ILocalizedTextData,
  IMultiLanguageData,
  INodeIdData,
} from 'src/domain/domain.catalog/models/types';
import { CreateItemDto } from '../api.catalog/dtos/request/createItem.request.dto';
import { MultiLanguageDataDto } from '../api.catalog/types/types';

export class ApiMapper {
  dtoToIitem(dto: CreateItemDto): IItem {
    const item = new IItem();
    item.version = dto.version;
    item.status = dto.status;
    item.departmentId = dto.departmentId;
    item.nonMerchandise = dto.nonMerchandise;
    item.shortDescription = this.multiLanguageDataDto_TO_IMultiLanguageData(
      dto.shortDescription,
    );
    item.merchandiseCategory = this.nodeDto_TO_INode(dto.merchandiseCategory);

    return item;
  }

  private localDto_TO_Ilocal(dto: any): ILocalizedTextData {
    const iLocalizedTextData = new ILocalizedTextData();
    iLocalizedTextData.locale = dto.locale;
    iLocalizedTextData.value = dto.value;
    return iLocalizedTextData;
  }

  private nodeDto_TO_INode(dto: any): INodeIdData {
    const iNodeIdData = new INodeIdData();
    iNodeIdData.nodeId = dto.nodeId;
    return iNodeIdData;
  }

  private multiLanguageDataDto_TO_IMultiLanguageData(
    dto: MultiLanguageDataDto,
  ): IMultiLanguageData {
    const iMultiLanguageData = new IMultiLanguageData();
    const iLocalizedTextDataArray: ILocalizedTextData[] = [];

    dto.values.forEach((i) =>
      iLocalizedTextDataArray.push(this.localDto_TO_Ilocal(i)),
    );
    iMultiLanguageData.values = iLocalizedTextDataArray;
    return iMultiLanguageData;
  }
}
