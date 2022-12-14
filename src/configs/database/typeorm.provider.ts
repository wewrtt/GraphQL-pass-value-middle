import { AtributeGroupEntity } from 'src/modules/atribute-group/atribute-group.entity';
import { AtributeEntity } from 'src/modules/atribute/atribute.entity';
import { CategoryEntity } from 'src/modules/category/category.entity';
import { OptionEntity } from 'src/modules/option/option.entity';
import { ProductImageEntity } from 'src/modules/product-image/product.img.entity';
import { ProductEntity } from 'src/modules/product/product.entity';
import { DataSource } from 'typeorm';
import { databaseConfig } from '../configs.constants';
export const mysqlProviders = [
  {
    provide: 'DATA_SOURCE_MYSQL',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: databaseConfig.host,
        port: Number(databaseConfig.port),
        username: databaseConfig.username,
        password: databaseConfig.password,
        database: databaseConfig.database,
        entities: [
          ProductEntity,
          ProductImageEntity,
          CategoryEntity,
          AtributeGroupEntity,
          AtributeEntity,
          OptionEntity,
        ],
        synchronize: true,
      });
      return dataSource.initialize();
    },
  },
];
