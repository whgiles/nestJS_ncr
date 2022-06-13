import { Module } from '@nestjs/common';
import { ControllerController } from './controller/controller.controller';
import { CatalogController } from './catalog.controller';

@Module({
  controllers: [ControllerController, CatalogController]
})
export class CatalogModule {}
