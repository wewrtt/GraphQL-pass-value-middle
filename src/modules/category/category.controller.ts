import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
  Response,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiConsumes,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { awsBucket } from 'src/configs/configs.constants';
import { VERSION } from 'src/shared/decorator/version.decorator';
import { FileUploadService } from 'src/shared/upload-file/file.upload.service';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/category.create.dto';
import { UpadateCategoryDto } from './dto/category.update.dto';

@ApiTags('Category')
@Controller('api/categories')
export class CategoryController {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly fileUploadService: FileUploadService,
  ) {}

  @Get('')
  @ApiOkResponse({})
  @ApiBadRequestResponse()
  @HttpCode(200)
  public async getlist(@VERSION() version) {
    console.log(version)
    if (version === '1.0') {
      return this.categoryService.getListV1();
    } else if (version === '2.0') {
      return this.categoryService.getListV2();
    } else return 0;
  }
}
