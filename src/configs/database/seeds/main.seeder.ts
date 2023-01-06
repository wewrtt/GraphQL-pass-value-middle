import { runSeeder, Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import {CategorySeeder} from './category.seeder';
import { ProductSeeder } from './product.seeder';
export  class MainSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    await runSeeder(dataSource, CategorySeeder);
    await runSeeder(dataSource, ProductSeeder);
  }
}
