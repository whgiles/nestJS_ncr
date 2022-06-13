import { Module } from '@nestjs/common';
import { RepositoriesModule } from 'src/data/repositories/repositories.module';
import { MenuService } from './menu.service';

@Module({
  imports: [RepositoriesModule],
  providers: [MenuService],
  exports: [MenuService],
})
export class DomainMenuModule {}
