export interface Item {
  version: number;

  itemId: {
    itemCode: string;
  };

  packageIdentifiers: {
    type: string;
    value: string;
  };

  shortDescription: {
    locale: string;
    value: string;
  };

  longDescription: {
    locale: string;
    value: string;
  };

  status: any;

  merchandiseCategory: {
    nodeld: string;
  };

  departmentId: string;

  familyCode: string;

  manufacturerCode: string;

  nonMerchandise: boolean;

  externalIdentifiers: {
    type: any;
    value: string;
  };

  posNumber: string;

  referenceId: string;
}
