import { Inject, Injectable } from '@nestjs/common';
import { TypeOrmRepository } from 'src/shared/database/typeorm.repository';
import { Repository } from 'typeorm';
import { ENTITY_CONST } from './product.img.constant';
import { ProductImageEntity } from './product.img.entity';

@Injectable()
export class ProductImageRepository extends TypeOrmRepository<ProductImageEntity> {
  constructor(
    @Inject(ENTITY_CONST.MODEL_PROVIDER_IMAGE)
    portfolioEntity: Repository<ProductImageEntity>,
  ) {
    super(portfolioEntity);
  };
};
