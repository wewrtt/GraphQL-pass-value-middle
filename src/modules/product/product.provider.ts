import { DataSource } from 'typeorm';
import { ENTITY_CONST } from './product.constant';
import { ProductEntity } from './product.entity';

export const ProductProvider = [
  {
    provide: ENTITY_CONST.MODEL_PROVIDER,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ProductEntity),
    inject: ['DATA_SOURCE_MYSQL'],
  },
];
