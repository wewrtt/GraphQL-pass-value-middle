import { Inject, Injectable } from '@nestjs/common';
import { TypeOrmRepository } from 'src/shared/database/typeorm.repository';
import { Repository } from 'typeorm';
import { ENTITY_CONST } from './option.constant';
import { OptionEntity } from './option.entity';

@Injectable()
export class OptionRepository extends TypeOrmRepository<OptionEntity> {
  constructor(
    @Inject(ENTITY_CONST.MODEL_PROVIDER)
    portfolioEntity: Repository<OptionEntity>,
  ) {
    super(portfolioEntity);
  }
}

