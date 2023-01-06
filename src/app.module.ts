import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { DatabaseModule } from './configs/database/database.module';
import { VersionMiddleware } from './configs/version.middleware';
import { CategoryController } from './modules/category/category.controller';
import {} from 'cache-manager-redis-store';
import { LoggerMiddleware } from './shared/middleware/logger.middleware';
import { ProductModule } from './modules/product/product.module';
import { CategoryModule } from './modules/category/category.module';

@Module({
  imports: [DatabaseModule, ProductModule, CategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(VersionMiddleware, LoggerMiddleware)
      .forRoutes(CategoryController, { path: '*', method: RequestMethod.ALL });
  }
}
