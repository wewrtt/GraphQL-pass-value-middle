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

  async create(data: Partial<CreateCategoryDto>) {
    try {
      return await this.entityRepository.save(data);
    } catch (error) {
      return error.message;
    }
  }

  async getDetail(id: number) {
    const where = { where: { id: id } };
    const category = await this.entityRepository.findByCondition(where);
    if (category.length < 1) {
      throw new HttpException(
        {
          isSuccess: false,
          status: HttpStatus.NOT_FOUND,
          error: 'NOT_FOUND',
        },
        HttpStatus.NOT_FOUND,
      );
    }
    return category;
  }

  async update(id: number, data: object) {
    await this.entityRepository.findOneAndUpdate(id, data);
    const category = await this.entityRepository.findById(id, {
      where: { id: id },
    });
    if (!category) {
      throw new HttpException(
        {
          isSuccess: false,
          statusCode: HttpStatus.NOT_FOUND,
          error: 'NOT_FOUND',
        },
        HttpStatus.NOT_FOUND,
      );
    }
    return {
      statusCode: HttpStatus.OK,
      message: 'update successfully',
      data: category,
    };
  }

  async delete(id: number) {
    const category = await this.entityRepository.findById(id, {
      where: { id: id },
    });
    if (!category) {
      throw new HttpException(
        {
          isSuccess: false,
          statusCode: HttpStatus.NOT_FOUND,
          error: 'NOT_FOUND',
        },
        HttpStatus.NOT_FOUND,
      );
    }
    const condition = { id: id };
    await this.entityRepository.softDelete(condition);
    return {
      isSuccess: true,
      StatusCode: HttpStatus.OK,
      message: 'Delete success',
      data: [],
    };
  }
}
