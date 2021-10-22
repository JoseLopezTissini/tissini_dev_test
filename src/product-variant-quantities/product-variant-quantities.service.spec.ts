import { Test, TestingModule } from '@nestjs/testing';
import { ProductVariantQuantitiesService } from './product-variant-quantities.service';

describe('ProductVariantQuantitiesService', () => {
  let service: ProductVariantQuantitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductVariantQuantitiesService],
    }).compile();

    service = module.get<ProductVariantQuantitiesService>(ProductVariantQuantitiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
