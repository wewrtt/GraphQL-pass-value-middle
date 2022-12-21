import { Column, Entity, ManyToOne } from 'typeorm';
import { ENTITY_CONST } from './product.img.constant';
import { BaseEntity } from 'src/shared/database/base-entity';
import { ProductEntity } from '../product/product.entity';

@Entity({ name: ENTITY_CONST.MODEL_NAME_IMAGE })
export class ProductImageEntity extends BaseEntity {
  @Column({ nullable: true })
  name: string;

  @Column({ nullable: false })
  url: string;

  @ManyToOne(type => ProductEntity, product => product.id, { nullable: false })
  product: ProductEntity;


}
