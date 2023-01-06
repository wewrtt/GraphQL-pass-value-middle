import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { ProductEntity } from '../../../modules/product/product.entity';

export class ProductSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const productFactory = await factoryManager.get(ProductEntity);
    await productFactory.saveMany(5);
  }
}
