import { CategoryEntity } from '../../../modules/category/category.entity';
import { setSeederFactory } from 'typeorm-extension';

export default setSeederFactory(CategoryEntity, (faker) => {
  const category = new CategoryEntity();
  category.name = faker.internet.userName();
  category.img = faker.image.avatar();
  return category;
});
