import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const VERSION = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getResponse();
    return request.locals.version; // extract token from request
  },
)