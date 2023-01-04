import {
  Catch,
  ArgumentsHost,
  HttpException,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Endpoint } from 'aws-sdk';
import { Response } from 'express';
import { ERROR_MESSAGE } from 'src/shared/constants/common.constants';
import { ERROR_CODE } from 'src/shared/constants/common.constants';
import { ILog } from '../service/log.interface';
import { CommonLogger } from '../service/logging';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  private logger = new CommonLogger('ERROR');
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const message =
      exception.message || ERROR_MESSAGE.ERROR_MESSAGE_DEFAULT_SYSTEM;
    if (status === HttpStatus.INTERNAL_SERVER_ERROR) {
      const log: ILog = {
        method: request.method,
        ipAddress: request.headers['x-forwarded-for'] || request.url,
        endpoint: request.url || 'localhost',
        error: exception,
      };
      const errorMessage = `${request.method} ${
        request.url
      } -BODY:${JSON.stringify(request.body)} - MESSAGE: ${message}`;
      this.logger.customError(errorMessage, exception.stack, log);
    }
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
