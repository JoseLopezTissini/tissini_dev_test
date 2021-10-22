import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum CategoryEnum {
  TEXTILES = 'textiles',
  JOYAS = 'joyas',
  BELLEZA = 'belleza',
  CONCORD = 'concord',
  NATURALES = 'naturales',
}

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Category, (category) => category.subcategories)
  parent: Category;

  @OneToMany(() => Category, (category) => category.parent)
  subcategories: Category[];

  @Column({ type: 'varchar', length: '255' })
  name: string;

  @Column({
    type: 'enum',
    enum: CategoryEnum,
    default: CategoryEnum.TEXTILES,
  })
  category: string;

  @Column({ type: 'varchar' })
  image: string;

  @Column({ type: 'tinyint', length: '3' })
  pos: number;

  @Column({ type: 'bool' })
  active: boolean;

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
