import { Test, TestingModule } from '@nestjs/testing';
import { ProductVariantQuantitiesController } from './product-variant-quantities.controller';
import { ProductVariantQuantitiesService } from './product-variant-quantities.service';

describe('ProductVariantQuantitiesController', () => {
  let controller: ProductVariantQuantitiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductVariantQuantitiesController],
      providers: [ProductVariantQuantitiesService],
    }).compile();

    controller = module.get<ProductVariantQuantitiesController>(ProductVariantQuantitiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
