import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const hmac = require('./hmac');

// @Injectable()
export class BslService {
  constructor() {}

  getConfig(httpMethod: string, requestURL: string) {
    const date = new Date();

    const options = {
      secretKey: process.env.BSP_SECRET_KEY,
      date: date,
      sharedKey: process.env.BSP_SHARED_KEY,
      nepOrganization: process.env.BSP_ORGANIZATION,
      contentType: 'application/json',
      httpMethod: httpMethod,
      requestURL: requestURL,
    };

    const requestHeaders = {
      'Content-Type': options.contentType,
      Authorization: `AccessKey ${hmac(options)}`,
      'nep-organization': options.nepOrganization,
      Date: options.date.toUTCString(),
      'nep-enterprise-unit': process.env.SITE_ID,
    };
    let requestOptions = {
      method: options.httpMethod,
      headers: requestHeaders,
    };

    return requestOptions;
  }
}
