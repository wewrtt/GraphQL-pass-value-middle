import { Inject, Injectable } from '@nestjs/common';
import { TypeOrmRepository } from 'src/shared/database/typeorm.repository';
import { Repository } from 'typeorm';
import { ENTITY_CONST } from './atribute.constant';
import { AtributeEntity } from './atribute.entity';

@Injectable()
export class AtributeRepository extends TypeOrmRepository<AtributeEntity> {
  constructor(
    @Inject(ENTITY_CONST.MODEL_PROVIDER)
    portfolioEntity: Repository<AtributeEntity>,
  ) {
    super(portfolioEntity);
  }
}

