import { Column, Entity, ManyToOne } from 'typeorm';
import { ENTITY_CONST } from './product.constant';
import { BaseEntity } from '../../shared/database/base-entity';
import { ApiProperty } from '@nestjs/swagger';
import { CategoryEntity } from '../category/category.entity';

@Entity({ name: ENTITY_CONST.MODEL_NAME })
export class ProductEntity extends BaseEntity {
  @ApiProperty({
    example: 'quần áo bò',
    description: 'The name of the product',
  })
  @Column({ nullable: false })
  name: string;

  @ApiProperty({
    example: 'size xxl',
    description: 'The description of the product',
  })
  @Column({ nullable: false })
  description: string;

  @Column({ nullable: false })
  priceImport: number;

  @Column({ nullable: false })
  priceSelling: number;

  @Column({ nullable: false })
  quantity: number;

  @Column({ nullable: false })
  minQuantity: number;

  @ManyToOne(() => CategoryEntity, (categoryEntity) => categoryEntity.id)
  // @JoinColumn({name: 'author'})
  category: CategoryEntity;
}
