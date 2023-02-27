import { CreateUserDto } from './dto/create-user.dto';
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcrypt';
import { JWT_CONFIG, METADATA_CONFIG } from '../../configs/constants.config';
import { USER_EXCEPTION_MESSAGE } from './constants/user.constant';
import { DepartmentService } from '../department/department.service';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository, private departmentService: DepartmentService) {}

  public async createUser(data: CreateUserDto) {
    const department = await this.departmentService.getById(data.department_id);

    const user = await this.userRepository.findOne({ where: { phone_number: data.phone_number } });
    if (user) {
      throw new BadRequestException(USER_EXCEPTION_MESSAGE.USER_ALREADY_EXISTS);
    }

    const newUser = this.userRepository.create({
      ...data,
      password: await bcrypt.hash(METADATA_CONFIG.DEFAULT_PASSWORD, JWT_CONFIG.SALT_ROUNDS),
      department,
    });

    await this.userRepository.save(newUser);

    return newUser;
  }

  public async getDetails(id: number) {
    const user = await this.userRepository.findOne({ where: { id: id } });
    if (!user) {
      throw new NotFoundException(USER_EXCEPTION_MESSAGE.USER_NOT_FOUND);
    }
    return user;
  }

  async getUserByPhoneNumber(phone_number: string) {
    const user = await this.userRepository.findOne({ where: { phone_number } });
    if (!user) {
      throw new NotFoundException(USER_EXCEPTION_MESSAGE.USER_NOT_FOUND);
    }
    return user;
  }
}
