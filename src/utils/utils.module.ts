import { Module } from '@nestjs/common';
import { BSLClient } from './BSL/BSLClient.util';
import { BslService } from './bsl/bsl.service';

@Module({
  providers: [BSLClient, BslService],
  exports: [BSLClient, BslService],
  imports: [BslService],
})
export class UtilsModule {}
