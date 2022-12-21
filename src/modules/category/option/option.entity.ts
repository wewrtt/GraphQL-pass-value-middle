import { Column, Entity, ManyToOne } from 'typeorm';
import { ENTITY_CONST } from './option.constant';
import { BaseEntity } from 'src/shared/database/base-entity';
import { AtributeEntity } from '../atribute/atribute.entity';

@Entity({ name: ENTITY_CONST.MODEL_NAME_GROUP })
export class OptionEntity extends BaseEntity {
  @Column({ nullable: false })
  value: string;
  @ManyToOne(() => AtributeEntity, (atributeEntity) => atributeEntity.id)
  atribute: AtributeEntity
}
