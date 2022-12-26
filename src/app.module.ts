import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { DatabaseModule } from './configs/database/database.module';
import { ProductModule } from './modules/product/product.module';
import { CategoryModule } from './modules/category/category.module';
import { VersionMiddleware } from './configs/version.middleware';
import { CategoryController } from './modules/category/category.controller';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [ProductModule, CategoryModule, DatabaseModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(VersionMiddleware).forRoutes(CategoryController);
  }
}
