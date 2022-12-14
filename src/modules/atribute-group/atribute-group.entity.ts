import { Column, Entity, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { ENTITY_CONST } from './atribute-group.constant';
import { BaseEntity } from 'src/shared/database/base-entity';
import { AtributeEntity } from '../atribute/atribute.entity';
import { ProductEntity } from '../product/product.entity';

@Entity({ name: ENTITY_CONST.MODEL_NAME_GROUP })
export class AtributeGroupEntity extends BaseEntity {
  @Column({ nullable: false })
  name: string;
  @ManyToOne(() => AtributeEntity, (atributeEntity) => atributeEntity.id, { nullable: false })
  atribute: AtributeEntity
  @ManyToOne(() => ProductEntity, (productEntity) => productEntity.id, { nullable: false })
  product: ProductEntity
}
