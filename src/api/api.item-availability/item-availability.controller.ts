import {
  Controller,
  Param,
  Put,
  Body,
  UsePipes,
  ValidationPipe,
  Get,
} from '@nestjs/common';
import { AutoMapper, InjectMapper } from 'nestjsx-automapper';
import { ItemAvailabilityService } from 'src/domain/domain.item-availability/item-availability.service';
import { IItemAvailability } from 'src/domain/domain.item-availability/models/IItemAvailability';
import { ApiMapper } from '../api.mappers/mappers';
import { CreateItemAvailabilityDto } from './dtos/Request.dtos/createItemAvailability.dto';
import { ItemAvailabilityResponseDto } from './dtos/Response.dto/itemAvailability.response.dto';

@Controller('item-availability')
export class ItemAvailabilityController {
  constructor(
    private itemAvailabilityService: ItemAvailabilityService,
    @InjectMapper() private readonly mapper: AutoMapper,
  ) {}

  @Put(':id')
  @UsePipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )
  setItemAvailability(
    @Param('id') id: string,
    @Body() createItemAvailabilityDto: CreateItemAvailabilityDto,
  ) {
    // mapping CreateItemAvailabilityDto to IItemAvailability
    const iitemAvailability = new ApiMapper().dtoToIIemAvailability(
      createItemAvailabilityDto,
      id,
    );
    console.log(iitemAvailability);

    // calling setItemAvailability service
    this.itemAvailabilityService.setItemAvailability(iitemAvailability);

    // returning ItemAvailabilityResponseDto
    const res = new ItemAvailabilityResponseDto();
    res.availableForSale = iitemAvailability.availableForSale;
    res.id = iitemAvailability.id;
    res.lastUpdated = new Date();

    return res;
  }
  @Get(':id')
  getItemAvailability(@Param('id') id: string) {
    return this.itemAvailabilityService.getItemAvailability(id);
  }
}
