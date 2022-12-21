import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/configs/database/database.module';
import { CategoryController } from './category.controller';
import { CategoryEntity } from './category.entity';
import { CategoryProvider } from './category.provider';
import { CategoryRepository } from './category.repository';
import { CategoryService } from './category.service';
import { AuthModule } from 'src/shared/auth/auth.module';
import { FileUploadService } from 'src/shared/upload-file/file.upload.service';
import { CategoryResolver } from './category.resolver';

@Module({
  imports: [DatabaseModule, AuthModule],
  controllers: [CategoryController],
  providers: [
    CategoryService,
    FileUploadService,
    CategoryRepository,
    ...CategoryProvider,
    CategoryResolver,
  ],
  exports: [CategoryService],
})
export class CategoryModule {}
