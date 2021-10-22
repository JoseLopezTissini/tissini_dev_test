import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum BooleanEnum {
  TRUE = 'true',
  FALSE = 'false',
}

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', unique: true })
  reference: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'bool' })
  active: boolean;

  @Column({ type: 'text' })
  tags: string;

  @Column({ type: 'enum', enum: BooleanEnum, default: BooleanEnum.FALSE })
  custItemAllowedForWarehouseSale: string;

  @Column({ type: 'enum', enum: BooleanEnum, default: BooleanEnum.FALSE })
  custItemTissiniAppSaleTag: string;

  @Column({ type: 'tinyint', length: '3' })
  custItemKissts01PageNumber: number;

  @Column({ type: 'enum', enum: BooleanEnum, default: BooleanEnum.FALSE })
  isNew: string;

  @Column('decimal', { precision: 10, scale: 2 })
  tDollars: number;

  @Column({ type: 'json' })
  scope: any;

  @Column({ type: 'varchar' })
  slug: string;

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
