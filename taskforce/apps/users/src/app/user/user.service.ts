import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '@taskforce/shared-types';
import { LoginUserDto } from '../auth/dto/login-user.dto';
import CreateUserDto from './dto/create-user.dto';
import UpdateUserPasswordDto from './dto/update-user-password.dto';
import UpdateUserDto from './dto/update-user.dto';
import { AuthUserError } from './user.constant';
import { UserEntity } from './user.entity';
import UserRepository from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async verifyUser(dto: LoginUserDto) {
    const { email, password } = dto;
    const existUser = await this.userRepository.findByEmail(email);

    if (!existUser) {
      throw new UnauthorizedException(AuthUserError.NotFound);
    }

    const userEntity = new UserEntity(existUser);
    if (!(await userEntity.comparePassword(password))) {
      throw new Error(AuthUserError.PasswordIsWrong);
    }

    return userEntity.toObject();
  }
  async create(dto: CreateUserDto) {
    const { userName, email, role, dateBirth, city, password } = dto;

    const user = {
      userName,
      email,
      role,
      avatar: {},
      dateBirth,
      city,
      passwordHash: '',
    } as User;

    const existUser = await this.userRepository.findByEmail(email);

    if (existUser) {
      throw new Error(AuthUserError.Exists);
    }

    const userEntity = await new UserEntity(user).setPassword(password);

    return this.userRepository.create(userEntity);
  }

  async getById(id: string) {
    return this.userRepository.findById(id);
  }

  async update(id: string, dto: UpdateUserDto) {
    const existUser = await this.userRepository.findById(id);

    if (!existUser) {
      throw new UnauthorizedException(AuthUserError.NotFound);
    }
    const newUserEntity = new UserEntity({ ...existUser, ...dto });
    return this.userRepository.update(id, newUserEntity);
  }

  async updatePassword(_id: string, dto: UpdateUserPasswordDto) {
    const { email, currentPassword, newPassword } = dto;

    const verifiedUser = await this.verifyUser({
      email: email,
      password: currentPassword,
    });

    const userEntity = await new UserEntity(verifiedUser).setPassword(
      newPassword
    );

    return this.userRepository.update(verifiedUser._id, userEntity);
  }
}
