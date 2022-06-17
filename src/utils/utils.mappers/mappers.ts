import { BSLItemResponse } from '../models/BslItems';
import // LocalizedTextData,
// MultiLanguageData,
// NodeIdData,
'../models/types';

export class UtilMapper {
  constructor() {}

  JsonToBslItemResponse(json: any) {
    let bslItemResponse = new BSLItemResponse();
    // multiLanguageData = new MultiLanguageData(),
    // localizedTextData = new LocalizedTextData();
    // nodeIdData = new NodeIdData();

    // localizedTextData.locale = json.shortDescription.locale;

    // localizedTextData.value = json.shortDescription.value;
    // multiLanguageData.values = [localizedTextData];
    // nodeIdData.nodeId = json.merchandiseCategory.nodeId;
    bslItemResponse.itemId = json.itemId.itemCode;
    bslItemResponse.version = json.version;
    // bslItemResponse.shortDescription = multiLanguageData;
    // bslItemResponse.merchandiseCategory = nodeIdData;
    bslItemResponse.status = json.status;
    bslItemResponse.departmentId = json.departmentId;
    bslItemResponse.nonMerchandise = json.nonMerchandise;
    bslItemResponse.itemId = json.itemId.itemCode;

    return bslItemResponse;
  }
}
