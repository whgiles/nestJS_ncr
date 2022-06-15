import base64 = require('js-base64');

export class BSLconfig {
  private date: Date;

  constructor(private url: string, private httpMethod: string) {
    this.date = new Date();
  }

  getConfig() {
    let options = {
      date: this.date,
      nepOrganization: process.env.BSP_ORGANIZATION,
      requestURL: this.url,
      httpMethod: this.httpMethod,
      contentType: 'application/json',
    };

    let requestOptions = {
      method: options.httpMethod,
      headers: {
        'Content-Type': options.contentType,
        Authorization: `Basic ${base64.encode(
          `${process.env.USERNAME}:${process.env.PASSWORD}`,
        )}`,
        'nep-organization': options.nepOrganization,
        Date: options.date.toUTCString(),
      },
    };
    return requestOptions;
  }
}
