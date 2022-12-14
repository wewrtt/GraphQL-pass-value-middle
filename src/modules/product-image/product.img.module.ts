import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/configs/database/database.module';
import { ProductImageProvider } from './product.img.provider';
import { ProductImageRepository } from './product.img.repository';
import { ProductImgController } from './product-img.controller';


@Module({
  imports: [DatabaseModule],
  controllers: [ProductImgController],
  providers: [ProductImageRepository, ...ProductImageProvider],
  exports: []
})
export class ProductImageModule { }
