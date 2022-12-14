import { Inject, Injectable } from '@nestjs/common';
import { TypeOrmRepository } from 'src/shared/database/typeorm.repository';
import { Repository } from 'typeorm';
import { ENTITY_CONST } from './category.constant';
import { CategoryEntity } from './category.entity';

@Injectable()
export class CategoryRepository extends TypeOrmRepository<CategoryEntity> {
  constructor(
    @Inject(ENTITY_CONST.MODEL_PROVIDER)
    portfolioEntity: Repository<CategoryEntity>,
  ) {
    super(portfolioEntity);
  }
}
