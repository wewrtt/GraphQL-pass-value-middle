import { PublicRoute } from './../../common/decorators/public-route.decorator';
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto';

@ApiTags('Auth')
@Controller({
  version: ['1'],
  path: '',
})
export class AuthController {
  constructor(private authService: AuthService) {}

  @PublicRoute()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Body() body: LoginDto) {
    return this.authService.login(body);
  }
}
