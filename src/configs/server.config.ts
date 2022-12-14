import { INestApplication } from '@nestjs/common';

import { HttpExceptionFilter } from 'src/shared/filter/http-exception.filter';
import { TransformInterceptor } from 'src/shared/interceptors/transform.interceptor';
import { ValidationPipe } from 'src/shared/pipe/validation.pipe';

export default function (app: INestApplication) {
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());
}
