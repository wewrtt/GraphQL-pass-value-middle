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
    // const version = await res.locals.version;
    // console.log(version);
    if (version === '1.0') {
      return this.categoryService.getListV1();
    } else if (version === '2.0') {
      return this.categoryService.getListV2();
    } else return 0;
  }

  @Post('')
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ summary: 'Create product' })
  @UseInterceptors(FileInterceptor('img'))
  @ApiBody({
    description: 'avatar category',
    type: CreateCategoryDto,
  })
  @ApiResponse({ status: 201, description: 'create success.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @HttpCode(201)
  public async create(@Body() body: CreateCategoryDto, @UploadedFile() img) {
    const { originalname } = img;
    const upload = await this.fileUploadService.uploadS3(
      img,
      awsBucket.avatarsCategory,
      Date.now() + '_' + originalname,
    );
    const { name } = body;
    const data: Partial<CreateCategoryDto> = {
      name,
      img: upload.toString(),
    };
    return this.categoryService.create(data);
  }

  @Get('/:id')
  @HttpCode(200)
  public getDetail(@Param('id') id: number) {
    return this.categoryService.getDetail(id);
  }

  @Put('/:id')
  @ApiConsumes('multipart/form-data')
  @ApiResponse({ status: 200, description: 'create success.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiBody({
    description: 'update category',
    type: CreateCategoryDto,
  })
  @HttpCode(200)
  @UseInterceptors(FileInterceptor('img'))
  public async update(
    @Param('id') id: number,
    @Body() body: UpadateCategoryDto,
    @UploadedFile() img: Express.Multer.File,
  ) {
    const { name } = body;
    const data = { name: name };
    if (img) {
      const category = await this.categoryService.getDetail(id);
      const url = category[0].img.split('/');
      const imgName = url[url.length - 1];
      await this.fileUploadService.deleteS3(awsBucket.avatarsCategory, imgName);
      const { originalname } = img;
      const upload = await this.fileUploadService.uploadS3(
        img,
        awsBucket.avatarsCategory,
        Date.now() + '_' + originalname,
      );
      data['img'] = upload.toString();
    }
    return this.categoryService.update(id, data);
  }

  @Delete('/:id')
  public async delete(@Param('id') id: number) {
    return this.categoryService.delete(id);
  }
}
