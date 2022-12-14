import { DataSource } from 'typeorm';
import { ENTITY_CONST } from './atribute-group.constant';
import { AtributeGroupEntity } from './atribute-group.entity';

export const AtributeGroupProvider = [
  {
    provide: ENTITY_CONST.MODEL_PROVIDER,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(AtributeGroupEntity),
    inject: ['DATA_SOURCE_MYSQL'],
  },
];
