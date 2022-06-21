import { BSLItemResponse } from '../models/BslItems';
import {
  BslLocalizedTextData,
  BslMultiLanguageData,
  BslNodeIdData,
} from '../models/types';

export class UtilMapper {
  constructor() {}

  JsonToBslItemResponse(json: any) {
    let bslItemResponse = new BSLItemResponse();
    bslItemResponse.itemId = json.itemId.itemCode;
    bslItemResponse.version = json.version;
    bslItemResponse.shortDescription =
      this.multiLanguageDataJSON_TO_bslMultiLanguageData(json.shortDescription);
    bslItemResponse.merchandiseCategory = this.nodeJSON_TO_bslNode(
      json.merchandiseCategory,
    );
    bslItemResponse.status = json.status;
    bslItemResponse.departmentId = json.departmentId;
    bslItemResponse.nonMerchandise = json.nonMerchandise;

    return bslItemResponse;
  }
  private localJSON_TO_bsllocal(dto: any): BslLocalizedTextData {
    const localizedTextDataJSON = new BslLocalizedTextData();
    localizedTextDataJSON.locale = dto.locale;
    localizedTextDataJSON.value = dto.value;
    return localizedTextDataJSON;
  }

  private nodeJSON_TO_bslNode(dto: any): BslNodeIdData {
    const nodeIdData = new BslNodeIdData();
    nodeIdData.nodeId = dto.nodeId;
    return nodeIdData;
  }

  private multiLanguageDataJSON_TO_bslMultiLanguageData(
    dto: any,
  ): BslMultiLanguageData {
    const multiLanguageData = new BslMultiLanguageData();
    const localizedTextDataArray: BslLocalizedTextData[] = [];
    localizedTextDataArray.push(this.localJSON_TO_bsllocal(dto.value));

    multiLanguageData.values = localizedTextDataArray;
    return multiLanguageData;
  }
}
