import { Column, Entity, OneToMany } from 'typeorm';
import { ENTITY_CONST } from './category.constant';
import { BaseEntity } from '../../shared/database/base-entity';

import { ApiProperty } from '@nestjs/swagger';
import { ProductEntity } from '../product/product.entity';
//import { ProductEntity } from '../product/product.entity';

@Entity({ name: ENTITY_CONST.MODEL_NAME })
export class CategoryEntity extends BaseEntity {
  @ApiProperty({ example: 'quần áo', description: 'The name of the category' })
  @Column({ nullable: false, unique: true })
  name: string;

  @ApiProperty({ example: '', description: 'The img of the category' })
  @Column({ nullable: false })
  img: string;

  @OneToMany(() => ProductEntity, (productEntity) => productEntity.category)
  product: ProductEntity[];
}
