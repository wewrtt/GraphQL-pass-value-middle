import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/configs/database/database.module';
import { FacebookStrategy } from 'src/shared/auth/strategies/facebook.strategy';
import { FileUploadService } from 'src/shared/upload-file/file.upload.service';
import { DataSource } from 'typeorm';
import { AtributeGroupProvider } from '../atribute-group/atribute-group.provider';
import { AtributeGroupRepository } from '../atribute-group/atribute-group.repository';
import { ProductController } from './product.controller';
import { ProductProvider } from './product.provider';
import { ProductRepository } from './product.repository';
import { ProductService } from './product.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductController],
  providers: [ProductService, FileUploadService,
    ProductRepository, ...ProductProvider],
  exports: [ProductService],
})
export class ProductModule {
}
