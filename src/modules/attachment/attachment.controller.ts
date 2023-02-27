import { Body, Controller, Get, Post, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ApiBadRequestResponse, ApiConsumes, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateAttachmentDto } from './dto/create-attachment.dto';
import { ATTACHMENT_SWAGGER_RESPONSE } from './constants/attachment.constant';
import { FileInterceptor } from '@nestjs/platform-express';
import { AttachmentService } from './attachment.service';
import { QueryParamDto } from './dto/query-param.dto';

@ApiTags('Attachment')
@Controller({
  version: ['1'],
  path: 'attachments',
})
export class AttachmentController {
  constructor(private readonly attachmentService: AttachmentService) {}

  @Get('')
  @ApiOkResponse(ATTACHMENT_SWAGGER_RESPONSE.GET_LIST_SUCCESS)
  @ApiBadRequestResponse(ATTACHMENT_SWAGGER_RESPONSE.BAD_REQUEST_EXCEPTION)
  async getList(@Query() query: QueryParamDto) {
    return this.attachmentService.getList(query);
  }

  @Post('')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('attachment'))
  @ApiOkResponse(ATTACHMENT_SWAGGER_RESPONSE.CREATE_SUCCESS)
  @ApiBadRequestResponse(ATTACHMENT_SWAGGER_RESPONSE.BAD_REQUEST_EXCEPTION)
  async uploadAttachment(@Body() body: CreateAttachmentDto, @UploadedFile() file: Express.Multer.File) {
    return this.attachmentService.uploadAttachment(file, body.type);
  }
}
