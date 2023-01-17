import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { fillObject, JwtAuthGuard } from '@taskforce/core';
import { AuthService } from '../auth/auth.service';
import CreateUserDto from './dto/create-user.dto';
import UpdateUserPasswordDto from './dto/update-user-password.dto';
import UpdateUserDto from './dto/update-user.dto';
import { LoggedUserRdo } from '../auth/rdo/logged-user.rdo';
import { UserRdo } from './rdo/user.rdo';

import { MongoidValidationPipe } from '../pipes/mongoid-validation.pipe';
import { UserService } from './user.service';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService
  ) {}

  @Post('register')
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The new user has been successfully created.',
  })
  async registerUser(@Body() dto: CreateUserDto) {
    const newUser = await this.userService.create(dto);
    const groups = [newUser.role];
    return fillObject(UserRdo, newUser, groups);
  }

  @ApiResponse({
    type: UserRdo,
    status: HttpStatus.OK,
    description: 'User is found',
  })
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async show(@Param('id', MongoidValidationPipe) id: string) {
    const existUser = await this.userService.getById(id);
    return fillObject(UserRdo, existUser);
  }

  @ApiBody({
    type: UpdateUserDto,
    description: 'Update user data',
  })
  @ApiResponse({
    type: UserRdo,
    status: HttpStatus.OK,
    description: 'User data has been successfully updated',
  })
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async updateUserData(
    @Param('id', MongoidValidationPipe) id: string,
    @Body() dto: UpdateUserDto
  ) {
    const updatedUser = await this.userService.update(id, dto);
    return fillObject(UserRdo, updatedUser);
  }

  @ApiBody({
    type: UpdateUserPasswordDto,
    description: 'Upload user avatar to server and update database',
  })
  @ApiResponse({
    type: LoggedUserRdo,
    status: HttpStatus.OK,
    description: 'User password has been successfully updated',
  })
  @UseGuards(JwtAuthGuard)
  @Patch('password')
  async updateUserPassword(@Body() dto: UpdateUserPasswordDto) {
    const updatedUser = await this.userService.updatePassword(dto);
    return fillObject(LoggedUserRdo, updatedUser);
  }
}
