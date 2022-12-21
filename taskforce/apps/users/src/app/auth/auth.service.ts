import { Injectable } from '@nestjs/common';
import { UserMemoryRepository } from '../user/user-memory.repository';
import CreateUserDto from './dto/create-user.dto';
import { User } from '@taskforce/shared-types';
import {
  AUTH_USER_NOT_FOUND,
  AUTH_USER_PASSWORD_WRONG,
  ERROR_TEXT_AUTH_USER_EXISTS,
} from './auth.constant';
import * as dayjs from 'dayjs';
import { LoginUserDto } from './dto/login-user.dto';
import UpdateUserDto from './dto/update-user.dto';
import UpdateUserAvatarDto from './dto/update-user-avatar.dto';
import { UserEntity } from '../user/user.entity';
import UpdateUserPasswordDto from './dto/update-user-password.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userRepository: UserMemoryRepository) {}

  async register(dto: CreateUserDto) {
    const { userName, lastName, email, role, dateBirth, city, password } = dto;

    const user = {
      userName,
      lastName,
      email,
      role,
      avatar: '',
      dateBirth: dayjs(dateBirth).toDate(),
      city,
      passwordHash: '',
    } as User;

    const existUser = await this.userRepository.findByEmail(email);

    if (existUser) {
      throw new Error(ERROR_TEXT_AUTH_USER_EXISTS);
    }

    const userEntity = await new UserEntity(user).setPassword(password);

    return this.userRepository.create(userEntity);
  }

  async verifyUser(dto: LoginUserDto) {
    const { email, password } = dto;
    const existUser = await this.userRepository.findByEmail(email);

    if (!existUser) {
      throw new Error(AUTH_USER_NOT_FOUND);
    }

    const userEntity = new UserEntity(existUser);
    if (!(await userEntity.comparePassword(password))) {
      throw new Error(AUTH_USER_PASSWORD_WRONG);
    }

    return userEntity.toObject();
  }

  async getUser(id: string) {
    return this.userRepository.findById(id);
  }

  async updateUserAvatar(dto: UpdateUserAvatarDto) {
    const { email, avatar } = dto;

    const existUser = await this.userRepository.findByEmail(email);

    if (!existUser) {
      throw new Error(AUTH_USER_NOT_FOUND);
    }
    const userEntity = new UserEntity({ ...existUser, avatar });
    return this.userRepository.update(userEntity._id, userEntity);
  }

  async updateUserPassword(dto: UpdateUserPasswordDto) {
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

  async updateUserById(id: string, dto: UpdateUserDto) {
    const existUser = await this.userRepository.findById(id);

    if (!existUser) {
      throw new Error(AUTH_USER_NOT_FOUND);
    }
    const newUserEntity = new UserEntity({ ...existUser, ...dto });
    return this.userRepository.update(newUserEntity._id, newUserEntity);
  }
}
