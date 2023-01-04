import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { CommonLogger } from '../service/logging';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new CommonLogger('REQUEST');
  use(request: Request, respone: Response, next: NextFunction): void {
    const { method, originalUrl } = request;
    const { statusCode } = respone;

    this.logger.customInfo(
      `${method} ${originalUrl} ${statusCode} - BODY: ${JSON.stringify(
        request.body,
      )} - PARAM: ${JSON.stringify(request.params)}`,
    );

    next();
  }
}
