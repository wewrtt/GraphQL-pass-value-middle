import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { DatabaseModule } from './configs/database/database.module';
import { ProductModule } from './modules/product/product.module';
import { AtributeGroupModule } from './modules/atribute-group/atribute-group.module';
import { AtributeModule } from './modules/atribute/atribute.module';
import { VersionMiddleware } from './configs/version.middleware';
import { CategoryController } from './modules/category/category.controller';
import { OptionModule } from './modules/option/option.module';
import { ProductImageModule } from './modules/product-image/product.img.module';
import { CategoryModule } from './modules/category/category.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver } from '@nestjs/apollo';
import { ApolloDriverConfig } from '@nestjs/apollo/dist/interfaces';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    ProductModule,
    ProductImageModule,
    CategoryModule,
    AtributeGroupModule,
    AtributeModule,
    DatabaseModule,
    OptionModule,
  ],
  controllers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(VersionMiddleware).forRoutes(CategoryController);
  }
}
