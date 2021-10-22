import { ProductVariantQuantity } from 'src/product-variant-quantities/entities/product-variant-quantity.entity';
import { Product } from 'src/products/entities/product.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class ProductVariant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  sku: string;

  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'varchar' })
  size: string;

  @Column({ type: 'varchar' })
  color: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column('decimal', { precision: 10, scale: 2 })
  salePrice: number;

  @Column({ type: 'tinyint' })
  active: boolean;

  @Column({ type: 'varchar' })
  custItemTjCategory: string;

  @OneToOne(() => ProductVariantQuantity, (quantity) => quantity.productVariant)
  variantQuantity: ProductVariantQuantity;

  @ManyToOne(() => Product, (product) => product.variants)
  product: Product;

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
