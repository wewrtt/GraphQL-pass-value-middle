import { JWT_CONFIG } from 'src/configs/constants.config';
import { JwtPayload } from './payloads/jwt-payload';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto';
import { UserEntity } from '../user/user.entity';
import { AUTH_EXCEPTION_MESSAGE } from './auth.constant';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtService: JwtService) {}

  async login({ phone_number, password }: LoginDto) {
    let user: UserEntity;
    try {
      user = await this.userService.getUserByPhoneNumber(phone_number);
    } catch (error) {
      throw new UnauthorizedException(AUTH_EXCEPTION_MESSAGE.PHONE_NUMBER_NOT_FOUND);
    }

    const isPasswordRight = await bcrypt.compare(password, user.password);
    if (!isPasswordRight) {
      throw new UnauthorizedException(AUTH_EXCEPTION_MESSAGE.WRONG_PASSWORD);
    }
    if (!user.status) {
      throw new UnauthorizedException(AUTH_EXCEPTION_MESSAGE.ACCOUNT_BLOCKED);
    }

    const tokenPayload: JwtPayload = {
      sub: user.id,
      phone_number: user.phone_number,
      isAdministrator: user.is_adminstrator,
      name: user.full_name,
    };

    const accessToken = this.jwtService.sign(tokenPayload);
    const refreshToken = this.jwtService.sign(tokenPayload, {
      secret: JWT_CONFIG.REFRESH_SECRET,
      expiresIn: JWT_CONFIG.REFRESH_EXPIRED_IN,
    });

    return { accessToken, refreshToken };
  }
}
