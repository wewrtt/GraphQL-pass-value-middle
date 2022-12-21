import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { OmitType } from '@nestjs/swagger';
import { S3 } from 'aws-sdk';
import { CustomResponse } from 'src/shared/constants/respone';
import { DataSource, In } from 'typeorm';
import { AtributeGroupRepository } from '../atribute-group/atribute-group.repository';
import { ProductImageEntity } from '../product-image/product.img.entity';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
  constructor(private readonly entityRepository: ProductRepository) { }
  async create(data: object) {
    let a = await this.entityRepository.save(data);

  }

  async findOne(body) {
    const { name, ...data } = body;
    let sql = [];
    console.log(name);
    const attributes = data.atribute;
    for (let i of attributes) {
      let a = {
        atributeGroup: {
          atribute: {
            id: i.atributeid,
            option: {
              id: i.optionid
            }
          }
        }
      }
      sql.push(a);
    }
    const condition = {
      relations:
      {
        atributeGroup: {
          atribute: {
            option: true,
          },
        }
      },
      where: sql
    }
    let product1 = await this.entityRepository.findOneByCondition({ where: { name: name } });
    if (!product1) {
      throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND);
    }
    let product = await this.entityRepository.findByCondition(condition);
    return new CustomResponse(200, "find success", product).success();;
  }



}
