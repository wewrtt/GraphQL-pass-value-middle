import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { DatabaseModule } from './configs/database/database.module';
import { ProductModule } from './modules/product/product.module';
import { ProductImageModule } from './modules/product-image/product.img.module';
import { CategoryModule } from './modules/category/category.module';
import { AtributeGroupModule } from './modules/atribute-group/atribute-group.module';
import { AtributeModule } from './modules/atribute/atribute.module';
import { OptionModule } from './modules/option/option.module';
import { VersionMiddleware } from './configs/version.middleware';
import { CategoryController } from './modules/category/category.controller';

@Module({
  imports: [
    ProductModule,
    ProductImageModule,
    CategoryModule,
    AtributeGroupModule,
    AtributeModule,
    DatabaseModule,
    OptionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(VersionMiddleware).forRoutes(CategoryController);
  }
}
