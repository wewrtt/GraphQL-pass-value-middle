import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { CategoryEntity } from '../../../modules/category/category.entity';

export  class CategorySeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    // const category = dataSource.getRepository(CategoryEntity);
    // const newCategory = category.create({'name':'long','img':"asdasd"});
    // await category.save(newCategory);
    const categoryFactory = await factoryManager.get(CategoryEntity);
    await categoryFactory.saveMany(5);
  }
}
