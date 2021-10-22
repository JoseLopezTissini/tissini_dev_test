import { Product } from 'src/products/entities/product.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Catalog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: '20' })
  name: string;

  @Column({ type: 'tinyint', length: '3' })
  period: number;

  @Column({ type: 'int', length: '10', unsigned: true, nullable: true })
  year: number;

  @OneToMany(() => Product, (product) => product.catalog)
  products: Product[];

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
