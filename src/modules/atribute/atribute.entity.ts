import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { ENTITY_CONST } from './atribute.constant';
import { BaseEntity } from 'src/shared/database/base-entity';
import { AtributeGroupEntity } from '../atribute-group/atribute-group.entity';
import { OptionEntity } from '../option/option.entity';

@Entity({ name: ENTITY_CONST.MODEL_NAME_GROUP })
export class AtributeEntity extends BaseEntity {
  @Column({ nullable: false })
  name: string;

  @OneToMany(() => AtributeGroupEntity, (atributeGroupEntity) => atributeGroupEntity.atribute, { nullable: false })
  atributeGroup: AtributeGroupEntity[]

  @OneToMany(() => OptionEntity, (optionEntity) => optionEntity.atribute)
  option: OptionEntity[]
}
