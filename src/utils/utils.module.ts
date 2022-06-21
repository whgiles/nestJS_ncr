import { Module } from '@nestjs/common';
import { BSLClient } from './BSL/BSLClient.util';

@Module({
  providers: [BSLClient],
  exports: [BSLClient],
  imports: [],
})
export class UtilsModule {}
