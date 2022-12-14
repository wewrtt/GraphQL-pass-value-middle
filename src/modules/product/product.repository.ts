import { Inject, Injectable } from '@nestjs/common';
import { TypeOrmRepository } from 'src/shared/database/typeorm.repository';
import { Repository } from 'typeorm';
import { ENTITY_CONST } from './product.constant';
import { ProductEntity } from './product.entity';

@Injectable()
export class ProductRepository extends TypeOrmRepository<ProductEntity> {
  constructor(
    @Inject(ENTITY_CONST.MODEL_PROVIDER)
    portfolioEntity: Repository<ProductEntity>,
  ) {
    super(portfolioEntity);
  }
}

