import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { ProductEntity } from '../product/product.entity';
import { CategoryEntity } from './category.entity';

import { CategoryRepository } from './category.repository';
import { CreateCategoryDto } from './dto/category.create.dto';

@Injectable()
export class CategoryService {
  constructor(
    private readonly entityRepository: CategoryRepository,
    @Inject('DATA_SOURCE_MYSQL') private readonly dataSource: DataSource,
  ) {}

  async getListV1() {
    return 'api/v1';
  }

  async getListV2() {
    return 'api/v2';
  }
}
