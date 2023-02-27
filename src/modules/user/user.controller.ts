import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { USER_SWAGGER_RESPONSE } from './constants/user.constant';
import { CreateUserDto } from './dto/create-user.dto';
import { ParamIdDto } from './dto/query-param.dto';
import { UserService } from './user.service';
@ApiTags('User')
@ApiBearerAuth()
@Controller({
  version: ['1'],
  path: 'users',
})
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('')
  @ApiCreatedResponse(USER_SWAGGER_RESPONSE.CREATE_USER_SUCCESS)
  @ApiBadRequestResponse()
  public createUser(@Body() createUserDto: CreateUserDto) {
    const { type, sid, department_id, phone_number, full_name, email, profile_img } = createUserDto;
    const data = { type, sid, department_id, phone_number, full_name, email, profile_img };
    return this.userService.createUser(data);
  }

  @Get(':id')
  @ApiOkResponse(USER_SWAGGER_RESPONSE.GET_USER_SUCCESS)
  @ApiBadRequestResponse()
  getUser(@Param() param: ParamIdDto) {
    return this.userService.getDetails(param.id);
  }
}
