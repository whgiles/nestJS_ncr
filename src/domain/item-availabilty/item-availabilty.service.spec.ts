import { Test, TestingModule } from '@nestjs/testing';
import { ItemAvailabiltyService } from './item-availabilty.service';

describe('ItemAvailabiltyService', () => {
  let service: ItemAvailabiltyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemAvailabiltyService],
    }).compile();

    service = module.get<ItemAvailabiltyService>(ItemAvailabiltyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
