import { PartialType } from '@nestjs/mapped-types';
import { CreateProductVariantQuantityDto } from './create-product-variant-quantity.dto';

export class UpdateProductVariantQuantityDto extends PartialType(CreateProductVariantQuantityDto) {}
