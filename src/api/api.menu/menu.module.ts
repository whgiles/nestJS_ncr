import { Module } from '@nestjs/common';
import { DomainMenuModule } from 'src/domain/domain.menu/menu.module';
import { MenuController } from './menu.controller';

@Module({
  controllers: [MenuController],
  imports: [DomainMenuModule],
})
export class ApiMenuModule {}
