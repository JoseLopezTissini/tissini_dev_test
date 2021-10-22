import { ProductVariant } from 'src/product-variants/entities/product-variant.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class ProductVariantQuantity {
  @Column({ type: 'int' })
  quantity: number;

  @OneToOne(
    () => ProductVariant,
    (productVariant) => productVariant.variantQuantity,
  )
  @JoinColumn({ name: 'product_variant_id' })
  productVariant: ProductVariant;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    nullable: true,
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
    nullable: true,
  })
  updated_at: Date;
}
