import { Module } from '@nestjs/common';
import { BSLClient } from './BSL/BSLClient.util';

@Module({
  providers: [BSLClient],
  exports: [BSLClient],
})
export class UtilsModule {}
