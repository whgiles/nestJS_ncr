import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Req,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CatalogService } from 'src/domain/domain.catalog/catalog.service';
import { CreateItemDto } from './dtos/request/createItem.request.dto';
import { createMapper } from '@automapper/core';
import { classes } from '@automapper/classes';
import { createMap } from '@automapper/core';
import { IItem } from 'src/domain/domain.catalog/models/IItem';
import { ItemResponseDto } from './dtos/response/item.response.dto';

@Controller('catalog')
export class CatalogController {
  constructor(private catalogService: CatalogService) {
    this.catalogService = catalogService;
  }

  @Get('items')
  async getAllItems(): Promise<ItemResponseDto[]> {
    const mapper = createMapper({
      strategyInitializer: classes(),
    });
    createMap(mapper, IItem, ItemResponseDto);

    const data = await this.catalogService.getAllItems();

    return data.map((item) => mapper.map(item, IItem, ItemResponseDto));
  }

  @Post('/items/:id')
  @UsePipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )
  addItem(@Param('id') itemId: string, @Body() createItemDto: CreateItemDto) {
    console.log('addItem() called from api');
    console.log(createItemDto);
    this.catalogService.insertItem(createItemDto, itemId);
  }
}
