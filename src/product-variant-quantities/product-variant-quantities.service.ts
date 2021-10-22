import { Injectable } from '@nestjs/common';
import { CreateProductVariantQuantityDto } from './dto/create-product-variant-quantity.dto';
import { UpdateProductVariantQuantityDto } from './dto/update-product-variant-quantity.dto';

@Injectable()
export class ProductVariantQuantitiesService {
  create(createProductVariantQuantityDto: CreateProductVariantQuantityDto) {
    return 'This action adds a new productVariantQuantity';
  }

  findAll() {
    return `This action returns all productVariantQuantities`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productVariantQuantity`;
  }

  update(id: number, updateProductVariantQuantityDto: UpdateProductVariantQuantityDto) {
    return `This action updates a #${id} productVariantQuantity`;
  }

  remove(id: number) {
    return `This action removes a #${id} productVariantQuantity`;
  }
}
