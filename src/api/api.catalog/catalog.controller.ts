import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CatalogService } from 'src/domain/domain.catalog/catalog.service';
import { CreateItemDto } from './dtos/request/createItem.request.dto';
import { ItemResponseDto } from './dtos/response/item.response.dto';
import { InjectMapper, AutoMapper } from 'nestjsx-automapper';
import { ApiMapper } from '../api.mappers/mappers';

@Controller('catalog')
export class CatalogController {
  constructor(
    private catalogService: CatalogService,
    @InjectMapper() private readonly mapper: AutoMapper,
  ) {
    this.catalogService = catalogService;
  }

  @Get('items')
  async getAllItems(): Promise<ItemResponseDto[]> {
    const data = await this.catalogService.getAllItems();
    return data.map((item) => this.mapper.map(item, ItemResponseDto));
  }

  @Post('/items/:id')
  @UsePipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )
  addItem(@Param('id') itemId: string, @Body() createItemDto: CreateItemDto) {
    const data = new ApiMapper().dtoToIitem(createItemDto);
    this.catalogService.insertItem(data, itemId);
  }
}
