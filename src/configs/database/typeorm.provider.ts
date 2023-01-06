import { AtributeGroupEntity } from 'src/modules/atribute-group/atribute-group.entity';
import { AtributeEntity } from 'src/modules/atribute/atribute.entity';
import { CategoryEntity } from '../../modules/category/category.entity';
import { OptionEntity } from 'src/modules/option/option.entity';
import { ProductImageEntity } from 'src/modules/product-image/product.img.entity';
import { ProductEntity } from '../../modules/product/product.entity';
import { MainSeeder} from '../database/seeds/main.seeder';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { databaseConfig } from '../configs.constants';

const options: DataSourceOptions & SeederOptions = {
  type: 'mysql',
  host: databaseConfig.host,
  port: Number(databaseConfig.port),
  username: databaseConfig.username,
  password: databaseConfig.password,
  database: databaseConfig.database,
  entities: [
    ProductEntity,
    // ProductImageEntity,
    CategoryEntity,
    // AtributeGroupEntity,
    // AtributeEntity,
    // OptionEntity,
  ],
  seeds: [MainSeeder],
  factories: ['src/configs/database/factories/*{.ts,.js}'],
  synchronize: true,
};

export const mysqlProviders = [
  {
    provide: 'DATA_SOURCE_MYSQL',
    useFactory: async () => {
      const dataSource = new DataSource(options);
      return dataSource.initialize();
    },
  },
];

export const AppDataSource =  new DataSource(options);
