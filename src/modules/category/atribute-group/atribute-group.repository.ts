import { Inject, Injectable } from '@nestjs/common';
import { TypeOrmRepository } from 'src/shared/database/typeorm.repository';
import { Repository } from 'typeorm';
import { ENTITY_CONST } from './atribute-group.constant';
import { AtributeGroupEntity } from './atribute-group.entity';

@Injectable()
export class AtributeGroupRepository extends TypeOrmRepository<AtributeGroupEntity> {
  constructor(
    @Inject(ENTITY_CONST.MODEL_PROVIDER)
    portfolioEntity: Repository<AtributeGroupEntity>,
  ) {
    super(portfolioEntity);
  }
}

