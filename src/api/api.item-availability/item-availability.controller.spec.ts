import { Test, TestingModule } from '@nestjs/testing';
import { ItemAvailabilityController } from './item-availability.controller';

describe('ItemAvailabilityController', () => {
  let controller: ItemAvailabilityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemAvailabilityController],
    }).compile();

    controller = module.get<ItemAvailabilityController>(ItemAvailabilityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
