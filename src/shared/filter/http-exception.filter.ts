import {
  Catch,
  ArgumentsHost,
  HttpException,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { ERROR_MESSAGE } from 'src/shared/constants/common.constants';
import { ERROR_CODE } from 'src/shared/constants/common.constants';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const message =
      exception.message || ERROR_MESSAGE.ERROR_MESSAGE_DEFAULT_SYSTEM;

    response.status(status).json({
      message:
        status == HttpStatus.INTERNAL_SERVER_ERROR
          ? ERROR_MESSAGE.ERROR_MESSAGE_DEFAULT_SYSTEM
          : message,
      code:
        exception instanceof HttpException && exception.getResponse()['code']
          ? exception.getResponse()['code']
          : ERROR_CODE.ERROR_MESSAGE_DEFAULT_SYSTEM,
      errors:
        exception instanceof HttpException
          ? exception.getResponse()['errors']
          : undefined,
      statusCode: status,
    });
  }
}
