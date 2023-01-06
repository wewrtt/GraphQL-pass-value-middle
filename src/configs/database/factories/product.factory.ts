import { ProductEntity } from '../../../modules/product/product.entity';
import { setSeederFactory } from 'typeorm-extension';

export default setSeederFactory(ProductEntity, (faker) => {
  const product = new ProductEntity();
  product.name = faker.internet.userName();
  product.description = faker.company.name();
  product.priceImport = faker.datatype.number();
  product.priceSelling = faker.datatype.number();
  product.quantity = faker.datatype.number();
  product.minQuantity = faker.datatype.number();
  return product;
});
