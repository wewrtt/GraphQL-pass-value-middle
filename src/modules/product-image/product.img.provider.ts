import { DataSource } from 'typeorm';
import { ENTITY_CONST } from './product.img.constant';
import { ProductImageEntity } from './product.img.entity';
export const ProductImageProvider = [
  {
    provide: ENTITY_CONST.MODEL_PROVIDER_IMAGE,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ProductImageEntity),
    inject: ['DATA_SOURCE_MYSQL'],
  },
];