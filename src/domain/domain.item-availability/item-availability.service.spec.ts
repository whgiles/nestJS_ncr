import { Test, TestingModule } from '@nestjs/testing';
import { ItemAvailabilityService } from './item-availability.service';

describe('ItemAvailabilityService', () => {
  let service: ItemAvailabilityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemAvailabilityService],
    }).compile();

    service = module.get<ItemAvailabilityService>(ItemAvailabilityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
