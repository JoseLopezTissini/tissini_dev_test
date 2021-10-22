import { Module } from '@nestjs/common';
import { ProductVariantQuantitiesService } from './product-variant-quantities.service';
import { ProductVariantQuantitiesController } from './product-variant-quantities.controller';

@Module({
  controllers: [ProductVariantQuantitiesController],
  providers: [ProductVariantQuantitiesService]
})
export class ProductVariantQuantitiesModule {}
