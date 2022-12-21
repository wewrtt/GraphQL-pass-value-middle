import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { ENTITY_CONST } from './product.constant';
import { BaseEntity } from 'src/shared/database/base-entity';
import { ApiProperty } from '@nestjs/swagger';
import { CategoryEntity } from '../category/category.entity';
import { AtributeGroupEntity } from '../atribute-group/atribute-group.entity';
import { ProductImageEntity } from '../product-image/product.img.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import { type } from 'os';

@ObjectType()
@Entity({ name: ENTITY_CONST.MODEL_NAME })
export class ProductEntity extends BaseEntity {
  @ApiProperty({
    example: 'quần áo bò',
    description: 'The name of the product',
  })
  @Column({ nullable: false })
  @Field({ nullable: false })
  name: string;

  @ApiProperty({
    example: 'size xxl',
    description: 'The description of the product',
  })
  @Column({ nullable: false })
  @Field({ nullable: false })
  description: string;

  @Column({ nullable: false })
  @Field({ nullable: false })
  priceImport: number;

  @Column({ nullable: false })
  @Field({ nullable: false })
  priceSelling: number;

  @Column({ nullable: false })
  @Field({ nullable: false })
  quantity: number;

  @Column({ nullable: false })
  @Field({ nullable: false })
  minQuantity: number;

  @ManyToOne(() => CategoryEntity, (categoryEntity) => categoryEntity.id)
  @Field(type=> CategoryEntity)
  category: CategoryEntity;

  // @OneToMany(
  //   () => AtributeGroupEntity,
  //   (atributeGroupEntity) => atributeGroupEntity.product,
  // )
  // atributeGroup: AtributeGroupEntity[];

  // @OneToMany(
  //   () => ProductImageEntity,
  //   (productImageEntity) => productImageEntity.product,
  // )
  // productimage: ProductImageEntity[];
}
