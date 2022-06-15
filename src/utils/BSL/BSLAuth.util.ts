import { Request } from 'express';
import hmacSHA512 = require('crypto-js/hmac-sha512');
import Base64 = require('crypto-js/enc-base64');

export class BSLAuth {
  accesskey;
  private date: Date;

  constructor(private request: Request) {
    this.date = new Date();
    this.accesskey = this.createAccessKey();
  }

  private uniqueKey(date: Date) {
    const nonce = date.toISOString().slice(0, 19) + '.000Z';
    return process.env.BSP_SECRET_KEY + nonce;
  }

  private convertVariables(templateContent) {
    const regexPattern = /({{(.*?)}})/g;
    let convertedContent = templateContent;
    let matchedVar = new RegExp(regexPattern).exec(convertedContent);
    while (matchedVar !== null) {
      const variableReplacement = matchedVar[1];
      const variableName = matchedVar[2];
      const variableValue = process.env[variableName];
      convertedContent = convertedContent.replace(
        variableReplacement,
        variableValue,
      );
      matchedVar = new RegExp(regexPattern).exec(convertedContent);
    }
    return convertedContent;
  }

  private signableContent() {
    const requestPath = this.convertVariables(this.request.url.trim()).replace(
      /^https?:\/\/[^\/]+\//,
      '/',
    );
    const params = [
      this.request.method,
      requestPath,
      this.request.headers['content-type'],
      this.request.headers['content-md5'],
      this.convertVariables(this.request.headers['nep-organization']),
    ];
    return params.filter((p) => p && p.length > 0).join('\n');
  }

  private calculateSignature() {
    // const date = new Date();
    // const dateString = date.toUTCString();
    console.log(
      '----------------------------------------------------------------------',
    );
    console.log(this.date);
    const key = this.uniqueKey(this.date);
    const sc = this.signableContent();
    const hmac = hmacSHA512(sc, key);
    return Base64.stringify(hmac);
  }

  private createAccessKey() {
    const signature = this.calculateSignature();
    const sharedKey = process.env.BSP_SHARED_KEY;
    return `AccessKey ${sharedKey}:${signature}`;
  }

  getUTCDate(): string {
    return this.date.toUTCString();
  }
}

//bsp code
// 'Invalid AccessKey Authorization value'
// AccessKey xbb2utBA9zDAv0bcg1+nZRO3dh6yWYzOnfTtNDdfShpwdWo+ccBsEwX7Yw/4kFccyNzGW+gwmSFsF9BdYXT5ug==

// my code
// 'HASH_MATCH - The provided hash-based authentication code is invalid'
// AccessKey ab231c2905ab4b99bb4e10e937748464:HWbOIaUcQy6BCCmURS51MppLsAxZVeimxaGCG+N//ygxFd+SNpi6VpEhHTfQ04mk9TXsIwgWosUajoRfkzj+Tg==
