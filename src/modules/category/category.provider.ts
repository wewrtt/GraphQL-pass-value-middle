import { DataSource } from 'typeorm';
import { ENTITY_CONST } from './category.constant';
import { CategoryEntity } from './category.entity';

export const CategoryProvider = [
  {
    provide: ENTITY_CONST.MODEL_PROVIDER,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CategoryEntity),
    inject: ['DATA_SOURCE_MYSQL'],
  },
];
