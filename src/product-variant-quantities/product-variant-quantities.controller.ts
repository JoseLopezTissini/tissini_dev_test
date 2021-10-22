import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductVariantQuantitiesService } from './product-variant-quantities.service';
import { CreateProductVariantQuantityDto } from './dto/create-product-variant-quantity.dto';
import { UpdateProductVariantQuantityDto } from './dto/update-product-variant-quantity.dto';

@Controller('product-variant-quantities')
export class ProductVariantQuantitiesController {
  constructor(private readonly productVariantQuantitiesService: ProductVariantQuantitiesService) {}

  @Post()
  create(@Body() createProductVariantQuantityDto: CreateProductVariantQuantityDto) {
    return this.productVariantQuantitiesService.create(createProductVariantQuantityDto);
  }

  @Get()
  findAll() {
    return this.productVariantQuantitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productVariantQuantitiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductVariantQuantityDto: UpdateProductVariantQuantityDto) {
    return this.productVariantQuantitiesService.update(+id, updateProductVariantQuantityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productVariantQuantitiesService.remove(+id);
  }
}
