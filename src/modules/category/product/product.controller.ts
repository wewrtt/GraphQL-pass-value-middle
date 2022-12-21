import {
  Body,
  Controller,
  Get,
  Post,
  UseInterceptors,
  UseGuards,
} from '@nestjs/common';
import { ProductService } from './product.service';
import {
  ApiConsumes,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateProductDto } from './dto/product.dto';
import { ProductEntity } from './product.entity';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('products')
@Controller('api/v1/products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('')
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ summary: 'Create product' })
  @ApiResponse({
    status: 201,
    description: 'create success.',
    type: ProductEntity,
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @UseInterceptors(FileInterceptor('file'))
  public async create(@Body() body: CreateProductDto) {
    // //return this.productService.create(body);
    // const { originalname } = file;
    // const data = await this.fileUploadService.uploadS3(file, awsBucket.imgProduct, Date.now() + "_" + originalname)
    return body;
  }

  @Get('/facebook')
  @UseGuards(AuthGuard('facebook'))
  async facebookLogin(): Promise<any> {
    return 'OK';
  }

  @Get('/facebook/redirect')
  @UseGuards(AuthGuard('facebook'))
  async facebookLoginRedirect(): Promise<any> {
    return {
      statusCode: 'OK',
      data: { req: 'a' },
    };
  }

  @Post('/search')
  @ApiParam({
    description: 'id product',
    name: 'id',
  })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: ProductEntity,
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  public findOne(@Body() body) {
    const { name, color, size } = body;
    return this.productService.findOne(body);
  }
}
