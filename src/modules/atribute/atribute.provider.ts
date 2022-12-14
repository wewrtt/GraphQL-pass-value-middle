import { DataSource } from 'typeorm';
import { ENTITY_CONST } from './atribute.constant';
import { AtributeEntity } from './atribute.entity';

export const AtributeProvider = [
  {
    provide: ENTITY_CONST.MODEL_PROVIDER,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(AtributeEntity),
    inject: ['DATA_SOURCE_MYSQL'],
  },
];
