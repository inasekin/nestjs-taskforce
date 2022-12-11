import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserRdo } from './rdo/user.rdo';
import CreateUserDto from './dto/create-user.dto';
import { fillObject } from '@taskforce/core';
import { LoginUserDto } from './dto/login-user.dto';
import UpdateUserDto from './dto/update-user.dto';
import { LoggedUserRdo } from './rdo/logged-user.rdo';
import UpdateUserAvatarDto from './dto/update-user-avatar.dto';
import { UserAvatarRdo } from './rdo/user-avatar.rdo';
import { ApiResponse } from '@nestjs/swagger';
import UpdateUserPasswordDto from './dto/update-user-password.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The new user has been successfully created.',
  })
  async create(@Body() dto: CreateUserDto) {
    const newUser = await this.authService.register(dto);
    return fillObject(UserRdo, newUser);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    type: LoggedUserRdo,
    status: HttpStatus.OK,
    description: 'User has been successfully logged.',
  })
  async login(@Body() dto: LoginUserDto) {
    const verifiedUser = this.authService.verifyUser(dto);
    return fillObject(LoggedUserRdo, verifiedUser);
  }

  @Get(':id')
  @ApiResponse({
    type: UserRdo,
    status: HttpStatus.OK,
    description: 'User is found',
  })
  async show(@Param('id') id: string) {
    const existUser = await this.authService.getUser(id);
    return fillObject(UserRdo, existUser);
  }

  @Put('password')
  @ApiResponse({
    type: LoggedUserRdo,
    status: HttpStatus.OK,
    description: 'User password has been successfully updated',
  })
  async updateUserPassword(@Body() dto: UpdateUserPasswordDto) {
    const updatedUser = await this.authService.updateUserPassword(dto);
    return fillObject(LoggedUserRdo, updatedUser);
  }

  @Put('avatar')
  @ApiResponse({
    type: UserAvatarRdo,
    status: HttpStatus.OK,
    description: 'User avatar has been successfully updated',
  })
  async updateUserAvatar(@Body() dto: UpdateUserAvatarDto) {
    const updatedUser = await this.authService.updateUserAvatar(dto);
    return fillObject(UserAvatarRdo, updatedUser);
  }

  @Put(':id')
  @ApiResponse({
    type: UserRdo,
    status: HttpStatus.OK,
    description: 'User data has been successfully updated',
  })
  async updateUserData(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    const updatedUser = await this.authService.updateUserById(id, dto);
    return fillObject(UserRdo, updatedUser);
  }
}
