import { DataSource } from 'typeorm';
import { ENTITY_CONST } from './option.constant';
import { OptionEntity } from './option.entity';

export const OptionProvider = [
  {
    provide: ENTITY_CONST.MODEL_PROVIDER,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(OptionEntity),
    inject: ['DATA_SOURCE_MYSQL'],
  },
];
