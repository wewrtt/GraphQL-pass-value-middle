import { Column, Entity, OneToMany } from 'typeorm';
import { ENTITY_CONST } from './category.constant';
import { BaseEntity } from 'src/shared/database/base-entity';
import { ApiProperty } from '@nestjs/swagger';
import { ProductEntity } from '../product/product.entity';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity({ name: ENTITY_CONST.MODEL_NAME })
export class CategoryEntity extends BaseEntity {
  @ApiProperty({ example: 'quần áo', description: 'The name of the category' })
  @Column({ nullable: false })
  @Field({ nullable: false })
  name: string;

  @ApiProperty({ example: '', description: 'The img of the category' })
  @Column({ nullable: false })
  @Field({ nullable: false })
  img: string;

  @OneToMany(() => ProductEntity, (productEntity) => productEntity.category)
  @Field((type) => [ProductEntity])
  product: ProductEntity[];
}
