import { Injectable } from '@nestjs/common';

import { ProductImageRepository } from './product.img.repository';

@Injectable()
export class ProductImageService {
  constructor(private readonly entityRepository: ProductImageRepository) { }
  async get() {
    const data = { id: 12123123, name: 'long' }
    let a = await this.entityRepository.save(data);
    return {
      message: a
    };
  }
}
