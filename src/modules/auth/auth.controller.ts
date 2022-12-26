import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  // tóm lại việc của FE trong xác thực bên thứ 3 chỉ là việc cầm access token của fe gửi lên để lấy thông tin địnhh danh của user thông qua bên thứ 3
  // sau đó thự hiện các yêu cầu hệt như bình thường với user
  constructor(private readonly authService: AuthService) {}

  // cái này tượng trưng cho FE
  @Get('')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {}

  //cái này sẽ tượng trưng cho FE
  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  goodleRedirect(@Req() req) {
    // việc đưa lại access Token của google này tượng trưng chop việc FE nhận lại chứ hàm này ko phải của FE
    return this.authService.googleLogin(req);
  }

  //api này sẽ thực hiện việc nhận access token của FE rồi định danh user trong db
  @Post()
  @Post()
  async authenticate(@Body() tokenData: any) {
    // ở đây trả về thông tin user của goodle
    // 
    console.log(tokenData.tokenGoogle)
    const userInfo = await this.authService.authenticate(tokenData.tokenGoogle);
    //sau khi nhận được có thể làm việc định danh user như thông thường bằng cách check user trong db thông qua email nên ko viết thêm nữa
    // reuturn lại accesstoken lại cho FE
    return userInfo;
  }
}
